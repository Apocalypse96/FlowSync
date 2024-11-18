import React, { useState, useContext } from "react";
import axios from "axios";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import { ThemeContext } from "../App"; // Import ThemeContext from App.js

const initialNodes = [
  { id: "1", data: { label: "Start Flow" }, position: { x: 0, y: 0 }, style: { background: "rgba(255, 255, 255, 0.2)", color: "#212529" } },
  { id: "2", data: { label: "First Reminder Sent" }, position: { x: 200, y: 0 }, style: { background: "rgba(255, 255, 255, 0.2)", color: "#212529" } },
  { id: "3", data: { label: "Second Reminder Sent" }, position: { x: 400, y: 0 }, style: { background: "rgba(255, 255, 255, 0.2)", color: "#212529" } },
  { id: "4", data: { label: "Thank You Email Sent" }, position: { x: 600, y: -100 }, style: { background: "rgba(255, 255, 255, 0.2)", color: "#212529" } },
  { id: "5", data: { label: "No Renewal - End Flow" }, position: { x: 600, y: 100 }, style: { background: "rgba(255, 255, 255, 0.2)", color: "#212529" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
  { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
  { id: "e3-4", source: "3", target: "4", type: "smoothstep", label: "Renewed" },
  { id: "e3-5", source: "3", target: "5", type: "smoothstep", label: "Not Renewed" },
];

const FlowSimulation = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [logs, setLogs] = useState([]);
  const [isFlowRunning, setIsFlowRunning] = useState(false);

  const { theme } = useContext(ThemeContext); // Consume theme context

  const addTimestamp = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    return `${timestamp}: ${message}`;
  };

  const highlightNode = (nodeId) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === nodeId
          ? { ...node, style: { background: "rgba(0, 255, 0, 0.8)", color: "#fff", border: "2px solid neon" } }
          : node
      )
    );
  };

  const startFlow = async () => {
    setIsFlowRunning(true);
    setLogs([addTimestamp("Flow started. Sending first renewal reminder...")]);

    try {
      highlightNode("2");
      const response = await axios.post("http://localhost:5000/start-flow");
      const updatedLogs = response.data.logs.map((log, index) => {
        if (index === 0) highlightNode("3");
        if (log.includes("Thank You")) highlightNode("4");
        if (log.includes("No renewal")) highlightNode("5");
        return addTimestamp(log);
      });

      setLogs((prevLogs) => [...prevLogs, ...updatedLogs]);
    } catch (error) {
      setLogs((prevLogs) => [...prevLogs, addTimestamp("Error during flow simulation.")]);
    } finally {
      setIsFlowRunning(false);
    }
  };

  return (
    <div className={`flow-container ${theme}`}>
      <header className="header">FlowSync</header>
      <button onClick={startFlow} disabled={isFlowRunning} className="start-btn">
        {isFlowRunning ? "Flow in Progress..." : "Start Flow"}
      </button>
      <div className="flow-chart">
        <ReactFlow nodes={nodes} edges={initialEdges}>
          <Background variant="dots" gap={16} size={1} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <div className="flow-logs">
        <h3>Flow Logs:</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlowSimulation;
