"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { categories } from "./categoriesData";

export default function Navbar({ user, cartCount = 0 }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleAuth = () => {
    if (user) {
      alert("Logged out!");
      router.push("/");
    } else {
      router.push("/Login");
    }
  };

  const mainCategoryToFolder = (mainCat) => {
    const map = {
      "Electronics-Gadgets": "Electronics-Gadgets",
      "Home & Services": "Home-Services",
      "Home Decor": "Home-Decor",
    };
    return map[mainCat] || mainCat;
  };

  const formatSubcategory = (name) =>
    name.replace(/\s+/g, '').replace(/\//g, '').replace(/&/g, '').replace(/-/g, '');

  const goToCategory = (mainCat, item) => {
    const folder = mainCategoryToFolder(mainCat);
    const sub = formatSubcategory(item);
    router.push(`/category/${folder}/${sub}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ecommerce-navbar sticky-top shadow-sm">
      <div className="container-xl px-3">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-2 lh-1" href="/">
          Raj Times
          <small className="fw-normal fs-6 text-warning d-block">
            ArundelPet 4th Line, Guntur-522002
          </small>
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Section */}
        <div className="collapse navbar-collapse" id="mainNav">
          {/* Search (desktop floats right) */}
          <form className="d-flex ms-auto my-3 my-lg-0 me-lg-4 search-desktop" onSubmit={handleSearch}>
            <input
              className="form-control search-box"
              placeholder="Search bar disabled…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

          {/* Main Links & Mega Menu */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-lg-3"
                href="/categories"
              >
                Categories
              </a>
            </li>
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold px-lg-3"
                href="#"
                id="productsMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>

              <div className="dropdown-menu mega-menu p-4 border-0 shadow-lg" aria-labelledby="productsMenu">
                <div className="row gx-5 gy-4">
                  {Object.entries(categories).map(([mainCat, items]) => (
                    <div className="col-6 col-md-3" key={mainCat}>
                      <h6 className="text-uppercase text-warning fw-bold mb-3">{mainCat}</h6>
                      <ul className="list-unstyled">
                        {items.map((item) => (
                          <li key={item}>
                            <a
                              className="dropdown-item px-0 py-1 text-light"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                goToCategory(mainCat, item);
                              }}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          {/* Auth & Cart */}
          <div className="d-flex align-items-center gap-3 ms-lg-3 flex-wrap mt-3 mt-lg-0">
            {user ? (
              <>
                <span className="text-white fw-semibold">👋 {user.name}</span>
                <button className="btn btn-gradient" onClick={handleAuth}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-gradient" onClick={handleAuth}>
                  Login
                </button>
                <button className="btn btn-outline-light" onClick={() => router.push("/Signup")}>
                  Sign Up
                </button>
              </>
            )}
            <button className="btn btn-gradient position-relative" onClick={() => router.push("/Cart")}>
              🛒 Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Brand Gradient */
        .ecommerce-navbar {
          background: linear-gradient(90deg, #800000, #4b0000);
        }

        /* Search Box */
        .search-box {
          border-radius: 30px;
          padding-left: 1rem;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          min-width: 230px;
        }
        .search-box::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Buttons */
        .btn-gradient {
          background: linear-gradient(135deg, #ff4b5c, #800000);
          color: #fff;
          font-weight: 600;
          border-radius: 30px;
          padding: 0.5rem 1.2rem;
          border: none;
          transition: transform 0.2s;
        }
        .btn-gradient:hover {
          transform: translateY(-2px);
        }
        .cart-badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background: #fff;
          color: #1eae60;
          font-weight: bold;
          font-size: 12px;
          border-radius: 50%;
          padding: 4px 7px;
        }

        /* Mega menu desktop */
        .mega-menu {
          width: 80vw;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.92);
          border-radius: 12px;
        }
        .mega-dropdown:hover > .mega-menu {
          display: block;
        }

        /* Responsive tweaks */
        @media (max-width: 991px) {
          .search-desktop {
            width: 100%;
            margin-bottom: 1rem;
          }
          .mega-menu {
            width: 100%;
            left: 0;
            transform: none;
          }
          .mega-menu .row > div {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}
