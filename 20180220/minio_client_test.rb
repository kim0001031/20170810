require 'minio'
require 'open-uri'
 

mc = MinioRuby::MinioClient.new(endPoint:"http://localhost:8080", accessKey:"LX2DYWN3CYZTB3W8U007" , secretKey:"lqvWaKMhU2k7PVm2LheIR7Ea9kld20iwBUyin7ob", region:"us-east-1" )
#puts mc.getObject("sample","rogu.txt")

file = open("hello.txt").read
mc.putObject("sample", "tfile.txt", file, file.size, 'text/plain')

#mc.getObject("sample","rogu.txt")

 
