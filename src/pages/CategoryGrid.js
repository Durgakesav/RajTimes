"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories } from "./categoriesData";

export default function CategoryGrid() {
  const router = useRouter();
  const [imgError, setImgError] = useState({});

  const mainCategoryToFolder = (mainCat) => {
    const map = {
      "Electronics-Gadgets": "Electronics-Gadgets",
      "Home & Services": "Home-Services",
      "Home Decor": "Home-Decor",
    };
    return map[mainCat] || mainCat;
  };

  const categoryToImageUrl = (mainCat) => {
    const map = {
      "Electronics-Gadgets":
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      "Home & Services":
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      "Home Decor":
        "https://th.bing.com/th/id/OIP.6UFLDQQLobPpfzOuL7kDkAHaHa?w=197&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // wall clock themed
    };
    return (
      map[mainCat] ||
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop"
    );
  };

  const goToCategory = (mainCat, item) => {
    const formatCategoryName = (name) => {
      return name
        .replace(/\s+/g, "")
        .replace(/\//g, "")
        .replace(/&/g, "")
        .replace(/-/g, "");
    };

    const formattedMainCat = mainCategoryToFolder(mainCat);
    const formattedItem = formatCategoryName(item);

    router.push(`/category/${formattedMainCat}/${formattedItem}`);
  };

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5 display-6 category-heading">
        Shop by Department
      </h2>

      <div className="row g-4">
        {Object.entries(categories).map(([mainCat, items]) => (
          <div key={mainCat} className="col-12 col-md-6 col-lg-4">
            <div className="cat-card border-0 shadow-sm rounded-4 h-100">
              {/* Category Banner */}
              <div className="img-wrap rounded-top-4 overflow-hidden">
                <img
                  src={
                    imgError[mainCat]
                      ? "/images/categories/default.svg"
                      : categoryToImageUrl(mainCat)
                  }
                  alt={mainCat}
                  onError={() =>
                    setImgError((prev) => ({ ...prev, [mainCat]: true }))
                  }
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "180px",
                    borderRadius: "0.5rem 0.5rem 0 0",
                  }}
                />
              </div>

              {/* Text and Buttons */}
              <div className="p-4">
                <h3 className="fw-semibold mb-3 text-primary-emphasis">
                  {mainCat}
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {items.slice(0, 4).map((item) => (
                    <button
                      key={item}
                      className="chip-btn"
                      onClick={() => goToCategory(mainCat, item)}
                    >
                      {item}
                    </button>
                  ))}
                  {items.length > 4 && (
                    <button
                      className="chip-btn chip-more"
                      onClick={() => {
                        const folder = mainCategoryToFolder(mainCat);
                        router.push(`/category/${folder}`);
                      }}
                    >
                      + More
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .category-heading {
          background: linear-gradient(90deg, #b31217, #e52d27);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cat-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }
        .img-wrap {
          height: 180px;
          position: relative;
        }
        .chip-btn {
          background: #f1f3f5;
          border: none;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 0.85rem;
          color: #333;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .chip-btn:hover {
          background: #e52d27;
          color: #fff;
        }
        .chip-more {
          background: #fff0f0;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
