import { FC, useEffect, useState } from "react";
import { mockProducts } from "../../../dummyData/mockProducts";

interface StockStatusProps {
  slug: string;
};

const StockStatus:FC<StockStatusProps> = ({ slug } ) => {
  const [stock, setStock] = useState<number | null>(null);

  useEffect(() => {
          const product = mockProducts.find((product) => product.slug === slug);
      
          if (product) {
            setStock(product.stock); 
          } else {
            setStock(null); 
          }
        }, [slug]);

  return (
    <p className="mt-2 font-semibold">
      Stock: {stock !== null ? stock : "Loading..."}
    </p>
  );
};

export default StockStatus;
