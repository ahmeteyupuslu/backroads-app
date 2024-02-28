import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Tours from "@/components/Tours";
import About from "@/components/About";
import App from "@/pages/_app";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
    </>
  );
}
