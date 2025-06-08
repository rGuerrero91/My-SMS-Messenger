- **MySMS API** -
This is the backend API for MySMS Messenger, a full-stack messaging app built with:
    Ruby on Rails (API-only)
    Mongoid (MongoDB ODM)
    Devise JWT (token-based user authentication)
    Twilio (SMS delivery and webhook handling)

## Setup Instructions
1. Clone & Install Dependencies
    git clone https://github.com/rGuerrero91/My-SMS-Messenger.git
    cd mysms-api
    bundle install

2. MongoDB
    Make sure MongoDB is installed and running locally:
    brew services start mongodb-community
    Default URL assumed: mongodb://localhost:27017/mysms_api_development

3. Environment Variables
    Create a .env or export the following:
    TWILIO_ACCOUNT_SID=your_twilio_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=+15555555555

    These are required for JWT auth and SMS sending.

4. Run the Server
    rails s


## Authentication Endpoints

`POST /users`
Register new user

`POST /users/sign_in`
Log in (returns JWT)

`DELETE /users/sign_out`
Log out (client-side JWT delete)

Login Example
    POST /users/sign_in
    {
      "user": {
        "email": "user@example.com",
        "password": "password123"
      }
    }

On success, the response will contain a JWT token in the Authorization response header:
    Authorization: Bearer <your_token_here>

Use this token in all subsequent requests to access protected endpoints.

## Messages Endpoints (Auth Required)
`GET /messages`
List current user's messages

`POST /messages`
Create message and optionally send via Twilio

    POST /messages
    {
      "message": {
        "to": "+15555555555",
        "body": "Hey from MySMS!"
      }
    }

On success, stores the message in MongoDB and sends it via Twilio.

## Twilio Integration
**Sending SMS** 

The backend uses the official twilio-ruby gem to send messages.

In `MessagesController#create`, a message is created and sent using Twilio's API:
    client = Twilio::REST::Client.new
    client.messages.create(
      from: ENV['TWILIO_PHONE_NUMBER'],
      to: message_params[:to],
      body: message_params[:body]
    )

##### Webhook Support 
**Twilio SMS Status Callback Integration**
This application integrates with Twilio's Status Callback feature to track the delivery status of outgoing SMS messages.

`Message is Sent`
When you send a message using the SendSms.call service, the status_callback URL is included in the Twilio API request.

`Twilio Sends Status Updates`
Twilio performs a POST request to your app's /twilio/status_callback endpoint as the message status changes (queued, sent, delivered, undelivered, etc.).

`Status is Updated`
The controller parses the incoming parameters and updates the corresponding Message record in MongoDB.



## Testing with Postman
After logging in, copy the Authorization header value (Bearer token) into future requests.

Example:
    GET /messages
    Authorization: Bearer <your_token_here>



## Environment Variables Required

`TWILIO_ACCOUNT_SID`: Twilio Account SID
`TWILIO_AUTH_TOKEN`: Twilio Auth Token
`TWILIO_FROM_NUMBER`: Your Twilio phone number
`TWILIO_STATUS_CALLBACK`: Full URL to your callback endpoint 

`example`: start a tunnel with ngrok to expose the local server and insert the uri before "/twilio/status_callback"
TWILIO_STATUS_CALLBACK='https://c668-146-70-186-126.ngrok-free.app/twilio/status_callback'


## Notes

Devise is modified for Mongoid by overriding primary_key to support _id.

JWT secret should be kept secure and rotated for production.

License MIT