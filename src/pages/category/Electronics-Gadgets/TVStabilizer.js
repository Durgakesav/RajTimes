import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function TVStabilizer() {
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
                <li className="breadcrumb-item active" aria-current="page">TV Stabilizer</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">TV Stabilizers</h1>
          <p className="lead text-muted">
            Ensure long life and smooth performance of your television with the best-in-class stabilizers.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/tvstabilizer.png"
                alt="TV Stabilizer Banner"
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
                Our TV stabilizers are designed to offer efficient protection against voltage fluctuations, power surges, and lightning, ensuring uninterrupted entertainment and safety for your LED, LCD, or Smart TVs.
              </p>
              <p className="text-muted mb-3">
                Our offerings include:
              </p>
              <ul className="text-muted mb-3">
                <li><strong>Digital TV Stabilizers</strong> – Intelligent systems with real-time voltage display</li>
                <li><strong>Automatic Stabilizers</strong> – Plug-and-play with built-in overload protection</li>
                <li><strong>Servo Models</strong> – Precise voltage correction, ideal for premium TVs</li>
                <li><strong>Single Phase & Three Phase</strong> – Suitable for home or multi-TV commercial setups</li>
                <li><strong>High Voltage Units</strong> – Specifically for rural/industrial areas with extreme voltage swings</li>
              </ul>
              <p className="text-muted">
                Available brands: <strong>V-Guard, Monitor, Everest, Microtek, Bluebird</strong> and more. Trusted by homes and offices across India.
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
