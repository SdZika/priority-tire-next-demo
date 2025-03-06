import { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <div className="container-main">{children}</div>
      <Footer />
    </>
 )
}
