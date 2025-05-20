import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="py-12">
      <p className="text-gray-700/80 text-center">
        Preferred by students worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-5">
        <img src={assets.microsoft_logo} alt="" className="w-20 md:w-28" />
        <img src={assets.walmart_logo} alt="" className="w-20 md:w-28" />
        <img src={assets.accenture_logo} alt="" className="w-20 md:w-28" />
        <img src={assets.adobe_logo} alt="" className="w-20 md:w-28" />
        <img src={assets.paypal_logo} alt="" className="w-20 md:w-28" />
      </div>
    </div>
  );
};
export default Companies;
