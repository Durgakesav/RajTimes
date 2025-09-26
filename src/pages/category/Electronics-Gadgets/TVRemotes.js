import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function TVRemotes() {
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
                <li className="breadcrumb-item active" aria-current="page">TV Remotes</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">TV Remotes</h1>
          <p className="lead text-muted">
            We offer remote controls for almost every major TV brand — original and universal.
          </p>
        </div>

        {/* Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/tvremote.png"
                alt="TV Remote Controls"
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
                At <strong>RajTimes</strong>, we stock a diverse range of TV remotes suitable for both smart and standard TVs.
              </p>
              <p className="text-muted mb-3">
                Our collection includes branded remotes from industry leaders like:
                <ul>
                  <li><strong>Samsung</strong></li>
                  <li><strong>LG</strong></li>
                  <li><strong>Sony</strong></li>
                  <li><strong>Panasonic</strong></li>
                  <li><strong>OnePlus</strong></li>
                  <li><strong>Mi / Xiaomi</strong></li>
                </ul>
              </p>
              <p className="text-muted mb-3">
                We also carry universal remotes compatible with most Indian and imported TVs, ensuring full functionality at affordable prices.
              </p>
              <p className="text-muted mb-0">
                Whether you're replacing a lost remote or upgrading for smart functionality, our team at RajTimes is here to help you choose the right one.
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
