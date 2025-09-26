import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function ACStabilizer() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="container py-5">
        {/* Breadcrumbs */}
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/categories" className="text-decoration-none">Categories</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/category/Electronics-Gadgets" className="text-decoration-none">Electronics-Gadgets</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">AC Stabilizer</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">AC Stabilizers</h1>
          <p className="lead text-muted">
            Protect your air conditioners from voltage fluctuations with our reliable stabilizers.
          </p>
        </div>

        {/* Custom Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/acstabilizer.png"
                alt="AC Stabilizer Banner"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        {/* Brand Description */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="description-box p-4 rounded-4 shadow-sm bg-light">
              <p className="lead mb-3">
                At <strong>RajTimes</strong>, we offer a comprehensive selection of AC stabilizers, designed to ensure smooth operation and safeguard your appliances.
              </p>
              <p className="text-muted mb-3">
                Explore our range including:
              </p>
              <ul className="text-muted mb-3">
                <li><strong>Digital Stabilizers</strong> – Smart control with real-time voltage monitoring</li>
                <li><strong>Automatic Voltage Regulators</strong> – Seamless adjustment with built-in cut-off protection</li>
                <li><strong>Servo Stabilizers</strong> – High-performance models for sensitive equipment</li>
                <li><strong>Single & Three Phase Stabilizers</strong> – Ideal for both home and commercial AC units</li>
                <li><strong>High Voltage Models</strong> – For industrial-grade usage or rural installations</li>
              </ul>
              <p className="text-muted">
                We carry popular brands like V-Guard, Microtek, Everest, Monitor, and Bluebird, trusted by households and businesses across India.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={() => router.back()}
          >
            ← Back to Categories
          </button>
        </div>
      </div>

      <Footer />

      {/* Page Styling */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #ff4b5c, #800000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .img-wrapper {
          transition: transform 0.3s ease;
        }

        .img-wrapper:hover {
          transform: scale(1.02);
        }

        .description-box {
          background-color: #f8f9fa;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .breadcrumb {
          background: transparent;
          padding: 0;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #6c757d;
        }
      `}</style>
    </>
  );
}
