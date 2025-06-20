require 'twilio-ruby'

class SendSms
    def self.call(to:, body:)
        account_sid = ENV['TWILIO_ACCOUNT_SID']
        auth_token = ENV['TWILIO_AUTH_TOKEN']
        from_number = ENV['TWILIO_FROM_NUMBER'] || '+15017122661'
        @client = Twilio::REST::Client.new(account_sid, auth_token)

        message = @client
                  .api
                  .v2010
                  .messages
                  .create(
                    body: body,
                    from: from_number,
                    to: to,
                    status_callback: ENV['TWILIO_STATUS_CALLBACK']
                  )

        puts  "Message Sent"

        message

    rescue Twilio::REST::RestError => e
        puts "Unable to Send Message"
        nil
    end
end