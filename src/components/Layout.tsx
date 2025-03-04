import { Box, Container } from '@mui/material';
import { Header } from './Header/Header';
import { Footer } from '@components';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Header />
      <Container component="main">{children}</Container>
      <Footer />
    </Box>
  );
}