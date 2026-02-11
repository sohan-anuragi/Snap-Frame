import { useState } from "react";

export default function ForgetPassWord() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center flex-col px-[1rem]">
      <span className="flex self-start ml-[2rem]  gap-[0.25rem] text-[0.75rem] text-gray-500 mb-rem] mt-[1rem]">
        <a href="/" className="hover:text-red-600  transition-colors">
          Home
        </a>
        <span className="select-none">&gt;&gt;</span>
        <a href="/login" className="hover:text-red-600 transition-colors">
          Forget Password
        </a>
      </span>
      <div className="bg-white pt-[0rem] p-[2rem] w-full max-w-[36rem]">
        {/* Header */}
        <h1 className="text-[1.5rem] !font-black !font-inter text-center text-black-700 mb-[0.5rem] mt-[1rem] ">
          FORGOT YOUR PASSWORD?
        </h1>
        <div className="flex justify-center mb-[2.5rem]">
          <div className="h-[0.0625rem] w-[50%] self-center bg-[#80808083]"></div>
        </div>
        <p className="text-center text-gray-500 text-[0.875rem] mb-[2rem]">
          Retrieve Your Password Here
        </p>

        <p className="text-gray-600 text-[0.75rem] mb-[1.5rem]">
          Please enter your email address below. You will receive a link to
          reset your password.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-[1.5rem]">
            <label className="text-gray-700 font-medium text-[0.875rem] mb-[0.5rem] block">
              Email Address*
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-[1rem] py-[0.5rem] border-[0.0625rem] border-gray-300 rounded-[0.125rem] focus:outline-none focus:border-[#000000ba] focus:border-dotted transition text-[0.875rem]"
              placeholder=""
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#bc0000e9] hover:bg-red-600 text-white font-bold py-[0.75rem] rounded-sm transition mb-[1rem] text-[0.875rem]"
          >
            SUBMIT
          </button>
        </form>

        {/* Back to Login Link */}
        <a
          href="/login"
          className="text-center block text-[#cc0000e2] text-[0.875rem] font-medium"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
