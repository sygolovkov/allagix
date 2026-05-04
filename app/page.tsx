import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Commerce from "./components/Commerce";
import HowItWorks from "./components/HowItWorks";
import Audiences from "./components/Audiences";
import GlobalSection from "./components/GlobalSection";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <main className="page">
      <RevealObserver />
      <Navbar />
      <Hero />
      <Stats />
      <Commerce />
      <HowItWorks />
      <Audiences />
      <GlobalSection />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  );
}
