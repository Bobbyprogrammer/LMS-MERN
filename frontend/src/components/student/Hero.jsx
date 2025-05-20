import Companies from "./Companies";
import CourseSection from "./CourseSection";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-pink-200/70">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] max-w-3xl mx-auto md:leading-16">
        Unlock your potential with learning that{" "}
        <span className="text-orange-600">fits your journey.</span>
      </h1>
      <p className="hidden md:block max-w-2xl mx-auto text-gray-700">
        Our platform unites leading instructors, dynamic content, and a strong
        support network to guide you toward your personal and professional
        aspirations.
      </p>
      <p className="md:hidden max-w-sm mx-auto text-gray-700">
        Learn from top educators, dive into interactive lessons, and connect
        with a community that supports your success.
      </p>

      <SearchBar />
      <Companies />
      <CourseSection />
    </div>
  );
};
export default Hero;
