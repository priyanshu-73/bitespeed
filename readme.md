# Bitespeed Contact Management API

This project is a simple contact management API built with Node.js, Express, and MongoDB. It allows you to identify and manage contacts based on email and phone numbers.

## Prerequisites

- Node.js
- MongoDB

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/priyanshu-73/bitespeed.git
   cd bitespeed
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI and server port:

   ```properties
   PORT=3000
   MONGO_URI=your_mongodb_uri
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Identify Contact

- **URL:** `/identify`
- **Method:** `POST`
- **Body Parameters:**

  - `email` (string): The email of the contact.
  - `phone` (number): The phone number of the contact.

- **Response:**
  ```json
  {
    "contact": {
      "primaryContactId": "primary_contact_id",
      "emails": ["email1", "email2"],
      "phoneNumbers": ["phone1", "phone2"],
      "secondaryContactIds": ["secondary_contact_id1", "secondary_contact_id2"]
    }
  }
  ```
