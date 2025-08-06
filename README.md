# 📘 User Management REST API

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas + Mongoose
- CORS

---

## 📦 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Ayushgit51/forty4.tech-Assignment.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env

# 4. Start the server
node server.js
```

---

## 🛠 .env.example

```env
MONGO_URI=Add Any URI of your database
PORT=5000
```

---

## 📂 Folder Structure

```
user-api/
├── controllers/
│   └── userController.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env.example
├── server.js
├── package.json
├── README.md
```

---

## 🧪 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/users`       | Get all users       |
| GET    | `/api/users/:id`   | Get user by ID      |
| POST   | `/api/users`       | Create a new user   |
| PUT    | `/api/users/:id`   | Update user details |
| DELETE | `/api/users/:id`   | Delete a user       |

---

## 📌 Example API Request using `curl`

### ➕ Create a User

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: body raw
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "555-123456",
    "company": "X Corp",
    "address": {
      "city": "Delhi",
      "zipcode": "110001",
      "geo": {
        "lat": "28.61",
        "lng": "77.23"
      }
    }
  }'
```

---

### 📥 Get All Users

```bash
using get http://localhost:5000/api/users
```

---

### 📥 Get Single User

```bash
using get http://localhost:5000/api/users/objectId
```

---

### ✏️ Update User

```bash
curl -X PUT http://localhost:5000/api/users/objectId
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name",
    "email": "updated@example.com"
  }'
```

---

### ❌ Delete User

```bash
curl -X DELETE http://localhost:5000/api/users/objectId
```

---

## ✅ Features

- RESTful API design
- Proper use of HTTP status codes
- Input validation and error handling
- Clean and modular folder structure
- MongoDB schema design with embedded objects (address, geo)
- CORS enabled for frontend integration

---

## 👨‍💻 Author

- Name: Ayush Kumar
- GitHub: [Ayushgit51](https://github.com/Ayushgit51)
