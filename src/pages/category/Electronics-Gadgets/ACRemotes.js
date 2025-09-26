import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function ACRemotes() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="container py-5">
        {/* Breadcrumb */}
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
                <li className="breadcrumb-item active" aria-current="page">AC Remotes</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">AC Remote Controls</h1>
          <p className="lead text-muted">
            We stock a wide range of original and compatible AC remote controls for all major brands.
          </p>
        </div>

        {/* Custom Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/acremote.png"
                alt="AC Remotes"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="description-box p-4 rounded-4 shadow-sm bg-light">
              <p className="lead mb-3">
                At <strong>RajTimes</strong>, we provide remote controls for most air conditioners used in Indian households and commercial spaces.
              </p>
              <p className="text-muted mb-3">
                Whether you're using a smart inverter AC or a traditional split/window model, we have remotes compatible with:
              </p>
              <ul className="text-muted mb-3">
                <li><strong>LG</strong> – Smart & conventional ACs</li>
                <li><strong>Samsung</strong> – Original replacement models</li>
                <li><strong>Voltas</strong> – Universal & branded types</li>
                <li><strong>Daikin</strong> – High-efficiency inverter remotes</li>
                <li><strong>Carrier</strong> – Reliable & durable models</li>
                <li><strong>Blue Star</strong> – Compatible with most variants</li>
              </ul>
              <p className="text-muted mb-0">
                We also have universal remotes that work across multiple brands. Reach out for assistance on compatibility and bulk orders.
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

      {/* Styling */}
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
          line-height: 1.7;
          font-size: 1.05rem;
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
