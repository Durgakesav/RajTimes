import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import products from "../Fake_products"; // ✅ Adjust path as needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer";

export default function ProductViewPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (id) {
      const found = products.products.find((p) => p.id === parseInt(id));
      setProduct(found);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h3>❌ Product not found</h3>
        <button className="btn btn-dark mt-3" onClick={() => router.push("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="container my-5">
      <div className="row g-5">
        {/* Left Section: Images */}
        <div className="col-md-6">
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images?.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={img}
                    className="d-block w-100 rounded shadow"
                    alt={`Image ${index + 1}`}
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* Right Section: Info */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-muted">{product.description}</p>

          {/* Price */}
          <h3 className="text-danger fw-bold mb-3">₹{product.price}</h3>

          {/* Availability */}
          <p>
            <strong>Availability:</strong>{" "}
            {product.instock ? (
              <span className="text-success">In Stock</span>
            ) : (
              <span className="text-danger">Out of Stock</span>
            )}
          </p>

          {/* Delivery */}
          <p>
            <strong>Delivery:</strong> Free Delivery by{" "}
            <span className="text-primary fw-semibold">Wednesday</span>
          </p>

          {/* EMI / Payment Options */}
          <p>
            <strong>EMI Available:</strong> Starting from ₹
            {(product.price / 12).toFixed(2)} per month
          </p>

          {/* Quantity */}
          <div className="d-flex align-items-center my-3">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
            >
              ➖
            </button>
            <span className="fs-5">{count}</span>
            <button
              className="btn btn-outline-dark ms-2"
              onClick={() => setCount((prev) => prev + 1)}
            >
              ➕
            </button>
          </div>

          {/* Add to Cart */}
          <button
            className="btn add-cart-btn px-4 py-2 w-100"
            onClick={handleAddToCart}
            disabled={!product.instock}
          >
            Add {count} to Cart 🛒
          </button>
        </div>
          </div> {/* end of row */}

    <ToastContainer />


    <style jsx>{`
      .add-cart-btn {
        background: linear-gradient(135deg, #ff4b5c, #800000);
        color: #fff;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        transition: all 0.25s ease-in-out;
      }
      .add-cart-btn:hover {
        transform: translateY(-2px) scale(1.05);
        background: linear-gradient(135deg, #800000, #a83232);
      }

      /* Remove default spacing if any */
      .container {
        margin-bottom: 0;
        padding-bottom: 0;
      }
    `}</style>
</div> // ← outermost container
    );
}