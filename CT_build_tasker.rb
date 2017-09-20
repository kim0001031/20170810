require 'test/unit'
require './tasker'

class TestBuildTasker < Test::Unit::TestCase
    
   def setup
        p "start"
   end

   def test_BuildTasker 
     ganger = "" 
     conf   = ""
     message = { 
       'exit':'',
       'nid':'',
       'payload':{
          'message':'akashi',
          'message2':'akashi2'
        },
       'attd':'',
       'attl':'build',
       'tasker':'',
       'taskname':''   
     }

     test = BuildTasker.new(ganger,conf,message)
   end
end
