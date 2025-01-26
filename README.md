# Simple Payments App

A simple payments application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This app demonstrates a payments app.
Once a account is created it gives the user a random balance between 1 and 10000. The user can then make payments to anyone else who is registered in the database.

## Features

- User authentication and authorization.
- A user can make payments to anyone in the database

## Tech Stack

- **Frontend**: React.js with Tailwind CSS 
- **Backend**: Node.js and Express.js.
- **Database**: MongoDB (NoSQL database).
- **Authentication**: JSON Web Tokens (JWT).

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB cluster Url

### Steps
1. Clone the repository: <br>
   `git clone https://github.com/Mash707/payments-app.git`

2. `cd payments-app`

3. `cd backend`<br>`npm install`

4. `cd frontend` <br> `npm install`

5. Create a secret.js file in the backend folder type in `yourMongoDbUrl = <your_mongodb_url>` and then export it using `module.exports = { yourMongoDbUrl };`

6. `cd backend`<br>`node index.js`

7. `cd frontend`<br>`npm run dev`

8. Open your browser and visit `http://localhost:5173/`
