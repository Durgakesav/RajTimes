import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousal1 from "./Carousal1";
import Product_Cards from "./Product_Cards";
import Carousal2 from "./Carousal2";
import CategoryGrid from "./CategoryGrid";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 🌿 Light Greeting Section */}
      <section className="greeting-section">
        <div className="container text-center">
          <h1 className="greeting-title" style={{'fontFamily':'initial'}}>Welcome to Raj Times</h1>
          <p className="greeting-subtitle" style={{'fontFamily':'cursive'}}>
            Your trusted store for electronics, accessories & home essentials.
          </p>
        </div>
      </section>

      <Carousal1 />

      <div className="text-center my-4">
        <h2>Our Premium Brands</h2>
      </div>
      <Carousal2 />



      <CategoryGrid />
      <Footer />

      <style jsx>{`
        .greeting-section {
          margin-top: 20px;         /* keeps space below navbar */
          padding: 40px 0;          /* gentle vertical space */
          background: #f8f9fa;      /* light neutral background */
        }
        .greeting-title {
          font-size: 2rem;
          font-weight: 700;
          color: #800000;           /* brand maroon */
          margin-bottom: 10px;
        }
        .greeting-subtitle {
          font-size: 1.1rem;
          color: #555;              /* soft gray text */
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
