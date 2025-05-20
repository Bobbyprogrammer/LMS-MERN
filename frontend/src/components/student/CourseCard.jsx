import { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);
  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-700/50 pb-6 overflow-hidden rounded-lg "
    >
      <img src={course.courseThumbnail} alt="" className="w-full" />
      <div className="p-4 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-700">{course.educatorName}</p>
        <div className="flex gap-2 items-center">
          <p>4.5</p>
          <div className="flex">
            <img src={assets.star} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star} alt="" className="w-3.5 h-3.5" />
          </div>
          <p className="text-gray-700">28</p>
        </div>
        <p className="font-semibold text-base text-gray-800">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};
export default CourseCard;
