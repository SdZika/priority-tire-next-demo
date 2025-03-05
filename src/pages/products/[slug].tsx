import { useRouter } from "next/router";
import Image from "next/image";
import { mockProducts } from "@/lib/mockProducts";

// interface ProductPageProps {
//   product: {
//     name: string;
//     price: string;
//     description: string;
//     image: string;
//   };
// }

const ProductPage= () => { 

  const router = useRouter();
  const { slug } = router.query;

  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Image
      src={product.image}
      alt={product.name}
      width={600}
      height={400}
      className="rounded"
      />
      <p className="text-gray-600 mt-4">${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}

export default ProductPage