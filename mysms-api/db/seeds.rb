# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


require 'securerandom'

shared_session_id = SecureRandom.uuid

# 10.times do |i|
#   Message.create!(
#     body: "Message ##{i + 1}",
#     to: "+1555000#{100 + i}",
#     session_id: shared_session,
#     status: %w[pending delivered failed].sample,
#     twilio_sid: nil
#   )
# end


puts "Done seeding."