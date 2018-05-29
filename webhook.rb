class Webhook
  
  @flor = ''
  @stage_array = []
  @ngn_branch  = {}

  def initialize
    @flor = self.mk_flor
    @stage_array = self.default_stage_array
    @ngn_branch = {'master' => [1,1,1,1,1,1], 'develop' => [1,1,1,0,0,0],
                   'feature*' => [1,1,1,0,0,0]}
  end

  def mk_flor
    flor = <<~EOS
     sequence
      task 'app_build'
      task 'package'
    EOS
  end

  def default_stage_array 
    ['app', 'unit', 'package', 'image', 'stg', 'pdt']
  end
  
  def update_stage_array(flor)
    @stage_array = flor_task(flor)
  end

  def flor_task(flor)
    array = []
    default_stage_array.each do |stage|
      if flor.include?(stage)
          array << stage
      end
    end
    array
  end

  def mk_skip_task(flag_array)
    array = []
    sample = self.default_stage_array
    flag_array.each_with_index do |flag, count|
      array << sample[count] if flag == 0
    end
    array
  end

  def skip_task(branch)
    array = self.mk_skip_task(self.match_branch_hash(branch))
    {'skip_task' => array}
  end

  def match_branch_hash(branch) 
    @ngn_branch.each do |key,value|
       return value if branch.match(key)
    end
  end
end

webhook =  Webhook.new
puts "master"
puts webhook.skip_task("master")
puts "feature_sample"
puts webhook.skip_task("feature_sample")

