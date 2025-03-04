import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface ProductPageProps {
  products: Product[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const ProductsCarousel:FC<ProductPageProps> = ({products}) => {
  return (
  
    <Slider {...settings}>
      {products.map((product) => (
        <Box key={product.id} sx={{ padding: 2 }}>
          <img src={product.image} alt={product.name} />
          <Typography>{product.name}</Typography>
          <Typography>{product.price}</Typography>
        </Box>
      ))}
    </Slider>
  )
}

