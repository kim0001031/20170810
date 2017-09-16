
## curl -so config.xml --user '[user]:[api-token]' http://127.0.0.1:8080/job/Rail_test/config.xml

require 'rexml/document'

class JobConfig
   CONFIGXML = '/home/ubuntu/20170810/config.xml'
   CONFIGXML_KEY = {
    'response_api':'project/scm/userRemoteConfigs/hudson.plugins.git.UserRemoteConfig/url',
    'commit_id':'project/scm/branches/hudson.plugins.git.BranchSpec/name'
  }
 
  def initialize
    @doc = REXML::Document.new(open(CONFIGXML))
  end
   
  def set_config(keyname,data)
     CONFIGXML_KEY.each do |key,value|
       if keyname == key then
          @doc.elements[value].text = data
          break
       end
     end
  end
  def get_configxml; @doc; end
end

