class Message
  include Mongoid::Document
  include Mongoid::Timestamps
  field :content, type: String
  field :session_id, type: String
  field :twilio_sid, type: String
  field :status, type: String
end
