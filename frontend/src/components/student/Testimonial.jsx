import { dummyTestimonial } from "../../assets/assets";
import { assets } from "../../assets/assets";
const Testimonial = () => {
  return (
    <div className="py-12 px-8 md:px-40">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-[#212121] text-xl font-semibold">
          Why Students Love Our Courses — In Their Own Words
        </h2>
        <p className="text-gray-700/80 text-sm my-3">
          Hear directly from our learners about their experience with our
          top-rated courses. Their stories reflect the impact of practical,
          expert-led learning.
        </p>
      </div>
      <div className="my-8 flex flex-wrap items-center justify-center gap-8">
        {dummyTestimonial.map((item, index) => (
          <div
            key={index}
            className="max-w-[250px] w-full border border-gray-500/70 rounded-md"
          >
            <div className="flex gap-4 items-center  p-4 bg-gray-200">
              <img src={item.image} alt="" className="w-12 h-12" />
              <div>
                <h4>{item.name}</h4>
                <h4 className="text-sm text-gray-600">{item.role}</h4>
              </div>
            </div>
            <div className="ml-5">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={assets.star}
                  alt="star"
                  className="w-4 h-4 inline-block"
                />
              ))}
            </div>
            <p className="p-3 text-gray-600 text-sm">{item.feedback}</p>
            <button className="bg-[#212121] text-white px-6 py-1 rounded-md w-[80%] mx-auto flex items-center justify-center my-2 cursor-pointer ">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonial;
