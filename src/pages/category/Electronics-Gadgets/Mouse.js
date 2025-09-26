import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function Mouse() {
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
                <li className="breadcrumb-item active" aria-current="page">Mouse</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Computer Mouse</h1>
          <p className="lead text-muted">
            Wired and wireless mice from India’s top suppliers—designed for work, gaming, and everyday use.
          </p>
        </div>

        {/* Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/mouse.png"
                alt="Computer Mouse"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="description-box p-4 rounded-4 shadow-sm bg-light">
              <p className="lead mb-3">
                At <strong>RajTimes</strong>, we stock a curated range of computer mice to match every requirement—from casual home use to competitive gaming and professional office setups.
              </p>
              <p className="text-muted mb-3">
                Our selection includes leading international brands like Logitech, HP, Dell, Razer, Microsoft, Lenovo, and also reputed Indian brands such as Zebronics, iBall, Amkette, and Portronics. Whether you prefer a wireless mouse with silent clicks or a wired ergonomic model for all-day use, we’ve got you covered.
              </p>
              <p className="text-muted mb-3">
                All our products are sourced directly from official brand distributors across India to ensure quality, warranty, and affordability. We offer both bulk supply and retail options, with guaranteed post-sale support.
              </p>
              <p className="text-muted mb-0">
                Visit our store or contact us to explore available models, test samples, or bulk pricing.
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
