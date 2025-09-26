import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function PhoneService() {
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
                <li className="breadcrumb-item active" aria-current="page">Phone Service</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Phone Repair & Maintenance Services</h1>
          <p className="lead text-muted">
            Professional phone repair and servicing for all major brands, available at RajTimes shop.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/phoneservice.png"
                alt="Phone Repair Services"
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
                We offer a comprehensive range of phone repair and maintenance services tailored for all major smartphone brands.
              </p>
              <p className="text-muted mb-3">Our services include:</p>
              <ul className="text-muted mb-3">
                <li>Screen repair and replacement</li>
                <li>Battery replacement</li>
                <li>Software updates and troubleshooting</li>
                <li>Camera repair</li>
                <li>Charging port repair</li>
                <li>Speaker and microphone repair</li>
                <li>And much more!</li>
              </ul>
              <p className="text-muted">
                We proudly serve brands like <strong>Apple, Samsung, OnePlus, Xiaomi, Realme, Vivo</strong> and many others with expert care at <strong>RajTimes shop</strong>.
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
