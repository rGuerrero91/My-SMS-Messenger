class Message
  include Mongoid::Document
  include Mongoid::Timestamps
  field :user_id, type: BSON::ObjectId
  field :body, type: String
  field :to, type: String
  field :twilio_sid, type: String, default: :null
  field :status, type: String
  # field :session_id, type: String

  belongs_to :user
end
