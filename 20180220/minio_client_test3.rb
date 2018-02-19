require 'aws-sdk'

class Minio
  def initialize(access_key, secret_key, region, endpoint)
    @credentials = Aws::Credentials.new(
          access_key, 
          secret_key, 
          nil
         )

    @client = Aws::S3::Client.new(
          credentials: @credentials,
          endpoint: endpoint,
          region: region,
          force_path_style: true
         )

    @resource = Aws::S3::Resource.new(client: @client)
  end

  def obj_put_string(bucket, key, str)
    obj = @resource.bucket(bucket).object(key)
    obj.put(body: str)
  end

  def obj_put_io(bucket, key, file)
    obj = @resource.bucket(bucket).object(key)
    File.open(file, 'rb') do |buf|
      obj.put(body: buf)
    end
  end

  #res = client.list_buckets
  #res.buckets.each do |bucket|
  #  puts bucket.objects['minio']
  #  puts obj.key 
  #end

end
