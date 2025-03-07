import Link from "next/link";
import Image from "next/image";
import { mockProducts } from "../../../dummyData/mockProducts";
import { FC } from "react";

// export async function getStaticPaths() {
//   const { data } = await client.query({ query: GET_PRODUCT_URLS });
//   const paths = data.products.items.map((product) => ({
//     params: { slug: product.url_key },
//   }));
//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params }) {
//   const { data } = await client.query({
//     query: GET_PRODUCT_DETAILS,
//     variables: { urlKey: params.slug },
//   });
//   return { props: { product: data.products.items[0] } };
// }

interface ProductProps {
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    stock: number;
    slug: string;
  }[];
}

export async function getStaticProps() {
  return {
    props: {
      products: mockProducts,
    },
  };
}

 const Products:FC<ProductProps> = ({ products }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="container w-full md:w-3/4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="rounded"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <Link href={`/products/${product.slug}`}>
                <span className="text-xl hover:underline">View Details</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default Products