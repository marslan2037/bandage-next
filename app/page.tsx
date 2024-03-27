import Image from "next/image";
import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

export default function Home() {
  const mainHeading = 'BESTSELLER PRODUCTS';
  const subHeading = 'Featured Products';
  const description = 'Problems trying to resolve the conflict between';
  return (
    <>
      <Banner />
      <FeaturedProducts mainHeading={mainHeading} subHeading={subHeading} description={description} shopPage={false} />
      <Services />
      <Testimonials />
      <Blogs />
      <CallToAction />
    </>
  );
}
