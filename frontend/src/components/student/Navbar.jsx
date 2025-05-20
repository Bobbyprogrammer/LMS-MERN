import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { isEducator, setIsEducator, navigate } = useContext(AppContext);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-600 py-4 ${
        isCourseListPage ? "bg-white" : "bg-pink-200/70"
      } `}
    >
      <Link to={"/"}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">
          EduCore
        </h1>
      </Link>

      <div className="hidden md:flex items-center gap-5  text-gray-600">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button
                onClick={() => navigate("/educator")}
                className="cursor-pointer"
              >
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              <Link to={"/my-enrollments"}>My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-[#212121] text-white px-5 py-1 rounded-full cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      {/* mobile screen  */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-600">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button
                onClick={() => navigate("/educator")}
                className="cursor-pointer"
              >
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              <Link to={"/my-enrollments"} className="cursor-pointer text-sm">
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
