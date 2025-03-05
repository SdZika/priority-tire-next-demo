import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  slug: string;
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
          <Image src={product.image} alt={product.name} height={300} width={300}/>
          <Typography>{product.name}</Typography>
          <Typography>{product.price}</Typography>
          <Link href={`/products/${product.slug}`}>View Details</Link>
        </Box>
      ))}
    </Slider>
  )
}

