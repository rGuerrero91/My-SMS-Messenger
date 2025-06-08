# MySMS Messenger

MySMS Messenger is a full stack web app that allows users to send and view SMS messages.

## Tech Stack

- **Frontend:** Angular (latest stable)
- **Backend:** Ruby on Rails
- **Database:** MongoDB
- **SMS Provider:** Twilio API

## Features

- Send SMS messages via Twilio
- View previously sent messages (per session or user)
- Messages stored in MongoDB
- User authentication (login/logout)
## Getting Started

### Prerequisites

- Node.js & npm
- Ruby & Rails
- MongoDB
- Twilio account

### Setup

#### Backend

1. `cd backend`
2. `bundle install`
3. Configure MongoDB and Twilio credentials in environment variables
4. `rails db:setup`
5. `rails server`

#### Frontend

1. `cd frontend`
2. `npm install`
3. `ng serve`

### Deployment

You can deploy the app to your own server or a cloud provider.

## License

MIT