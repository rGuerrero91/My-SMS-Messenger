class TwilioController < ApplicationController
  skip_before_action :authenticate_user!

  def status_callback
    Rails.logger.info("Twilio status callback received: #{params.inspect}")
    message_sid = params["MessageSid"]
    new_status  = params["MessageStatus"] || params["SmsStatus"]

    if message_sid && new_status
      message = Message.find_by(twilio_sid: message_sid)
      if message
        message.update(status: new_status)
        Rails.logger.info("Updated message #{message.id} to status: #{new_status}")
      else
        Rails.logger.warn("No message found with SID: #{message_sid}")
      end
    else
      Rails.logger.warn("Missing MessageSid or status in callback")
    end
    
    head :ok
  end


# sample log output:
# Started POST "/twilio/status_callback" for 3.95.154.214 at 2025-06-08 06:19:48 -0400
# Processing by TwilioController#status_callback as */*
# Parameters: {"ApiVersion"=>"2010-04-01", "MessageStatus"=>"delivered", "RawDlrDoneDate"=>"2506081019", "SmsSid"=>"SMe555e72e51c8d0e1ef07f0a834d564f9", "SmsStatus"=>"delivered", "To"=>"+18777804236", "From"=>"+18884875593", "MessageSid"=>"SMe555e72e51c8d0e1ef07f0a834d564f9", "AccountSid"=>"AC60988eb69cb1ac24c9f910b7f6e719e2"}
# Twilio status callback received: #<ActionController::Parameters {"ApiVersion"=>"2010-04-01", "MessageStatus"=>"delivered", "RawDlrDoneDate"=>"2506081019", "SmsSid"=>"SMe555e72e51c8d0e1ef07f0a834d564f9", "SmsStatus"=>"delivered", "To"=>"+18777804236", "From"=>"+18884875593", "MessageSid"=>"SMe555e72e51c8d0e1ef07f0a834d564f9", "AccountSid"=>"AC60988eb69cb1ac24c9f910b7f6e719e2", "controller"=>"twilio", "action"=>"status_callback"} permitted: false>
# Completed 200 OK in 0ms (ActiveRecord: 0.0ms (0 queries, 0 cached) | MongoDB: 0.0ms | GC: 0.0ms)
end