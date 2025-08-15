// src/components/Chatbot.js
import React, { useState, useEffect } from "react";
import "./Chatbot.css"; // make sure this file exists

// Simple AI-style reply logic
function getBotReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes("size")) return "Use our size chart — if unsure, pick the larger size.";
  if (msg.includes("return")) return "You can return items within 14 days with tags intact.";
  if (msg.includes("shipping") || msg.includes("deliver")) return "Standard delivery is 3–5 days. Express available at checkout.";
  if (msg.includes("fabric") || msg.includes("material")) return "We use high-quality fabrics — dry clean recommended.";
  return "Hi! I can help with sizes, shipping, returns, and fabric info. Ask me anything!";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hi! I'm your MEN-OUTFITTER assistant. Ask about sizes, shipping, or returns." }
  ]);
  const [text, setText] = useState("");

  // Scroll to bottom on new messages
  useEffect(() => {
    if (!open) return;
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }, [messages, open]);

  const sendMessage = (msg) => {
    if (!msg.trim()) return;
    // Add user message
    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text: msg }]);
    setText("");

    // Bot reply after short delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: "bot", text: getBotReply(msg) }]);
    }, 700);
  };

  return (
    <>
      {!open && (
        <button className="chat-launcher" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="brand">
              <div className="brand-mark-sm">MO</div>
              <div>
                <div className="brand-title">MEN-OUTFITTER</div>
                <div className="muted" style={{ fontSize: 12 }}>Style Assistant</div>
              </div>
            </div>
            <button className="btn-close" onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((m) => (
              <div key={m.id} className={`chat-bubble ${m.from === "user" ? "chat-user" : "chat-bot"}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-inputbar">
            <input
              type="text"
              placeholder="Ask about sizing, returns..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(text)}
            />
            <button className="btn-send" onClick={() => sendMessage(text)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
