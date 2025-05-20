import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    {
      lectureCompleted: 2,
      totalLectures: 4,
    },
    {
      lectureCompleted: 3,
      totalLectures: 4,
    },
    {
      lectureCompleted: 4,
      totalLectures: 4,
    },
    {
      lectureCompleted: 5,
      totalLectures: 7,
    },
    {
      lectureCompleted: 6,
      totalLectures: 7,
    },
    {
      lectureCompleted: 7,
      totalLectures: 7,
    },
    {
      lectureCompleted: 8,
      totalLectures: 10,
    },
    {
      lectureCompleted: 9,
      totalLectures: 10,
    },
    {
      lectureCompleted: 0,
      totalLectures: 3,
    },
  ]);
  return (
    <>
      <div className="px-8 md:px-36 pt-10">
        <h1 className="text-3xl font-bold text-[#212121]">My Enrollments</h1>
        <table className="table-fixed md:table-auto w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/30 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-500/30">
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28"
                  />
                  <div className="flex-1 ">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                    <Line
                      strokeWidth={2}
                      percent={
                        progressArray[index]
                          ? (progressArray[index].lectureCompleted * 100) /
                            progressArray[index].totalLectures
                          : 0
                      }
                      className="bg-gray-300 rounded-full"
                    />
                  </div>
                </td>

                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progressArray[index] &&
                    `${progressArray[index].lectureCompleted}/${progressArray[index].totalLectures}`}{" "}
                  <span>lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button
                    onClick={() => navigate(`/player/${course._id}`)}
                    className="px-3 sm:px-5 py-1.5 sm:py-2 bg-black text-white max-sm:text-xs cursor-pointer"
                  >
                    {progressArray[index] &&
                    progressArray[index].lectureCompleted /
                      progressArray[index].totalLectures ===
                      1
                      ? "Completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyEnrollments;
