import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-blue-100">
      {/* Left Section */}
      <div className="hidden md:flex items-center justify-center bg-white w-[574px] h-[349px]">
        {/* <p className="text-black text-3xl">574x349</p> */}
        <img src="https://technohana.com/assets/img/logo/logo.png" alt="" />
      </div>

      {/* Right Section */}
      <div className="md:ml-8 bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <div className="flex justify-center items-center mb-4">
          <div className=" w-[145px] h-[32px] flex items-center justify-center">
            <img src="https://technohana.com/assets/img/logo/logo.png" alt="" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Create an Account! 😊</h2>
        <p className="mb-6">
          Fill in the form below to sign up for a new account.
        </p>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm mb-2">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
            />
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Sign Up
          </button>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Sign In
            </Link>
          </p>

          <div className="flex items-center justify-center mt-6">
            <span className="text-gray-400 text-sm">or</span>
          </div>

          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="bg-gray-200 p-2 rounded-full">
              <img
                src="https://imgs.search.brave.com/0_cFNEEJUfPjk3NuZFMukZ3JneWzWK290tu4UTJRVjc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9GYWNlYm9v/ay1sb2dvLWJsdWUt/bWVkaXVtLXNpemUt/UE5HLnBuZw"
                alt="Facebook"
                className="h-4 w-4"
              />
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <img
                src="https://imgs.search.brave.com/meNszP5Hxl0FzIkHXE7p5w2S02g1mROHazJBX_VVXbw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IveC1sb2dvLXN0/aWNrZXJfOTQxMzI3/LTM4LmpwZz9zaXpl/PTYyNiZleHQ9anBn"
                alt="Twitter"
                className="h-4 w-4"
              />
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <img
                src="https://imgs.search.brave.com/aML63go3qx4B2AZEeBGsMDESVu76lSffF1mIpwch2vs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzg4LzA3Lzg0/LzM2MF9GXzM4ODA3/ODQ1NF9tS3RiZFhZ/RjljeVFvdkNDVHNq/cUkwZ2JmdTdnQ2NT/cC5qcGc"
                alt="Google"
                className="h-4 w-4"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
