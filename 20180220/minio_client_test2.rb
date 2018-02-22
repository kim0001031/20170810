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
bu_str = "bucket720180222"

resource.create_bucket({
  acl: "private", 
  bucket: bu_str, # required
  create_bucket_configuration: {
    location_constraint: "EU",
  },
  grant_full_control: "GrantFullControl",
  grant_read: "GrantRead",
  grant_read_acp: "GrantReadACP",
  grant_write: "GrantWrite",
  grant_write_acp: "GrantWriteACP",
})

obj = resource.bucket(bu_str).object("folder/20180219.txt")
str = "sample"
obj.put(body: str)

buk = resource.bucket(bu_str)
#buk.delete

object = client.get_object({bucket: "bucketname",key: "20180219.txt"})
puts object.body.read

#res = client.list_buckets
#res.buckets.each do |bucket|
#  puts bucket.objects['minio']
#  puts obj.key 
#end
