import HeroKakakAsuh from "../components/kakak-asuh/Hero"
import ProblemSection from "../components/kakak-asuh/Problem"
import ScaleSection from "../components/kakak-asuh/Scale"
import SolutionSection from "../components/kakak-asuh/Solution"
import ImpactSection from "../components/kakak-asuh/Impact"
import CTASection from "../components/kakak-asuh/CTA"
import Footer from "../components/Footer"
import Navbar from "../components/Header"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroKakakAsuh />
        <ProblemSection />
        <ScaleSection />
        <SolutionSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
