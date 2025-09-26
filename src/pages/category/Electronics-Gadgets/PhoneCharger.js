import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function PhoneCharger() {
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
                <li className="breadcrumb-item active" aria-current="page">Phone Charger</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Phone Chargers</h1>
          <p className="lead text-muted">
            Fast, safe, and reliable charging solutions for all devices.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/phonecharger.png"
                alt="Phone Charger Banner"
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
                Whether you use Android or iOS, wired or wireless, we've got the right charger for your phone. Our collection is designed to ensure your device stays powered up quickly and safely.
              </p>
              <p className="text-muted mb-3">Choose from:</p>
              <ul className="text-muted mb-3">
                <li><strong>iPhone Lightning Cables</strong> – MFi-certified and compatible with all iOS devices</li>
                <li><strong>USB-C Fast Chargers</strong> – Perfect for Android flagships and modern gadgets</li>
                <li><strong>Micro USB Cables</strong> – Legacy support for older devices and accessories</li>
                <li><strong>Wireless Charging Pads</strong> – Convenient and clutter-free charging experience</li>
                <li><strong>Car Charger Adapters</strong> – On-the-go power for your road trips</li>
                <li><strong>Multi-Port Chargers</strong> – Charge multiple devices at once with smart output</li>
              </ul>
              <p className="text-muted">
                Available brands: <strong>Apple, Samsung, OnePlus, Boat, Mi, Realme, Portronics</strong> and more.
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
