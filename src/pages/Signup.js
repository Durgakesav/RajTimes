"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showFeatureNotice, setShowFeatureNotice] = useState(true);

  // Password validation rules
  const passwordRules = {
    length: { test: (pw) => pw.length >= 8, message: "At least 8 characters" },
    uppercase: { test: (pw) => /[A-Z]/.test(pw), message: "At least 1 uppercase letter" },
    number: { test: (pw) => /[0-9]/.test(pw), message: "At least 1 number" },
    special: { test: (pw) => /[!@#$%^&*(),.?\":{}|<>]/.test(pw), message: "At least 1 special character" },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Check password strength
    const failedRules = Object.values(passwordRules).filter(
      (rule) => !rule.test(form.password)
    );

    if (failedRules.length > 0) {
      setError("Password does not meet all requirements!");
      return;
    }

    setError("");
    alert("Signup successful! ✅");
    console.log("Form submitted:", form);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Feature notice */}
        <div className="alert alert-info text-center mb-0 rounded-0" role="alert">
          🔧 <strong>Feature Notice:</strong> This signup functionality is currently disabled and will be available in future versions.
        </div>

      {/* Main content */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center mb-3">Sign Up</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

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
              <ul className="mt-2" style={{ fontSize: "0.9rem" }}>
                {Object.entries(passwordRules).map(([key, rule]) => (
                  <li
                    key={key}
                    style={{
                      color: rule.test(form.password) ? "green" : "red",
                    }}
                  >
                    {rule.message}
                  </li>
                ))}
              </ul>
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
