import Link from "next/link";
import Image from "next/image";
import { mockProducts } from "@/lib/mockProducts";

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


 const Products = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
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
  );
}

export default Products