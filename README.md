
# Green Garden Insights Hub

This project is split into two main folders:

## Frontend (React)
Located in the root directory, this contains the React application built with:
- React
- React Router
- Tailwind CSS
- Shadcn UI components
- Firebase (for authentication)
- Axios (for API calls)

To run the frontend:
```
npm install
npm run dev
```
The frontend runs on http://localhost:8080 by default.

## Backend (Node.js/Express)
Located in the `/backend` folder, this contains the Express server with MongoDB connection:
- Express.js
- MongoDB
- CORS middleware

To run the backend:
```
cd backend
npm install
npm run dev
```
The backend runs on http://localhost:5000 by default.

## Environment Variables
- Frontend: Firebase configuration is included in the source code.
- Backend: MongoDB connection string is stored in the backend/.env file.

## Project Structure
- `/src` - Frontend React application
- `/backend` - Backend Express API
- `/public` - Static assets

Make sure both frontend and backend are running simultaneously for the full application to work.
