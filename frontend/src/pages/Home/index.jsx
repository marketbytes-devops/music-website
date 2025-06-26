import Hero from './Hero';
import DancingBlob from '../../components/DancingBlob';
import About from './About';
import PerfectMusic from './PerfectMusic';
import BookWithUs from './BookWithUs';
import SpecialEvents from './SpecialEvents';
import ClientStories from './ClientStories';
import ExperiencingBeat from '../../components/UiComponents/ExperiencingBeat';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-[#662451]/10 to-[#662451]/10 animate-gradient min-h-screen">
      <section>
        <Hero />
      </section>
      <div className="w-full max-w-7xl mx-auto pt-56 sm:pt-56 md:pt-40 animate-none sm:animate-none md:animate-bounce px-4">
        <DancingBlob />
      </div>
      <section className='pt-8 sm:pt-8 md:pt-8'>
        <About />
      </section>
      <section>
        <PerfectMusic />
      </section>
      <section className='pt-4 md:pt-0 bg-black'>
        <BookWithUs />
      </section>
      <section className='pt-8 sm:pt-8 md:pt-16 bg-black'>
        <SpecialEvents />
      </section>
      <section className='pt-8 sm:pt-8 md:pt-16 bg-black'>
        <ClientStories />
      </section>
      <section className='py-8 sm:py-8 md:py-16 bg-black'>
        <ExperiencingBeat />
      </section>
    </div>
  );
};

export default Home;