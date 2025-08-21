// app/about/page.tsx
import AboutHero from "./components/AboutHero";
import Collabo from "./components/Collabo";
import Quote from "./components/Quote";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main>
      <AboutHero />
      <Collabo />
      <Quote />
      <Footer />
    </main>
  );  
}