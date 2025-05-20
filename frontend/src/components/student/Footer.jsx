import { Link } from "react-router-dom";
const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "My Enrollments", "Become Educator"],
    },
    {
      title: "Need Help?",
      links: [
        "How to Enroll",
        "Course Access & Support",
        "Certificates & Completion",
        "Payment & Subscription",
        "Contact Us",
      ],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];

  return (
    <div className="mt-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#212121] text-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-white">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">
              EduCore
            </h1>
          </Link>
          <p className="max-w-[410px] mt-6">
            Empowering learners with expert-led courses, practical skills, and a
            flexible learning experience. Join our community and start your
            journey toward personal and professional growth today.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-white">
        Copyright 2025 © EduCore All Right Reserved.
      </p>
    </div>
  );
};
export default Footer;
