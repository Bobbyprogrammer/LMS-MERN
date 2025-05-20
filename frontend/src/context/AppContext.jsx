import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [courses, setCourses] = useState([]);

  // function to fetch the courses
  const fetchCourses = async () => {
    setCourses(dummyCourses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  const value = { currency, courses };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
