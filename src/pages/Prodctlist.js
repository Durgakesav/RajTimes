import Navbar from "./Navbar";
import Footer from "./Footer";
import Product_Cards from "./Product_Cards";

export default function AllProductsPage() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h1 className="mb-4">All Products</h1>
        <Product_Cards />
      </div>
      <Footer />
    </>
  );
}

