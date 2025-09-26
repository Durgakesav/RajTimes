import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function TripodStand() {
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
                <li className="breadcrumb-item active" aria-current="page">Tripod Stand</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Tripod Stands</h1>
          <p className="lead text-muted">
            Explore our diverse collection of tripod stands designed for cameras, smartphones, and more.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/tripodstand.png"
                alt="Tripod Stand"
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
                Whether you’re shooting photos, videos, or vlogging, our tripod stands offer stability and flexibility to get the perfect shot.
              </p>
              <p className="text-muted mb-3">Types of Tripod Stands Available:</p>
              <ul className="text-muted mb-3">
                <li><strong>Camera Tripods</strong> – Durable and adjustable for professional use</li>
                <li><strong>Phone Tripods</strong> – Compact and portable stands for mobile devices</li>
                <li><strong>Selfie Stick Tripods</strong> – Multi-functional for selfies and vlogging</li>
                <li><strong>Table Top Tripods</strong> – Small stands ideal for desk setups</li>
                <li><strong>Professional Tripods</strong> – Heavy-duty tripods for demanding shoots</li>
                <li><strong>Flexible Tripods</strong> – Bendable legs for unconventional angles</li>
              </ul>
              <p className="text-muted">
                Brands offered: <strong>Manfrotto, Joby, Neewer, UBeesize, AmazonBasics</strong> and more.
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
