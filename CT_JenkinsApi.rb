require 'test/unit'
require './JenkinsApi'

class TestJenApi < Test::Unit::TestCase
   def setup
        p "start"
   end

   def test_JenApi
        t = JenApi.new("127.0.0.1:8080", "rail_test")
        p t.build_job
        p t.set_job
        p t.status_job
   end
end

