import React, { useMemo, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Cart = () => {
  const [showFeatureNotice, setShowFeatureNotice] = useState(true);

  // No server cart yet. Use empty list to keep page error-free.
  const cartItems = useMemo(() => {
    return [];
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.incart,
    0
  );

  return (
    <>
      <Navbar />

      {/* Feature Notice */}
      {showFeatureNotice && (
        <div className="alert alert-info text-center mb-0 rounded-0" role="alert">
          🔧 <strong>Feature Notice:</strong> Payment functionality is currently disabled and will be available in future versions.
          <button
            type="button"
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => setShowFeatureNotice(false)}
          ></button>
        </div>
      )}

      <div className="container my-5">
        <h2 className="mb-4">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center">Your cart is empty!</div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="d-flex align-items-center gap-3">
                        <img
                          src={item.imageUrl || "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=300&auto=format&fit=crop"}
                          alt={item.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                        <span>{item.name}</span>
                      </td>
                      <td>{item.incart}</td>
                      <td>₹{item.price.toFixed(2)}</td>
                      <td>₹{(item.price * item.incart).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr className="fw-bold">
                    <td colSpan="3" className="text-end">
                      Total:
                    </td>
                    <td>₹{totalPrice.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Scrollable Payment Methods */}
            <div className="mt-5">
              <h5 className="mb-3">💳 Available Payment Methods (Coming Soon)</h5>
              <div
                className="d-flex gap-3 overflow-auto p-3 border rounded"
                style={{ whiteSpace: "nowrap" }}
              >
                {[
                  "UPI",
                  "Credit Card",
                  "Debit Card",
                  "Net Banking",
                  "Wallets",
                  "Cash on Delivery",
                  "EMI Options",
                ].map((method, idx) => (
                  <div
                    key={idx}
                    className="p-3 border rounded text-center"
                    style={{
                      minWidth: "150px",
                      background: "#f8f9fa",
                      fontWeight: "500",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
