import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function WaterHeaters() {
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
                  <a href="/category/Home-Services" className="text-decoration-none">Home & Services</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Water Heaters</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Water Heaters & Geysers</h1>
          <p className="lead text-muted">
            Explore our wide range of water heaters and geysers from trusted top brands.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/waterheaters.png"
                alt="Water Heaters and Geysers"
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
                Whether you need instant heating or large storage capacity, we offer water heaters and geysers suited to your home’s needs.
              </p>
              <p className="text-muted mb-3">Available Brands Include:</p>
              <ul className="text-muted mb-3">
                <li>AO Smith</li>
                <li>Bajaj</li>
                <li>Havells</li>
                <li>Crompton</li>
                <li>V-Guard</li>
                <li>Orient Electric</li>
              </ul>
              <p className="text-muted">
                All products and services are available at <strong>Raj Times</strong>. Experience quality and reliability for your home water heating needs.
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
