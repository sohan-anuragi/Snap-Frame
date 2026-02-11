import { useState } from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../../assets/LoginPagesLogo/facebook.png";
import amazonLogo from "../../assets/LoginPagesLogo/amazon.png";
import googleLogo from "../../assets/LoginPagesLogo/google.png";
import iphoneLogo from "../../assets/LoginPagesLogo/iphone.png";
import { Navigation } from "swiper/modules";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login attempt:", { email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log("Login with:", provider);
    // Add social login logic here
  };

  return (
    <div className=" flex items-center  flex-col px-4">
      <span className="flex self-start  gap-[0.25rem] text-[0.75rem] text-gray-500 mb-rem] mt-[1rem]">
        <a href="/" className="hover:text-red-600  transition-colors">
          Home
        </a>
        <span className="select-none">&gt;&gt;</span>
        <a href="/login" className="hover:text-red-600 transition-colors">
          LoginPage
        </a>
      </span>
      <div className="  bg-[#fcfcfc] pt-[0rem]    p-8">
        {/* Header */}
        <h1 className="text-2xl font-extrabold font-inter  text-center text-gray-800 mb-2">
          SIGN IN TO CANVASCHAMP
        </h1>
        <div className="flex justify-center mb-[2.5rem]">
          <div className="h-[1px] w-[50%] self-center bg-[#80808083]"></div>
        </div>
        {/* Social Login Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 px-[0.5rem]  justify-center">
          {/* Facebook */}
          <a
            href="#"
            onClick={() => handleSocialLogin("facebook")}
            className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-700 rounded-sm transition text-white font-semibold text-sm"
            title="Sign in with Facebook"
          >
            <img src={facebookLogo} alt="Facebook" className="w-5 h-5" />
            FACEBOOK
          </a>

          {/* Amazon */}
          <a
            href="#"
            onClick={() => handleSocialLogin("amazon")}
            className="flex items-center gap-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded-sm transition text-white font-semibold text-sm"
            title="Sign in with Amazon"
          >
            <img src={amazonLogo} alt="Amazon" className="w-5 h-5" />
            AMAZON
          </a>

          {/* Google */}
          <a
            href="#"
            onClick={() => handleSocialLogin("google")}
            className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-gray-300 hover:border-gray-400 rounded-sm transition text-gray-700 font-semibold text-sm"
            title="Sign in with Google"
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            GOOGLE
          </a>

          {/* iPhone */}
          <a
            href="#"
            onClick={() => handleSocialLogin("iphone")}
            className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-900 rounded-md transition text-white font-semibold text-sm"
            title="Sign in with iPhone"
          >
            <img src={iphoneLogo} alt="iPhone" className="w-5 h-5" />
            iPHONE
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-600 text-sm">or via e-mail</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-700 font-medium text-sm">
                Email Address
              </label>
              <a
                href="#"
                className="text-[gray] hover:text-red-700 text-xs font-medium"
              >
                Get Login Email OTP
              </a>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-[1px] border-gray-300 rounded-sm focus:outline-none focus:border-[#000000ba] focus:border-dotted transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-700 font-medium text-sm">
                Password
              </label>
              <a
                href="forgot-password"
                className="text-[gray] hover:text-red-700 text-xs font-medium"
              >
                Forgot Your Password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-[#000000ba] focus:border-dotted transition"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition mb-4"
          >
            LOGIN
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-700 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-red-600 hover:text-[black] decoration-red-600 font-bold"
          >
            Create an account..!
          </a>
        </p>
      </div>
    </div>
  );
}
