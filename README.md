# **FlowSync: Newsletter Subscription Renewal Flow**

### **Project Overview**
**FlowSync** is an interactive and automated solution designed to manage newsletter subscription renewals. This project provides a visual simulation of the renewal process, allowing users to monitor each step, from sending reminders to tracking renewal outcomes. Built with **React**, **React Flow**, **Node.js**, and **MongoDB**, **FlowSync** delivers a modern and user-friendly experience with dynamic light and dark mode themes.

### **Features**
1. **Interactive Flow Simulation**:
   - A visual flowchart dynamically highlights each stage of the renewal process.
   - Smooth transitions for a professional look.
2. **Dynamic Light/Dark Mode**:
   - Fully responsive and togglable light/dark modes.
   - Entire page adapts seamlessly to the chosen theme.
3. **Real-Time Logs**:
   - Displays the progress of the flow, including reminders sent, responses received, and outcomes.
4. **Backend Integration**:
   - Node.js and MongoDB manage flow states, logs, and API interactions.

### **How It Works**
1. **Flow Process**:
   - Sends the **first renewal reminder** email.
   - Waits for 3 days while checking for renewal status.
   - If no renewal:
     - Sends a **second reminder** email.
     - Waits an additional 2 days for a response.
   - Final Actions:
     - If the user renews, sends a **Thank You** email and ends the flow.
     - If not renewed, ends the flow with no further actions.
2. **Visual Representation**:
   - Flowchart nodes represent each stage.
   - Nodes are dynamically highlighted during execution.

### **Tech Stack**
- **Frontend**: React with React Flow
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Styling**: CSS with responsive design for modern light and dark modes

### **Project Assumptions**
- Email sending is **simulated**; no actual emails are sent.
- Delays are time-based and **simulated** for demonstration purposes.
- MongoDB is used to store flow states and logs locally.

---

### **Installation Guide**

#### **1. Clone the Repository**
```bash
git clone https://github.com/Apocalypse96/FlowSync.git
cd FlowSync
```

#### **2. Set Up the Frontend**
```bash
npm install
npm start
```

#### **3. Set Up the Backend**
```bash
cd backend
npm install
node index.js
```

#### **4. Set Up MongoDB**
- Ensure MongoDB is running locally or use a hosted MongoDB instance.
- Update the connection string in the backend configuration file.

#### **5. Run the Application**
- Open your browser and navigate to: `http://localhost:3000`.

---

### **Key Components**

#### **Frontend**
- **FlowSimulation.js**:
  - Manages the flowchart simulation with dynamic updates.
- **App.js**:
  - Provides global theming and context for the components.
- **Dynamic UI**:
  - Implements light/dark mode for user preference.

#### **Backend**
- **Node.js API**:
  - `/start-flow`: Starts the flow simulation and returns log details.
- **Flow Logic**:
  - Handles flow progression, including delays and status checks.
- **Database**:
  - MongoDB stores flow states and user interaction logs.

#### **Styling**
- Modern CSS features:
  - Glassmorphism-inspired UI with responsive design.
  - Seamless light/dark mode transitions for accessibility and aesthetics.

---

### **How to Use**

1. Launch the application using the installation steps above.
2. Click the **Start Flow** button to initiate the renewal process.
3. View the flow simulation and real-time logs as the system progresses through reminders and responses.
4. Toggle between light and dark modes for your preferred theme.

---

### **Future Enhancements**

1. **Email Integration**:
   - Use email services like **SendGrid** or **AWS SES** to send real emails.
2. **User Authentication**:
   - Add user login to allow personalized subscription flows.
3. **Customizable Flows**:
   - Enable the creation of custom renewal flows for other processes.
4. **Advanced Reporting**:
   - Implement analytics dashboards to track renewal rates and user behavior.
5. **Production Deployment**:
   - Host the application on **Heroku**, **Vercel**, or similar platforms.

---
