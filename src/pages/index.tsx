import Layout from "../components/Layout";
import { Hero } from "../components/Hero";
import ProductComponent from "@/components/ProductComponent";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to the Homepage</h1>
      <Hero />
      <ProductComponent />
    </Layout>
  );
}
