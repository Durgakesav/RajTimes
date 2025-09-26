import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function PhoneAccessories() {
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
                <li className="breadcrumb-item active" aria-current="page">Phone Accessories</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Phone Accessories</h1>
          <p className="lead text-muted">
            Explore the latest phone accessories to protect, charge, and enhance your smartphone experience.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/phoneaccessories.png"
                alt="Phone Accessories Banner"
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
                Our wide collection of mobile accessories caters to all types of users—from casual phone users to power users.
              </p>
              <p className="text-muted mb-3">Available Accessories:</p>
              <ul className="text-muted mb-3">
                <li><strong>Phone Cases & Covers</strong> – Shockproof, transparent, flip, rugged</li>
                <li><strong>Screen Protectors</strong> – Tempered glass, privacy screens</li>
                <li><strong>Car Mounts & Holders</strong> – Dashboard, windshield, vent-mounted</li>
                <li><strong>Wireless Chargers</strong> – Fast charging pads and stands</li>
                <li><strong>Phone Stands & Grips</strong> – Pop sockets, magnetic stands</li>
                <li><strong>Earphones & Bluetooth Accessories</strong> – Neckbands, TWS, adapters</li>
              </ul>
              <p className="text-muted">
                Brands we offer: <strong>Spigen, Portronics, Samsung, Realme, Boat, MI, Ugreen</strong> and many more.
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
