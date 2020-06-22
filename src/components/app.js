import { h } from "preact";
// import { Router } from 'preact-router';

import Header from "./header";
import FrontSection from "./frontSection";
import CardsSection from "./cardsSection";
import ContactSection from "./contactSection";
import Footer from "./footer";
import PolicyPrivacy from "./policy";
//import { useDarkMode } from "../hooks/customHooks";

export default function App() {
  //const {theme, toggleTheme} = useDarkMode();
  return (
    <div id="app">
      <Header />
      <div class="cajondemier" id="body">
      {/* <button style='position: absolute; margin-top:200px' type="button" onClick={toggleTheme}>
          Switch theme
        </button> */}
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
