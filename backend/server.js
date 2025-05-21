
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
const uri = "mongodb+srv://GreenGarden:lieAyM0mYdJmxgd1@trytalk.omvjuoj.mongodb.net/?retryWrites=true&w=majority&appName=TryTalk";

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Database connection function
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    
    // Get or create collections
    const db = client.db("greenGarden");
    const tipsCollection = db.collection("tips");
    const usersCollection = db.collection("users");
    
    return { tipsCollection, usersCollection };
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

// Routes
app.get('/', (req, res) => {
  res.send('Green Garden API is running!');
});

// Start server and connect to DB
async function startServer() {
  try {
    const { tipsCollection, usersCollection } = await connectToDatabase();
    
    // Tips routes
    app.get('/api/tips', async (req, res) => {
      try {
        const tips = await tipsCollection.find({}).toArray();
        res.json(tips);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    // User routes
    app.get('/api/users', async (req, res) => {
      try {
        const users = await usersCollection.find({}).toArray();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();

// Add process event handlers for graceful shutdown
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
