import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Layout/HeroSection";
import Navbar from "@/components/Layout/Navbar";
import Menus from "@/components/Menu/Menus";

export default function Home() {
  return (
   <div>
     <Navbar />
     <HeroSection />
     <Menus />
     <Footer />
   </div>
  );
}
