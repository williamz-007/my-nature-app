// app/about/page.tsx
import ServiceHero from "./components/ServiceHero";
import WorkSection from "./components/WorkSection"
import Stats from "./components/Stats"
import Footer from "../../components/Footer"

export default function About() {
  return (
    <main>
      <ServiceHero />
      <WorkSection />
      <Stats />
      <Footer />
    </main>
  );  
}