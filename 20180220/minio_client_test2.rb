require 'aws-sdk'

credentials = Aws::Credentials.new(
  'LX2DYWN3CYZTB3W8U007',
  'lqvWaKMhU2k7PVm2LheIR7Ea9kld20iwBUyin7ob',
  nil
)

client = Aws::S3::Client.new(
  credentials: credentials,
  endpoint: 'http://localhost:8080',
  region: 'us-east-1',
  force_path_style: true
)

resource = Aws::S3::Resource.new(client: client)
obj = resource.bucket('sample').object('20180219.txt')
str = "sample"
obj.put(body: str)


#res = client.list_buckets
#res.buckets.each do |bucket|
#  puts bucket.objects['minio']
#  puts obj.key 
#end
