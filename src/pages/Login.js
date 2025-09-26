"use client";

import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", captcha: "" });
  const [captchaText, setCaptchaText] = useState("");
  const [error, setError] = useState("");
  const [robotChecked, setRobotChecked] = useState(false);
  const [showFeatureNotice, setShowFeatureNotice] = useState(true);
  const canvasRef = useRef(null);

  // Generate random captcha text
  const generateCaptchaText = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  };

  // Draw captcha
  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.8)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    ctx.font = "28px Verdana";
    ctx.textBaseline = "middle";
    for (let i = 0; i < text.length; i++) {
      const angle = (Math.random() - 0.5) * 0.5;
      ctx.save();
      ctx.translate(30 * i + 20, 25);
      ctx.rotate(angle);
      ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.9)`;
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }

    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.6)`;
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const generateCaptcha = () => {
    const text = generateCaptchaText();
    setCaptchaText(text);
    drawCaptcha(text);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.captcha !== captchaText) {
      setError("Captcha does not match ❌");
      return;
    }

    if (!robotChecked) {
      setError("Please verify 'I'm not a robot' ❌");
      return;
    }

    setError("");
    alert("Login successful ✅");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Feature notice */}
  
        <div className="alert alert-info text-center mb-0 rounded-0" role="alert">
         <strong>Feature Notice:</strong>🔧 This login functionality is currently disabled and will be available in future versions.
        </div>

      {/* Main content */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-light">
        <div className="card shadow p-4" style={{ maxWidth: "420px", width: "100%" }}>
          <h3 className="text-center mb-3">Login</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Captcha */}
            <div className="mb-3">
              <label className="form-label">Captcha</label>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <canvas
                  ref={canvasRef}
                  width="200"
                  height="50"
                  style={{ border: "1px solid #ccc", borderRadius: "6px" }}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={generateCaptcha}
                >
                  Refresh
                </button>
              </div>
              <input
                type="text"
                name="captcha"
                className="form-control"
                placeholder="Enter captcha"
                value={form.captcha}
                onChange={handleChange}
                required
              />
            </div>

            {/* I'm not a robot */}
            <div
              className="d-flex align-items-center p-2 border rounded mb-3"
              style={{ background: "#fff", cursor: "pointer" }}
              onClick={() => setRobotChecked(!robotChecked)}
            >
              <div
                className="me-2 d-flex justify-content-center align-items-center"
                style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid #666",
                  borderRadius: "4px",
                  background: robotChecked ? "#0d6efd" : "#fff",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {robotChecked ? "✔" : ""}
              </div>
              <span style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>
                I'm not a robot
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}
