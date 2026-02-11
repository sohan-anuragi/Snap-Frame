import { useState } from "react";
import facebookLogo from "../../assets/LoginPagesLogo/facebook.png";
import amazonLogo from "../../assets/LoginPagesLogo/amazon.png";
import googleLogo from "../../assets/LoginPagesLogo/google.png";
import icloudLogo from "../../assets/LoginPagesLogo/icloud.png";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <span className="flex self-start ml-[2rem]  gap-[0.25rem] text-[0.75rem] text-gray-500 mb-rem] mt-[1rem]">
        <a href="/" className="hover:text-red-600  transition-colors">
          Home
        </a>
        <span className="select-none">&gt;&gt;</span>
        <a href="/login" className="hover:text-red-600 transition-colors">
          RegisterPage
        </a>
      </span>
      <div className="flex flex-col items-center justify-center px-[1rem] ">
        <div className="md:w-[70%] lg:w-[60%] xl:w-[50%] [90%]  ">
          <div className="bg-[#fbfbfb] p-[2rem]">
            <h1 className="text-[2rem] font-black font-inter text-center text-gray-800 mb-[0.5rem]">
              CREATE AN ACCOUNT
            </h1>
            <div className="flex justify-center mb-[2.5rem]">
              <div className="h-[0.0625rem] w-[50%] self-center bg-[#80808083]"></div>
            </div>

            <div className="flex justify-center  flex-wrap gap-[1.8rem] mb-[0.75rem] ">
              <div className="flex items-center gap-[0.5rem] px-[0.75rem] py-[0.5rem] bg-blue-500 rounded-[0.375rem] text-white font-semibold text-[0.75rem]">
                <img
                  src={facebookLogo}
                  alt="Facebook"
                  className="w-[1.25rem] h-[1.25rem]"
                />
                FACEBOOK
              </div>
              <div className="flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] bg-orange-400 rounded-sm text-white font-semibold text-[0.75rem]">
                <img
                  src={amazonLogo}
                  alt="Amazon"
                  className="w-[1.25rem] h-[1.25rem]"
                />
                AMAZON
              </div>
              <div className="flex items-center gap-[0.5rem] px-[0.75rem] py-[0.5rem] bg-white border-[0.125rem] border-gray-300 rounded-[0.375rem] text-gray-700 font-semibold text-[0.75rem]">
                <img
                  src={googleLogo}
                  alt="Google"
                  className="w-[1.25rem] h-[1.25rem]"
                />
                GOOGLE
              </div>
              <div className="flex items-center gap-[0.5rem] px-[0.75rem] py-[0.5rem] bg-gray-700 rounded-sm text-white font-semibold text-[0.75rem]">
                <img
                  src={icloudLogo}
                  alt="iCloud"
                  className="w-[1.25rem] h-[1.25rem]"
                />
                iCloud
              </div>
            </div>

            <div className="text-center text-gray-600 text-[0.75rem] mb-[1rem]">
              Or Sign up with
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.75rem] mb-[0.75rem]">
                <div>
                  <label className="text-gray-700 font-medium text-[0.75rem]">
                    First Name*
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full mt-[0.25rem] px-[0.75rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] focus:outline-none focus:border-[#000000ba] focus:border-dotted"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium text-[0.75rem]">
                    Last Name*
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full mt-[0.25rem] px-[0.75rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] focus:outline-none focus:border-[#000000ba] focus:border-dotted"
                  />
                </div>
              </div>

              <div className="mb-[0.75rem]">
                <label className="text-gray-700 font-medium text-[0.75rem]">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-[0.25rem] px-[0.75rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] focus:outline-none focus:border-[#000000ba] focus:border-dotted"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.75rem] mb-[0.75rem]">
                <div>
                  <label className="text-gray-700 font-medium text-[0.75rem]">
                    Password*
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full mt-[0.25rem] px-[0.75rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] focus:outline-none focus:border-[#000000ba] focus:border-dotted"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium text-[0.75rem]">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="w-full mt-[0.25rem] px-[0.75rem] py-2 border-[0.0625rem] border-gray-300 rounded-[0.125rem] focus:outline-none focus:border-[#000000ba] focus:border-dotted"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.75rem] mb-[0.75rem]">
                <div>
                  <label className="text-gray-700 font-medium text-[0.75rem]">
                    Telephone*
                  </label>
                  <div className="flex items-center gap-[0.5rem] mt-[0.25rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] px-[0.5rem] py-2">
                    <span className="text-[0.75rem]">🇮🇳</span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full text-[0.75rem] focus:outline-none"
                      placeholder="081234 56789"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-700 font-medium text-[0.75rem]">
                    Date of Birth (dd/mm/yyyy)
                  </label>
                  <div className="grid grid-cols-3 gap-[0.5rem] mt-[0.25rem]">
                    <input
                      name="dobDay"
                      value={form.dobDay}
                      onChange={handleChange}
                      className="w-full px-[0.5rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] text-[0.75rem] focus:outline-none"
                      placeholder="DD"
                    />
                    <input
                      name="dobMonth"
                      value={form.dobMonth}
                      onChange={handleChange}
                      className="w-full px-[0.5rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] text-[0.75rem] focus:outline-none"
                      placeholder="MM"
                    />
                    <input
                      name="dobYear"
                      value={form.dobYear}
                      onChange={handleChange}
                      className="w-full px-[0.5rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] text-[0.75rem] focus:outline-none"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-[0.5rem] text-[0.9rem] text-gray-600 mb-[1rem]">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-[0.125rem]"
                />
                <p>
                  I authorize CanvasChamp to contact me via WhatsApp or other
                  social media platforms regarding my inquiry.
                  <a href="#" className="text-red-600">
                    Read our Privacy and Cookie Policy.
                  </a>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-sm transition mb-[0.75rem]"
              >
                SIGN UP
              </button>
            </form>

            <p className="text-center text-gray-700 text-[0.9rem]">
              If you already have an account with us, you can
              <a href="/login" className="text-red-600">
                {" "}
                log in.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
