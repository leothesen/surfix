import ScrollIntro from "./_components/ScrollIntro";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import HowItWorks from "./_components/HowItWorks";
import TaglineBand from "./_components/TaglineBand";
import FindUs from "./_components/FindUs";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <ScrollIntro />
      <div id="site-start" style={{ overflowX: "clip" }}>
        <Header />
        <Hero />
        <Services />
        <HowItWorks />
        <TaglineBand />
        <FindUs />
        <Faq />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
