import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { categories } from "../../categoriesData";

export default function ElectronicsGadgets() {
  const router = useRouter();
  const electronicsCategories = categories["Electronics-Gadgets"];

  const handleCategoryClick = (category) => {
    const categoryPath = category.replace(/\s+/g, '').replace(/\//g, '');
    router.push(`/category/Electronics-Gadgets/${categoryPath}`);
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
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
                <li className="breadcrumb-item active" aria-current="page">Electronics-Gadgets</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Electronics & Gadgets</h1>
          <p className="lead text-muted">
            Explore our wide range of electronics and gadgets from top brands.
          </p>
        </div>

        <div className="row g-4">
          {electronicsCategories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div 
                className="card h-100 shadow-sm border-0 category-card"
                onClick={() => handleCategoryClick(category)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body text-center d-flex flex-column justify-content-center">
                  <div className="category-icon mb-3">
                    {getCategoryIcon(category)}
                  </div>
                  <h5 className="card-title fw-bold">{category}</h5>
                  <p className="card-text text-muted small">
                    View available products
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

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

        .category-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 15px;
          overflow: hidden;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        }

        .category-icon {
          font-size: 3rem;
          color: #ff4b5c;
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

function getCategoryIcon(category) {
  const iconMap = {
    "Pendrive": "💾",
    "MemoryCard": "💿",
    "SD Card": "💿",
    "Phones": "📱",
    "Watches": "⌚",
    "Money Counting Machine": "💰",
    "Mouse": "🖱️",
    "Radio": "📻",
    "TV Remotes": "📺",
    "AC Remotes": "❄️",
    "AC Stabilizer": "⚡",
    "TV Stabilizer": "📺",
    "Phone Charger": "🔌",
    "Computer Accessories": "💻",
    "Phone Accessories": "📱",
    "Telephony / Landline": "☎️",
    "Digital Alarm": "⏰",
    "Wall Clocks": "🕐",
    "Vlogging Mic": "🎤",
    "Tripod Stand": "📷",
    "Ring Light": "💡"
  };
  
  return iconMap[category] || "🔧";
}
