"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function MemoryCard() {
  const router = useRouter();

  // Memory ranges you want to display
  const memoryRanges = ["2GB", "4GB", "8GB", "16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB"];

  return (
    <>
      <Navbar />

      <section className="container py-5">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/categories" className="text-decoration-none">Categories</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/category/Electronics-Gadgets" className="text-decoration-none">
                Electronics-Gadgets
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Memory Cards
            </li>
          </ol>
        </nav>

        <h1 className="display-5 fw-bold text-center text-gradient mb-4">
          Memory Cards at RajTimes
        </h1>

        <div className="text-center mb-4">
          <img
            src="/images/memorycard.png"
            alt="Memory Cards"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>

        <p className="lead text-center mb-5 px-3 mx-auto" style={{ maxWidth: "700px" }}>
          At RajTimes, we source a wide range of high-quality memory cards and sd cards from trusted Indian suppliers and global brands. Whether you need reliable storage for your smartphone, camera, drone, or professional equipment, our collection covers all popular formats and capacities. We ensure our products meet the highest standards for performance and durability to keep your data safe and accessible.
        </p>

        {/* New Memory Range Section */}
        <div className="memory-range-section text-center mb-5">
          <h3 className="mb-3 fw-semibold">Available Memory Sizes</h3>
          <div className="memory-tags">
            {memoryRanges.map((size) => (
              <span key={size} className="memory-tag">
                {size}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #ff4b5c, #800000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .breadcrumb {
          background: transparent;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #6c757d;
        }
        .view-btn {
          background: linear-gradient(135deg, #ff4b5c, #800000);
          color: #fff;
          border-radius: 12px;
          border: none;
          font-size: 1.1rem;
          box-shadow: 0 0 15px rgba(255, 75, 92, 0.6);
          transition: all 0.3s ease;
        }
        .view-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255, 75, 92, 0.9);
        }
        .memory-range-section h3 {
          color: #800000;
        }
        .memory-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .memory-tag {
          background: #ff4b5c;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 2px 8px rgba(255, 75, 92, 0.4);
          transition: background 0.3s ease;
          cursor: default;
          user-select: none;
        }
        .memory-tag:hover {
          background: #800000;
          box-shadow: 0 4px 15px rgba(128, 0, 0, 0.7);
        }
      `}</style>
    </>
  );
}
