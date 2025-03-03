import Layout from '@/components/Layout';
import { Box, Typography } from '@mui/material';

export default function ProductPage({ product: any }) {
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