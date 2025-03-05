import { PromotionSection } from "@/components/PromotionSection/PromotionSection";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components";
import { mockProducts } from "../../dummyData/mockProducts";
import { ProductsCarousel } from "../components/ProductCarousel/ProductCarousel";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromotionSection />
      <ProductsCarousel products={mockProducts} />
    </>
  );
}
