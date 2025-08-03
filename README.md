
A Node.js + Express.js backend API for a photography services platform. It handles user registration, login (with mock OTP), service inquiries,
partner onboarding & verification, portfolio management, and admin dashboards.

🚀 Tech Stack
Node.js / Express.js

MongoDB / Mongoose

JWT (Authentication)

Passport.js (Authorization)

Joi (Input validation)

Dotenv

📂 Project Structure

photograph-backend/
├── controllers/
├── routes/
├── models/
├── services/
├── middlewares/
├── config/
├── app.js
├── server.js
└── .env
🔑 Features
✅ User Registration by Role (client, partner, admin)

🔐 JWT Authentication & Role-based Access


📱 Mock OTP generation on signup (logged to console)

📥 Clients can submit service inquiries
   passport services : for check the token is valid or not then check the role (but i check the role for only client ) admin and partner role is not check for now (infacts function is written)

🧑‍💼 Partners can:

Submit verification details

Upload portfolio entries

Fetch matched leads

🛠 Admin Dashboard:

View pending partner verifications

Approve/Reject with comments

see total clients and partner 

Fetch KPIs (e.g. total clients, partners, etc.)
