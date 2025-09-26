"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel1() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const imageStyle = {
    height: "70vh", // Balanced height
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div className="w-100">
      <div
        id="carouselExample"
        className="carousel slide shadow-lg"
        data-bs-ride="carousel"
        data-bs-interval="6000"
        data-bs-pause="false"
        data-bs-wrap="true"
        data-bs-touch="false"
        data-bs-keyboard="false"
        style={{
          height: "70vh",
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          // Speed up slide transition
          "--bs-carousel-transition-duration": "2s",
        }}
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://thaka.bing.com/th/id/OIP.LLmBb1FYjjw2dLKKHNK4rgHaEz?w=1200&h=400"
              className="d-block"
              alt="First Slide"
              style={imageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/7/YT/LT/CY/71864580/im3-jpg-500x500.jpg"
              className="d-block"
              alt="Second Slide"
              style={imageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.zKJEzVWBgSYzvHID30YEUQHaEJ?w=315&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              className="d-block"
              alt="Third Slide"
              style={imageStyle}
            />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
