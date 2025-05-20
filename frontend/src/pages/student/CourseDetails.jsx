import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Youtube from "react-youtube";
const CourseDetails = () => {
  const {
    courses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    currency,
  } = useContext(AppContext);
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [isAlreadyEntrolled, setIsAlreadyEntrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const fetchCourseData = async () => {
    const findCourse = courses.find((course) => course._id === id);
    setCourseData(findCourse);
  };
  useEffect(() => {
    fetchCourseData();
  }, [courses]);

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left bg-gradient-to-b from-pink-200/70">
        {/* left column */}
        <div className="max-w-xl z-10 text-gray-600">
          <h1 className="text-3xl font-bold text-[#212121]">
            {courseData?.courseTitle}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: courseData?.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* course review & rating  */}
          <div className="flex gap-2 items-center pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? " ratings" : " rating"} )
            </p>
            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length > 1 ? "students" : "student"}
            </p>
          </div>
          <p className="text-sm ">
            Course by{" "}
            <span className="text-blue-600 underline">
              {courseData?.educatorName}
            </span>
          </p>
          {/* course structure  */}
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white mb-2 rounded"
                >
                  <div
                    onClick={() => toggleSection(index)}
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className={`transition-transform transform ${
                          openSection[index] ? "rotate-180" : ""
                        }`}
                        src={assets.down_arrow_icon}
                        alt=""
                      />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm md:text-default">
                      {chapter.chapterContent.length} lectures -{" "}
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection[index] ? "max-h-96" : "max-h-0"
                    } `}
                  >
                    <ul className="list-disc pl-4 md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, index) => (
                        <li key={index} className="flex items-start gap-2 py-1">
                          <img
                            src={assets.play_icon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      videoId: lecture.lectureUrl
                                        .split("/")
                                        .pop(),
                                    })
                                  }
                                  className="text-blue-500 cursor-pointer"
                                >
                                  Preview
                                </p>
                              )}
                              <p className="">
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-20 text-sm md:text-default">
            <h3 className=" text-xl font-semibold text-[#212121]">
              Course Description
            </h3>
            <p
              className="pt-3 rich-text"
              dangerouslySetInnerHTML={{
                __html: courseData?.courseDescription,
              }}
            ></p>
          </div>
        </div>
        {/* right column */}
        <div className=" max-w-[424px] z-10  shadow-lg rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
          {playerData ? (
            <Youtube
              videoId={playerData.videoId}
              opts={{ playerVars: { autoplay: 1 } }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img src={courseData?.courseThumbnail} alt="" />
          )}
          <div className="p-5">
            <div className="flex items-center gap-2">
              <img
                className="w-3.5 "
                src={assets.time_left_clock_icon}
                alt=""
              />

              <p className="text-red-500">
                {" "}
                <span className="font-medium">5 days</span> left at this price!
              </p>
            </div>

            <div className="flex  gap-3 items-center pt-2">
              <p className="text-gray-800 md:text-4xl text-2xl font-semibold">
                {currency}{" "}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="md:text-lg text-gray-500 line-through">
                {currency}
                {courseData.coursePrice}
              </p>
              <p className="md:text-lg text-gray-500">
                {courseData.discount}% off
              </p>
            </div>

            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="" />
                <p>{calculateRating(courseData)}</p>
              </div>
              <div className="h-4 bg-gray-500/40 w-px"></div>

              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>
              <div className="h-4 bg-gray-500/40 w-px"></div>

              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>
            </div>

            <button className="my-5 bg-[#212121] text-white px-6 py-2 rounded-md cursor-pointer w-full ">
              {isAlreadyEntrolled ? "Already Enrolled" : "Enroll Now"}
            </button>

            <div className="pt-5">
              <p className="text-lg md:text-xl font-medium text-gray-800">
                What's in the course?
              </p>
              <ul className="flex flex-col gap-2 pt-3 text-gray-500 text-sm list-disc ml-4">
                <li>Unlimited lifetime access with ongoing updates</li>
                <li>Practical, step-by-step project tutorials</li>
                <li>Access to downloadable materials and source files</li>
                <li>Interactive quizzes to reinforce learning</li>
                <li>Earn a certificate upon course completion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};
export default CourseDetails;
