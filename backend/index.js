const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FlowLog = require("./models/FlowLog");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/newsletter-flow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/start-flow", async (req, res) => {
    const { waitTime = 10 } = req.body; // Default wait time is 10 seconds
    const logs = [];
    const addLog = async (message) => {
        const logEntry = `${new Date().toLocaleTimeString()}: ${message}`;
        logs.push(logEntry);
        await FlowLog.create({ message: logEntry });
    };
  
    await addLog("First renewal reminder sent.");
    await new Promise((resolve) => setTimeout(resolve, waitTime * 1000)); // Custom wait time
  
    const firstRenewal = Math.random() > 0.5;
    if (firstRenewal) {
      await addLog("Subscription renewed. Thank you email sent.");
      return res.json({ logs });
    }
  
    await addLog("Second renewal reminder sent.");
    await new Promise((resolve) => setTimeout(resolve, waitTime * 1000)); // Custom wait time
  
    const secondRenewal = Math.random() > 0.5;
    if (secondRenewal) {
      await addLog("Subscription renewed. Thank you email sent.");
    } else {
      await addLog("No renewal. Flow ended.");
    }
  
    res.json({ logs });
});
  



  
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
