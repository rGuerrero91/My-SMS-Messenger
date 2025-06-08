class Message
  include Mongoid::Document
  include Mongoid::Timestamps
  field :body, type: String
  field :to, type: String
  field :session_id, type: String
  field :twilio_sid, type: String, default: :null
  field :status, type: String
end
