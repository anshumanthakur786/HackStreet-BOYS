// Load environment variables
require("dotenv").config();

// Import dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// POST route for chatbot messages
app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // Combine all user messages into one prompt
    const prompt = messages.map(msg => `${msg.role}: ${msg.content}`).join("\n");

    // Use Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // Send back the assistant's reply
    res.json({ role: "assistant", content: response });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to connect to Gemini API" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
