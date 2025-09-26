"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    // ✅ Set year on client only to prevent hydration mismatch
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-dark text-light pt-4 mt-5 shadow-lg">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Raj Times</h5>
            <p className="small">
              Your one-stop shop for the best products. Fast delivery, great
              deals, and quality service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Connect with Us</h6>
            <p className="small mb-1">📧 support@myshop.com</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Warning Message */}
        <div className="alert alert-warning small my-3 text-center" role="alert" style={{ fontSize: "0.8rem" }}>
          Please note: All brands, products, and images are subject to change based on stock availability, pricing, and supplier updates.
        </div>

        {/* Bottom Bar */}
        <div className="text-center border-top border-secondary pt-3 pb-2 mt-3">
          <p className="mb-0 small">
            © {year} Raj Times. All rights reserved. | Developed by{" "}
            <span className="fw-bold text-info">DK Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
