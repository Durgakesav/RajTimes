import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function VloggingMic() {
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
                <li className="breadcrumb-item active" aria-current="page">Vlogging Mic</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Vlogging Microphones</h1>
          <p className="lead text-muted">
            High-quality microphones for creators, vloggers, podcasters, and streamers.
          </p>
        </div>

        {/* Banner Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src="/images/vloggingmic.png"
                alt="Vlogging Microphones"
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
                Choose the right microphone to elevate your content, whether you’re recording on the go or in a studio.
              </p>
              <p className="text-muted mb-3">Types of Microphones Available:</p>
              <ul className="text-muted mb-3">
                <li><strong>Wireless Microphones</strong> – Great for mobile and outdoor shoots</li>
                <li><strong>Lavalier Mics</strong> – Clip-on mics ideal for interviews and hands-free recording</li>
                <li><strong>USB Microphones</strong> – Plug-and-play for streaming or podcasting</li>
                <li><strong>Boom Microphones</strong> – Directional mics for clear audio capture</li>
                <li><strong>Condenser Mics</strong> – Studio-quality sound for vocals and instruments</li>
              </ul>
              <p className="text-muted">
                Popular brands include: <strong>Rode, Shure, Boya, Sennheiser, Blue Yeti, Maono</strong> and others.
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
