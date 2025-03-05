import { Box, Typography } from '@mui/material';

export const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/hero-image.png)',
        backgroundSize: 'cover',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h3" sx={{paddingBottom: "12rem"}}>New Tires For Sale Online</Typography>
    </Box>
  );
}
