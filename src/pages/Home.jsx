import ContactForm from "../components/ContactForm/ContactForm";
import Courses from "../components/Courses/Course";
import CTA from "../components/CTA/CTA";
import Faculty from "../components/Faculty/Faculty";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";


const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs/>
      <Courses/>
      <Faculty/>
      <Gallery/>
      <ContactForm/>
      <CTA/>
    </>
  );
};

export default Home;