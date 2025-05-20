import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const CourseSection = () => {
  const { courses } = useContext(AppContext);
  return (
    <div className="py-16 px-8 md:px-40">
      <h2 className="text-[#212121] text-xl font-semibold">
        Master skills with world-class instructors
      </h2>
      <p className="text-gray-700/80 text-sm my-3">
        Explore our highest-rated courses in categories like coding, design,
        business, and wellness — all built to help you succeed.
      </p>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center justify-center">
        {courses.slice(0, 5).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className="bg-[#212121] text-white  px-6 py-2 rounded-md my-5"
      >
        Show More
      </Link>
    </div>
  );
};
export default CourseSection;
