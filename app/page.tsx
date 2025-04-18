import ConsultantForm from "@/components/ConsultantForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ObstaclesSlider from "@/components/ObstaclesSlider";


export default function Home() {
  return (
  <div className="container max-w-[1440px] mx-auto">
    <Navbar/>
    <Hero/>
    <ObstaclesSlider/>
    <ConsultantForm/>
    <FAQ/>
    <Footer/>
  </div>
  );
}
