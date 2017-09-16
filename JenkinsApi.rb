
class JenApi

   CONFIG  = '/config.xml'
   BUILD   = '/build'
   STATUS  = '/api/xml?tree=jobs[name],views[name,jobs[name]]'
#   STATUS  =  '/apis'  
   def initialize(url,job_name)
       @url      = url
       @job_name = job_name 
   end


#   def build_job;  @url+"/job/"+@job_name+JenStatic.CONFIG; end
   def build_job;  @url+"/job/"+@job_name+CONFIG;  end
   def set_job;    @url+"/job/"+@job_name+BUILD;   end
   def status_job; @url+"/job/"+@job_name+STATUS;  end
end

