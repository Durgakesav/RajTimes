import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function WallClocks() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/categories" className="text-decoration-none">Categories</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/category/Home-Decor" className="text-decoration-none">Home Decor</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Wall Clocks</li>
          </ol>
        </nav>

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Wall Clocks</h1>
          <p className="lead text-muted">
            Explore timeless elegance with our exclusive collection of handcrafted Indian wall clocks.
          </p>
        </div>

        {/* Main Image */}
        <div className="main-image-container mb-5">
          <img
            src="/images/wallclocks-image.jpg"
            alt="Beautiful Indian Wall Clock"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Description */}
        <div className="text-center px-md-5">
          <p className="fs-5 text-muted">
            At Raj Times, we offer a wide selection of traditional and contemporary wall clocks
            that bring charm, culture, and craftsmanship into your home. Whether you’re looking
            for a vintage analog piece or a vibrant hand-painted decorative clock, our range
            blends artistry with functionality.
          </p>
          <p className="fs-5 text-muted">
            Each clock in our collection is curated with an eye for design and durability, making
            them not only timekeepers but statement pieces for your living space.
            Discover your next wall centerpiece today.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-5">
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

        .main-image-container {
          text-align: center;
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
