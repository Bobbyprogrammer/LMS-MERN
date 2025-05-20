import { useClerk } from "@clerk/clerk-react";
const CallToAction = () => {
  const { openSignIn } = useClerk();
  return (
    <div className="my-12 flex items-center justify-center flex-col ">
      <h1 className="text-3xl md:text-4xl  font-bold text-[#212121] text-center">
        Your Learning Journey,{" "}
        <span className="text-orange-600">Anytime. Anywhere.</span>
      </h1>
      <p className="text-gray-600 text-sm text-center my-3">
        Experience immersive learning designed to fit your goals, with
        expert-led content and practical insights that make a real difference.
      </p>
      <div>
        <button
          onClick={() => openSignIn()}
          className="my-2 bg-[#212121] text-white px-6 py-2 rounded-md cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
export default CallToAction;
