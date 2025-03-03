import Layout from "../components/Layout";
import { HeroTest } from "../components/HeroTest";
import ProductComponent from "@/components/ProductComponent";
import { Hero } from "@/components/Hero";
import PromotionSection from "@/components/PromotionSection";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to the Homepage</h1>
      <HeroTest />
      <ProductComponent />
      <Hero />
      <PromotionSection />
    </Layout>
  );
}
