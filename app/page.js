import NavBar from '@/src/components/Navbar/NavBar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';

export default function Home() {

  return (
    <div className="app">
      <NavBar />
      <Hero />
      <BrandingVideo />
    </div>
  );
}
