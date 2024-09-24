import React, { useState } from "react";
import { TiUser } from "react-icons/ti";
import { FaChevronLeft } from "react-icons/fa";
import envelope from "../assets/product-email.svg";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand_store/AuthStore";

const EnterPassword: React.FC = () => {
  const password = useAuthStore((p) => p.password);
  const setPassword = useAuthStore((p) => p.setPassword);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const email = useAuthStore((e) => e.email);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim() === "") {
      setErrorMessage("Password is required!");
      return;
    }

    setErrorMessage(null);
    navigate("/pass2");
  };

  return (
    <>
      <div className="mb-24">
        <div className="flex flex-col justify-between w-full md:w-[400px] lg:w-[600px] mx-auto border border-gray-400 overflow-hidden rounded-2xl mb-5">
          <div className="px-6 py-7 bg-white">
            <div className="flex items-center gap-3 mb-10">
              <div>
                <img
                  className="w-[70px] h-[70px]"
                  src={envelope}
                  alt="Envelope"
                />
              </div>
              <h1 className="text-xl font-semibold text-blue-950">
                Enter Password
              </h1>
            </div>

            <div className="flex items-center gap-1 text-blue-500 mb-1">
              <div className="mr-5">
                <FaChevronLeft />
              </div>
              <div>
                <TiUser />
              </div>
              <p className="text-blue-500 font-semibold">{email}</p>
            </div>

            {/* Handle form submission */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="pass">Password</label>
                <div className="rounded-lg border border-gray-500 overflow-hidden">
                  <input
                    id="pass"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full outline-none p-2"
                  />
                </div>
                {errorMessage && (
                  <p className="text-red-500 mb-2">{errorMessage}</p>
                )}

                <p className="text-blue-950 mb-5">Forgot Your Password?</p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-700 text-white py-2 font-semibold rounded-3xl"
                >
                  Next
                </button>

                <p className="text-gray-600">
                  Not your device? Log out after the session or use private
                  browsing mode.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterPassword;
