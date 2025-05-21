
# Green Garden Insights Hub

This project is split into two main folders:

## Frontend (React)
Located in the root directory, this contains the React application built with:
- React
- React Router
- Tailwind CSS
- Shadcn UI components
- Firebase (for authentication)
- RESTful API (for backend communication)

## Backend (Node.js/Express)
Located in the `/backend` folder, this contains the Express server with MongoDB connection:
- Express.js
- MongoDB
- CORS middleware

## Installation & Setup

### Cloning the Repository
```bash
git clone https://github.com/yourusername/green-garden-insights.git
cd green-garden-insights
```

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
PORT=5000
```

Start the backend server:
```bash
npm run dev
```
The backend runs on http://localhost:5000

### Frontend Setup
```bash
# Return to the project root
cd ..
npm install
npm run dev
```
The frontend runs on http://localhost:8080

## Project Structure
- `/src` - Frontend React application
- `/backend` - Backend Express API
- `/public` - Static assets

Make sure both frontend and backend are running simultaneously for the full application to work.
