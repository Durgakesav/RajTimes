import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";


const Product_Cards = () => {
  const getImageForProduct = (product) => {
    const name = product.name?.toLowerCase() || "";
    const type = product.type?.toLowerCase() || "";
    if (type.includes("laptop") || name.includes("laptop")) {
      return "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop";
    }
    if (type.includes("mobile") || name.includes("phone") || name.includes("smartphone")) {
      return "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop";
    }
    if (type.includes("remote") || name.includes("remote")) {
      return "https://images.unsplash.com/photo-1606166325683-3be1f10a32e2?q=80&w=1200&auto=format&fit=crop";
    }
    if (type.includes("watch") || name.includes("watch")) {
      return "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop";
    }
    if (type.includes("clock") || name.includes("clock")) {
      return "https://images.unsplash.com/photo-1501527459-71cb53b3d4f3?q=80&w=1200&auto=format&fit=crop";
    }
    if (type.includes("charger") || name.includes("charger")) {
      return "https://images.unsplash.com/photo-1582650931737-04ff3f14f4dc?q=80&w=1200&auto=format&fit=crop";
    }
    if (type.includes("mouse") || name.includes("mouse")) {
      return "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop";
    }
    if (type.includes("radio") || name.includes("radio")) {
      return "https://images.unsplash.com/photo-1506818381082-8ec7a3b0b3b3?q=80&w=1200&auto=format&fit=crop";
    }
    return "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop";
  };

  const demoProducts = [
    { id: 1, type: 'Laptop', name: 'Ultra Laptop 14"', price: 54999, description: 'Powerful and portable.', incart: 0 },
    { id: 2, type: 'Mobile', name: 'Smartphone Pro', price: 39999, description: 'Flagship camera.', incart: 0 },
    { id: 3, type: 'Remote', name: 'TV Remote XR', price: 799, description: 'Universal compatibility.', incart: 0 },
    { id: 4, type: 'Watch', name: 'Smart Watch S', price: 4999, description: 'Health tracking.', incart: 0 },
    { id: 5, type: 'Clock', name: 'Wall Clock Classic', price: 1299, description: 'Silent sweep.', incart: 0 },
    { id: 6, type: 'Charger', name: 'Fast Charger 30W', price: 899, description: 'Quick charge.', incart: 0 },
    { id: 7, type: 'Mouse', name: 'Wireless Mouse', price: 699, description: 'Ergonomic design.', incart: 0 },
    { id: 8, type: 'Radio', name: 'Portable Radio', price: 1199, description: 'FM/AM tuner.', incart: 0 },
    { id: 9, type: 'Laptop', name: 'Notebook Air', price: 45999, description: 'Lightweight performer.', incart: 0 },
    { id: 10, type: 'Mobile', name: 'Smartphone Lite', price: 17999, description: 'All-day battery.', incart: 0 },
    { id: 11, type: 'Remote', name: 'AC Remote', price: 599, description: 'Multiple brands.', incart: 0 },
    { id: 12, type: 'Clock', name: 'Modern Wall Clock', price: 1599, description: 'Minimal aesthetic.', incart: 0 },
  ];

  const prds = demoProducts;

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Calculate indexes
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = prds.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(prds.length / productsPerPage);

  const handleAddToCart = (p1) => {
    p1.incart += 1;
    toast.success(`${p1.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        {currentProducts.map((p1) => (
          <div className="col-md-3" key={p1.id}>
            <Link href={`/product_view_page/${p1.id}`} className="text-decoration-none text-dark">

            <div className="card h-100 shadow-sm border-0">
              {/* Product Image */}
              <img
                src={getImageForProduct(p1)}
                className="card-img-top"
                alt={p1.name}
                style={{
                  objectFit: "contain",
                  height: "200px",
                  backgroundColor: "#f8f9fa",
                }}
              />

              <div className="card-body d-flex flex-column">
                {/* Product Name */}
                <h5 className="card-title text-truncate">{p1.name}</h5>

                {/* Description */}
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  {p1.description}
                </p>

                {/* Price */}
                <h6 className="mt-auto text-primary">₹{p1.price}</h6>

                {/* Add to Cart Button */}
                <button
                  className="btn w-100 mt-2 fw-bold add-cart-btn"
                  onClick={(e) => { e.preventDefault(); handleAddToCart(p1); }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      {/* Inline Styles */}
      <style>{`
        .add-cart-btn {
          background: linear-gradient(135deg, #ff4b5c, #800000);
          color: #fff;
          border-radius: 12px;
          border: none;
          box-shadow: 0 0 15px rgba(128, 0, 0, 0.7);
          transition: all 0.25s ease-in-out;
        }

        .add-cart-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 25px rgba(128, 0, 0, 0.9);
        }

        /* Toastify override for maroon theme */
        .Toastify__toast--success {
          background: linear-gradient(135deg, #800000, #a83232);
          color: #fff;
          font-weight: bold;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(128, 0, 0, 0.8);
        }

        /* Active pagination styling */
        .pagination .page-item.active .page-link {
          background: linear-gradient(135deg, #800000, #a83232);
          border: none;
          color: #fff;
        }

        .pagination .page-link {
          color: #800000;
          font-weight: bold;
        }

        .pagination .page-link:hover {
          background: #f8d7da;
        }
      `}</style>
    </div>
  );
};

export default Product_Cards;
