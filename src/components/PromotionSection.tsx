import { Box, Typography } from '@mui/material';

export default function PromotionSection() {
  return (
    <Box sx={{ display: 'flex flex-column', justifyContent: 'space-around', my: 4 }}>
      <Box>
        <Typography variant="h5">Save with Rebates</Typography>
      </Box>
      <Box>
        <Typography variant="h5">Save Now With Our Promotions</Typography>
      </Box>
    </Box>
  )
}
