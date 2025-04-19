# api-key-simple
A simple implementation of API keys without error handling or security features

📌 Features
✅ User Signup → Generates and stores API keys linked to usernames.
✅ Message Retrieval → Users provide their API key to receive a personalized greeting.
✅ Database Integration → Uses PostgreSQL with Prisma ORM.
✅ Basic Authentication → Ensures requests are authorized using stored API keys.

🚀 Endpoints
1️⃣ Sign Up
POST /signup
- Request Body: { "username": "exampleUser" }
- Response: { "api_key": "generatedKey123" }

2️⃣ Get Message
GET /message
- Headers: Authorization: <api_key>
- Response: "Hello, exampleUser!"


