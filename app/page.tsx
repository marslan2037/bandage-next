import Image from "next/image";
import Banner from "@/app/components/Banner";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import Services from "@/app/components/Services";
import Blogs from "@/app/components/Blogs";
import Testimonials from "@/app/components/Testimonials";
import CallToAction from "@/app/components/CallToAction";

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
