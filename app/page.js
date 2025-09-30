import HomeSection from './components/HomeSection';
import CabanasSection from './components/CabanasSection';
import ContactSection from './components/ContactSection';
import ProximitySection from './components/ProximitySection';

export default function Home() {
  return (
    <main>
      <HomeSection />
      <CabanasSection />
      <ContactSection />
      <ProximitySection />
    </main>
  );
}