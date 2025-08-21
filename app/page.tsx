// app/page.tsx
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import Quote from "./components/Quote";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurServices />
      <Quote />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
