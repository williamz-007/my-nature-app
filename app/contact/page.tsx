// app/about/page.tsx
import ContactHero from "./components/ContactHero";
import Form from "./components/Form";
import Image from "./components/Image";
import Footer from "../../components/Footer";

export default function contact() {
  return (
    <main>
      <ContactHero />
      <Form />
      <Image />
      <Footer />
    </main>
  );  
}