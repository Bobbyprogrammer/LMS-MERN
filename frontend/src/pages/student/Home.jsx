import Hero from "../../components/student/Hero";
import Testimonial from "../../components/student/Testimonial";
import Companies from "../../components/student/Companies";
import CourseSection from "../../components/student/CourseSection";
import SearchBar from "../../components/student/SearchBar";
import CallToAction from "../../components/student/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Companies />
      <CourseSection />
      <Testimonial />
      <CallToAction />
    </div>
  );
};
export default Home;
