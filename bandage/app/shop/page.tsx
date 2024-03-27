import FeaturedProducts from "@/app/components/FeaturedProducts";
import LogoSection from "@/app/components/LogoSection";
import ProductCard from "@/app/components/ProductCard";
import ProductDetails from "@/app/components/ProductDetail";

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