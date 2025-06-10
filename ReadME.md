# MySMS Messenger

MySMS Messenger is a monorepo for a web app that allows users to send and view SMS messages via the Twilio api.

To demo the frontend, visit https://my-sms-messenger.vercel.app/

Backend: `/mysms-api`
Frontend: `/mysms-client`

## Tech Stack

- **Frontend:** Angular
- **Backend:** Ruby on Rails
- **Database:** MongoDB
- **SMS Provider:** Twilio API

## Features

- Send SMS messages via Twilio
- View previously sent messages
- Messages stored in MongoDB
- User authentication
## Getting Started

### Prerequisites

- Node.js & npm
- Ruby & Rails
- MongoDB
- Twilio account

### Setup

#### Backend

1. `cd mysms-api`
2. `bundle install`
3. Configure MongoDB and Twilio credentials in environment variables
4. `rails db:setup`
5. `rails server`

## License

MIT
