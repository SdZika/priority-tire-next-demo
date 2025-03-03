import Layout from '@/components/Layout';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface ProductPageProps {
  product: {
    name: string;
    price: string;
    description: string;
    image: string;
  };
}

export const ProductPage:FC<ProductPageProps> = ({ product }) => { 
  return (
    <Layout>
      <Box>
        <img src={product.image} alt={product.name} />
        <Typography variant="h4">{product.name}</Typography>
        <Typography>{product.price}</Typography>
        <Typography>{product.description}</Typography>
      </Box>
    </Layout>
  );
}