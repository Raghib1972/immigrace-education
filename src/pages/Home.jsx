
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Countries from "../components/home/Countries";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/common/ContactCTA";

const Home = () => {
  return (
    <div className="pt-24 overflow-hidden">
      <Hero />
      <div className="animate-fade-in">
        <Services />
      </div>
      <div className="animate-fade-in">
        <WhyChooseUs />
      </div>
      <div className="animate-fade-in">
        <Countries />
      </div>
      <div className="animate-fade-in">
        <Testimonials />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Home;