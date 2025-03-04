import { HeroTest } from "../components/HeroTest";
import { ProductComponent } from "@/components/ProductComponent/ProductComponent";
import { PromotionSection } from "@/components/PromotionSection/PromotionSection";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components";


export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to the Homepage</h1>
      <HeroTest />
      <ProductComponent />
      <Hero />
      <PromotionSection />
    </>
  );
}
