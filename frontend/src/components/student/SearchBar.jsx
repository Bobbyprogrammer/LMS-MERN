import { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const submitHandler = async (e) => {
    e.preventDefault();
    navigate(`/course-list/` + input);
  };
  return (
    <form
      onSubmit={submitHandler}
      className=" max-w-xl w-full h-12 md:h-14 flex items-center bg-white border border-gray-500/80 rounded"
    >
      <img
        src={assets.search_icon}
        alt="search icon"
        className="w-10 md:w-auto px-3"
      />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="search courses"
        className="w-full h-full text-gray-700/80 outline-none"
      />
      <button
        type="submit"
        className="bg-[#212121] text-white rounded md:px-10 px-7 py-2 md:py-3 mx-1"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
