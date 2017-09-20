
require 'net/https'

class JenkinsHTTP
   def apiget(url)
       uri = URI.parse(url)
       http = Net::HTTP.new(uri.host, uri.port)

       http.use_ssl = true
       http.verify_mode = OpenSSL::SSL::VERIFY_NONE

       req = Net::HTTP::Get.new(uri.path)
       res = http.request(req)

   end
 
   def apipost(url,doc)
       uri = URI.parse(url)
       http = Net::HTTP.new(uri.host, uri.port)

       http.use_ssl = true
       http.verify_mode = OpenSSL::SSL::VERIFY_NONE

       req = Net::HTTP::Post.new(uri.path)
       req.body = doc
 
       res = http.request(req)
   end

end
