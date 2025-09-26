import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function Phones() {
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
                <li className="breadcrumb-item active" aria-current="page">Phones</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Heading */}
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold text-gradient">Mobile Phones</h1>
          <p className="lead text-muted">
            Discover premium smartphones sourced from India's top distributors.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 mb-4">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/Phones1.png"
                alt="Smartphones at RajTimes"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/Phones2.png"
                alt="Mobile Phones at RajTimes"
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
                At <strong>RajTimes</strong>, we take pride in offering a wide selection of mobile phones from top brands including <strong>Samsung</strong>, <strong>Apple</strong>, <strong>OnePlus</strong>, <strong>Xiaomi</strong>, <strong>Realme</strong>, <strong>Vivo</strong>, and more.
              </p>
              <p className="text-muted mb-3">
                Our smartphones are sourced directly from certified suppliers and top-tier wholesalers across India, ensuring you get authentic devices at competitive prices.
              </p>
              <p className="text-muted mb-0">
                Whether you're seeking high performance, long battery life, sleek designs, or value-for-money options, RajTimes offers reliable choices with excellent post-sales support. Explore devices with the latest features and innovations suited for work, photography, gaming, and everyday use.
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

      {/* Custom CSS */}
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
