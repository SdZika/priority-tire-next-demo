import { Box, Typography } from "@mui/material";
import Image from "next/image";

const images = [
  { src: "/goodyear.png", alt: "Goodyear Tire Rebate" },
  { src: "/hankook.png", alt: "Hankook Tire Rebate" },
  { src: "/nexen.png", alt: "Nexen Tire Rebate" },
];

export const PromotionSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        my: 4,
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Save with Rebates
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} width={450} height={450} />
        ))}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5">Save Now With Our Promotions</Typography>
      </Box>
    </Box>
  );
};


