import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function Watches() {
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
                <li className="breadcrumb-item active" aria-current="page">Watches</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold text-gradient">Smart Watches</h1>
          <p className="lead text-muted">
            Explore premium smartwatches and fitness trackers from top Indian and global brands.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 mb-4">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/Watch1.png"
                alt="Smartwatch display"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/Watch2.png"
                alt="Smart fitness tracker"
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
                At <strong>RajTimes</strong>, we bring you a wide selection of smartwatches and fitness trackers from both leading global brands and reliable Indian manufacturers.
              </p>
              <p className="text-muted mb-3">
                Our Indian smartwatch lineup includes popular names like <strong>boAt</strong>, <strong>Noise</strong>, <strong>Fire-Boltt</strong>, and <strong>Zebronics</strong>—all known for their affordability, design, and cutting-edge features.
              </p>
              <p className="text-muted mb-3">
                We also offer premium international brands including <strong>Apple</strong>, <strong>Samsung</strong>, <strong>Fitbit</strong>, <strong>Garmin</strong>, <strong>Fossil</strong>, and <strong>Amazfit</strong>. Whether you're looking for advanced health tracking, sports features, or everyday smart connectivity, we've got you covered.
              </p>
              <p className="text-muted mb-0">
                All watches are sourced from certified Indian distributors, ensuring authenticity, warranty support, and excellent value.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-4">
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
        }

        .breadcrumb {
          background: transparent;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #6c757d;
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
      `}</style>
    </>
  );
}
