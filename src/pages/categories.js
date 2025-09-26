// categories.js
import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoryGrid from "./CategoryGrid";

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h1 className="mb-4">Browse Categories</h1>
        <CategoryGrid />
      </div>
      <Footer />
    </>
  );
}
