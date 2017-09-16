require 'test/unit'
require './job_config'

class TestJobConfig < Test::Unit::TestCase
   def setup
        p "start"
   end

   def test_JenApi
        t = JobConfig.new
        p t.set_config('response_api','test')
        p t.set_config('commit_id','*/test')
        p t.get_configxml.
   end
end

