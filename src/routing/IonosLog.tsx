import envelope from "../assets/product-email.svg";
import account from "../assets/my-account.svg";
import hidrive from "../assets/product-hidrive.svg";
import cloud from "../assets/cloud-dcd.svg";
import { useEffect } from "react";

const IonosLog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="px-3 mb-20">
        <div className="flex flex-col justify-between w-full md:w-[400px] lg:w-[600px] mx-auto border border-gray-400 overflow-hidden rounded-2xl mb-5">
          <div className="px-6 py-7 bg-white">
            <div className="flex items-center gap-3 mb-10">
              <div>
                <img className="w-[70px] h-[70px]" src={account} alt="" />
              </div>
              <h1 className="text-xl font-semibold text-blue-950">
                My IONOS Login
              </h1>
            </div>
            <form className="">
              <div className="flex flex-col gap-y-2 ">
                <label htmlFor="">
                  Customer number, email address or domain
                </label>
                <div className="rounded-lg border border-gray-500 overflow-hidden">
                  <input type="text" className="w-full outline-none p-2 " />
                </div>
                <p className="text-blue-950 mb-5">Forgotten access?</p>
                <button className="w-full bg-blue-950 hover:bg-blue-700 text-white py-2 font-semibold rounded-3xl">
                  Further
                </button>
              </div>
            </form>
          </div>
          <div className="bg-[#F4F7FA] px-6 py-7">
            <p className="text-blue-950">Not an IONOS customer yet?</p>
            <a href="#" className="text-blue-600">
              Become a customer now and benefit from our offers.
            </a>
          </div>
        </div>
        <div className="w-full md:w-[400px] lg:w-[600px] mx-auto">
          <p className="text-xl mb-5">More IONOS logins</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="border text-center bg-white py-6 rounded-lg hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
              <div>
                <img
                  src={envelope}
                  className="w-[80px] h-[80px] mx-auto mb-2"
                  alt=""
                />
              </div>
              <p>Mail</p>
            </div>
            <div className="border text-center bg-white py-6 rounded-lg hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
              <div>
                <img
                  src={cloud}
                  className="w-[80px] h-[80px] mx-auto mb-2"
                  alt=""
                />
              </div>
              <p>
                Data Center <br /> Designer
              </p>
            </div>
            <div className="border text-center bg-white py-6 rounded-lg hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
              <div>
                <img
                  src={hidrive}
                  className="w-[80px] h-[80px] mx-auto mb-2"
                  alt=""
                />
              </div>
              <p>HiDrive</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IonosLog;
