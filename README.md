# 🏡 PropertyEase

PropertyEase is a full-stack real estate web application built using the MERN Stack. It helps users explore property listings, search by location and budget, and view detailed information about properties through a simple, user-friendly interface.

## 🚀 Features

* **User Authentication:** Login and Signup functionality.
* **JWT Authentication:** Secure authentication for protected routes.
* **Add Properties:** Create new property listings.
* **Browse Properties:** View available properties.
* **Property Details:** View complete information about individual properties.
* **Search & Filter:** Find properties based on location and budget.
* **Responsive Design:** Accessible across desktop, tablet, and mobile devices.
* **Database Integration:** Store and manage user and property data using MongoDB.

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **Authentication:** JSON Web Token (JWT)
* **Tools:** Git, GitHub, VS Code, Postman

## 📂 Project Structure

```text
PropertyEase/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/          # Node.js and Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

*Note: The folder structure may vary depending on your implementation.*

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd PropertyEase
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Add your actual MongoDB connection string and a secure JWT secret to the `.env` file.

Start the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal and run:

```bash
cd PropertyEase/client
npm install
npm run dev
```

Open the local URL shown in your terminal to use the application.

*Note: Make sure your `package.json` files contain the required scripts and that your environment variables are configured correctly.*

## 🔗 API Endpoints

The application uses REST APIs to handle authentication and property management.

| Method | Endpoint                 | Description          |
| ------ | ------------------------ | -------------------- |
| POST   | `/api/auth/signup`       | Register a new user  |
| POST   | `/api/auth/login`        | Authenticate a user  |
| GET    | `/api/properties`        | Get all properties   |
| GET    | `/api/properties/:id`    | Get property details |
| POST   | `/api/properties`        | Add a property       |
| GET    | `/api/properties/search` | Search properties    |

*These are example endpoints. Update them to match your actual backend routes.*

## 🎯 Project Objective

The main goal of PropertyEase is to make property searching simpler and more convenient. Users can explore listings, check property details, and find suitable properties based on their location and budget.

Through this project, I aim to apply my knowledge of full-stack development, REST APIs, database management, and authentication to build a practical web application.

## 🌟 Future Enhancements

* Property image uploads
* Wishlist for saved properties
* Advanced search filters
* Interactive maps for property locations
* Online deployment

## 👩‍💻 Author

**Akshada Vijay Pal**
B.Tech – Computer Science and Engineering
