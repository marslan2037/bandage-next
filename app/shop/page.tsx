import FeaturedProducts from "../components/FeaturedProducts";
import LogoSection from "../components/LogoSection";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetail";

export default function Shop() {
  const mainHeading = 'BESTSELLER PRODUCTS';
  return (
    <>
      <ProductCard />
      <ProductDetails />
      <FeaturedProducts mainHeading={mainHeading} shopPage={true} />
      <LogoSection />
    </>
  );
}