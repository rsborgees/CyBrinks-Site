import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import CaseStudy from "./components/CaseStudy";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Challenges />
        <Services />
        <Methodology />
        <CaseStudy />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
