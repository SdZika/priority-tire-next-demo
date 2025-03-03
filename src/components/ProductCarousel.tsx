import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export function ProductCarousel({ products: any }) {
  return (
  
      {/*<Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} sx={{ padding: 2 }}>
            <img src={product.image} alt={product.name} />
            <Typography>{product.name}</Typography>
            <Typography>{product.price}</Typography>
          </Box>
        ))}
      </Slider>*/}
  )
}
