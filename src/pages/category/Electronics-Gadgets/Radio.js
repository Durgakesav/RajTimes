import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function Radio() {
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
                <li className="breadcrumb-item active" aria-current="page">Radio</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title & Subheading */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Radio Devices</h1>
          <p className="lead text-muted">
            Tune in with our range of FM, AM, digital, and Bluetooth radios from trusted brands.
          </p>
        </div>

        {/* Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/radio.png"
                alt="Radio Devices"
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
                At <strong>RajTimes</strong>, we carry a wide selection of radio devices, including portable FM/AM radios, Bluetooth-enabled models, rechargeable radios, and weather-proof emergency radios.
              </p>
              <p className="text-muted mb-3">
                We source products from leading global manufacturers like Sony, Panasonic, Philips, and Saregama Carvaan. In addition, we proudly offer Indian brands such as Mitashi, Intex, and iBall, known for their affordability and durability in local conditions.
              </p>
              <p className="text-muted mb-3">
                Whether you're looking for a classic radio for your shop, a Bluetooth speaker-radio combo for home, or a battery-powered emergency model, RajTimes has the right options. Our products are ideal for personal use, gifting, and wholesale distribution.
              </p>
              <p className="text-muted mb-0">
                Visit us to explore live demos or bulk order pricing for retailers and resellers.
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
