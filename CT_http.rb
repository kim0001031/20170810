require 'test/unit'
require "./http"
require "./JenkinsApi"
require "./job_config"

class Testhttp < Test::Unit::TestCase

   def setup
        p "start"
   end

   def test_JenApi
        cfg = JobConfig.new
        api = JenApi.new("http://127.0.0.1:8080", "rail_test")
        htt = JenkinsHTTP.new

        p cfg.set_config('response_api','test')
        p cfg.set_config('commit_id','*/test')
        p cfg.get_configxml
        
        p api.build_job
        p api.set_job
        p api.status_job

        htt.apiget(api.build_job)
        htt.apipost(api.build_job, cfg.get_configxml)
   end

end

