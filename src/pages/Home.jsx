import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Process from '../components/sections/Services';
import WhyChoose from '../components/sections/WhyChoose';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Process />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
