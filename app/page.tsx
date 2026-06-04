import ScrollProgress from '@/components/motion/ScrollProgress';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Flow from '@/components/sections/Flow';
import Instagram from '@/components/sections/Instagram';
import Results from '@/components/sections/Results';
import Stack from '@/components/sections/Stack';
import Testimonial from '@/components/sections/Testimonial';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Flow />
        <Instagram />
        <Results />
        <Stack />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
