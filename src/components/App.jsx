import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ColdSystems from "./components/ColdSystems";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import CTABand from "./components/CTABand";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import { WhatsAppPickerProvider } from "./components/WhatsAppPickerContext";

function App() {
  return (
    <WhatsAppPickerProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <ColdSystems />
        <About />
        <WhyUs />
        <CTABand />
      </main>
      <Footer />
      <WhatsAppFAB />
    </WhatsAppPickerProvider>
  );
}

export default App;
