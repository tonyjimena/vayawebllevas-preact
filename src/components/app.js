import { h } from "preact";
import { useEffect } from "preact/hooks";

import Header from "./header";
import FrontSection from "./frontSection";
import CardsSection from "./cardsSection";
import ContactSection from "./contactSection";
import Footer from "./footer";
import PolicyPrivacy from "./policy";

export default function App() {

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}px`
    )
  }, [])

  return (
    <div id="app">
      <Header />
      <div class="cajondemier" id="body">
        <FrontSection />
        <CardsSection />
        <ContactSection />
      </div>
      <Footer />
      <PolicyPrivacy />
      <div id="overlay-menu" class="overlay-menu" />
    </div>
  );
}
