import { useRouter } from "next/router";
import Image from "next/image";
import { mockProducts } from "../../../dummyData/mockProducts";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { StockStatus } from "../../components/StockStatus/StockStatus";
import { useCart } from "../../context/CartContext"


interface ProductPageProps {
  product: Product;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  slug: string;
}


const ProductPage:FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <Image src={product.image} alt={product.name} width={600} height={400} className="rounded" />
        <p className="text-gray-600 mt-4">${product.price}</p>
        <p className="mt-2">{product.description}</p>

        {/* StockStatus Component */}
        <StockStatus slug={product.slug} />
        <button
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockProducts.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const product = mockProducts.find((p) => p.slug === params?.slug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 60,
  };
};

export default ProductPage;
