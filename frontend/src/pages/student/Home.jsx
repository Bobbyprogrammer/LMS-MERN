import Hero from "../../components/student/Hero";
import Testimonial from "../../components/student/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Testimonial />
      <h1 className="text-3xl md:text-4xl  font-bold text-[#212121] text-center">
        Your Learning Journey, Anytime. Anywhere.
      </h1>
      <p className="text-gray-600 text-sm text-center my-3">
        Experience immersive learning designed to fit your goals, with
        expert-led content and practical insights that make a real difference.
      </p>
    </div>
  );
};
export default Home;
