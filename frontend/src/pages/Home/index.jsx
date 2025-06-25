import Hero from './Hero';
import DancingBlob from '../../components/DancingBlob';
import About from './About';
import PerfectMusic from './PerfectMusic';
import BookWithUs from './BookWithUs';

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
      <section>
        <BookWithUs />
      </section>
    </div>
  );
};

export default Home;