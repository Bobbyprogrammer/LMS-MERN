import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";

const CoursesList = () => {
  const { navigate, courses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFiltreredCourse] = useState([]);
  useEffect(() => {
    if (courses && courses.length > 0) {
      const tempCourses = courses.slice();

      input
        ? setFiltreredCourse(
            tempCourses.filter((course) =>
              course.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFiltreredCourse(tempCourses);
    }
  }, [courses, input]);
  return (
    <>
      <div className="md:px-36 px-8 pt-20 text-left">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#212121]">Courses List</h1>
            <p className="text-gray-600">
              <span
                onClick={() => navigate("/")}
                className="text-blue-600 cursor-pointer"
              >
                Home
              </span>{" "}
              / <span>Course List</span>{" "}
            </p>
          </div>
          <SearchBar />
        </div>

        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt=""
              className="cursor-pointer"
              onClick={() => navigate("/course-list")}
            />
          </div>
        )}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center">
          {filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CoursesList;
