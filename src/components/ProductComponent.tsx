import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../lib/graphql';

interface Product {
  sku: string;
  name: string;
}

export default function ProductComponent() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      search: 't-shirt', // Search term
      pageSize: 10, // Number of products to fetch
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
{data.products.items.map((product: Product) => (
  <li key={product.sku}>
    <strong>{product.name}</strong> - {product.sku}
  </li>
))}
      </ul>
    </div>
  );
}