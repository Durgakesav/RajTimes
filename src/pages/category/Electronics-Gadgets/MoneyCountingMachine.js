import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function MoneyCountingMachine() {
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
                <li className="breadcrumb-item active" aria-current="page">
                  Money Counting Machine
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Money Counting Machines</h1>
          <p className="lead text-muted">
            Efficient, accurate, and reliable currency counting solutions for shops, offices, and businesses.
          </p>
        </div>

        {/* Custom Image Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="img-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/mcm.png"
                alt="Money counting machine"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        {/* Description Box */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="description-box p-4 rounded-4 shadow-sm bg-light">
              <p className="lead mb-3">
                At <strong>RajTimes</strong>, we offer a carefully curated selection of money counting machines suited for retail shops, banks, offices, and commercial environments.
              </p>
              <p className="text-muted mb-3">
                Our stock includes note counters, coin counters, UV/MG counterfeit detectors, and high-speed machines from verified Indian brands and global manufacturers. We ensure that every machine is sourced through trusted distribution channels to provide you with genuine warranties and long-lasting performance.
              </p>
              <p className="text-muted mb-3">
                Whether you're a small business owner or managing high-volume transactions, we have a solution tailored to your needs—from portable compact counters to large professional-grade units.
              </p>
              <p className="text-muted mb-0">
                Visit our store or contact us for a demonstration or quotation. We provide post-sale service and support for all devices.
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
