import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function Pendrive() {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topOffset = window.scrollY + window.innerHeight;
      if (topOffset > 200) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/categories" className="text-decoration-none">
                    Categories
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a
                    href="/category/Electronics-Gadgets"
                    className="text-decoration-none"
                  >
                    Electronics-Gadgets
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pendrive
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className={`text-center mb-5 fade-in ${visible ? "visible" : ""}`}>
          {/* Keep your original heading style */}
          <h1 className="display-4 fw-bold text-gradient">USB Pendrives</h1>
          <p className="lead text-muted">
            Discover our versatile range of USB Pendrives – where speed meets
            storage.
          </p>
        </div>

        <div className={`text-center mb-4 fade-in ${visible ? "visible" : ""}`}>
          <img
            src="/images/pendrive1.png"
            alt="Pendrive Display 1"
            className="img-fluid rounded shadow interactive-img"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div
          className={`text-center px-md-5 mb-5 fade-in ${visible ? "visible" : ""}`}
        >
          <p className="fs-5 text-muted">
            At Raj Times, we offer a wide variety of USB pendrives from top-tier
            brands such as SanDisk, Kingston, HP, Samsung, and more. Whether
            you're a student, professional, gamer, or tech enthusiast, we have
            something to suit every need.
          </p>
          <p className="fs-5 text-muted">
            Our collection includes storage sizes ranging from 16GB to 1TB, in
            USB 2.0, 3.0, and 3.2 formats — ensuring blazing-fast data transfers
            and reliability. You’ll find everything from classic plastic
            designs to metal casings, OTG-supported drives, waterproof models,
            and ultra-slim compact builds.
          </p>
          <p className="fs-5 text-muted">
            Need bulk orders or corporate gifts? We also provide customized
            options at competitive rates. Visit us in-store or inquire online
            to get the best prices on original pendrives with full warranty.
          </p>
        </div>

        <div className={`text-center mb-5 fade-in ${visible ? "visible" : ""}`}>
          <img
            src="/images/pendrive2.png"
            alt="Pendrive Display 2"
            className="img-fluid rounded shadow interactive-img"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="text-center mt-4 fade-in">
          <button
            className="btn btn-outline-primary btn-lg animated-btn"
            onClick={() => router.back()}
          >
            ← Back to Categories
          </button>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        /* Preserve your original heading style */
        .text-gradient {
          background: linear-gradient(90deg, #b31217, #e52d27);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Breadcrumb */
        .breadcrumb {
          background: transparent;
          padding: 0;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #6c757d;
        }

        /* Fade-in animation */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Interactive image hover */
        .interactive-img {
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .interactive-img:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.25);
        }

        /* Animated button */
        .animated-btn {
          position: relative;
          overflow: hidden;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .animated-btn::after {
          content: "";
          position: absolute;
          width: 120%;
          height: 100%;
          top: 0;
          left: -110%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(229, 45, 39, 0.6),
            transparent
          );
          transition: left 0.5s ease;
          pointer-events: none;
        }
        .animated-btn:hover::after {
          left: 110%;
        }
        .animated-btn:hover {
          background-color: #e52d27;
          color: white;
          border-color: #e52d27;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .text-gradient {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
