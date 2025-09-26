import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function ComputerAccessories() {
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
                <li className="breadcrumb-item active" aria-current="page">Computer Accessories</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Computer Accessories</h1>
          <p className="lead text-muted">
            Enhance your productivity with premium computer accessories from top brands.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/computeraccessories.png"
                alt="Computer Accessories Banner"
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
                From essential peripherals to performance-boosting gadgets, find the right tools to power up your work or gaming setup.
              </p>
              <p className="text-muted mb-3">Popular accessories we offer:</p>
              <ul className="text-muted mb-3">
                <li><strong>Keyboards & Mice</strong> – Wired, wireless, ergonomic, mechanical</li>
                <li><strong>USB Hubs & Docking Stations</strong> – Expand your device connectivity</li>
                <li><strong>Webcams</strong> – HD and Full HD for meetings and streaming</li>
                <li><strong>Laptop Stands & Cooling Pads</strong> – Comfort and airflow optimized</li>
                <li><strong>External Storage</strong> – Hard drives, SSDs, and memory cards</li>
                <li><strong>Bluetooth Speakers & Headphones</strong> – For meetings, music, and media</li>
              </ul>
              <p className="text-muted">
                Brands available: <strong>Logitech, HP, Dell, Lenovo, Zebronics, Portronics, WD</strong> and more.
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
