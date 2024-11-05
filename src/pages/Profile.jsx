import React from "react";

const Profile = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center">
      {/* Cover Photo Section */}
      <div className="w-full h-[200px] bg-gray-200 relative">
        <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md">
          Edit Cover
        </button>
      </div>

      {/* Profile Details Section */}
      <div className="bg-white shadow-lg rounded-lg w-11/12 md:w-3/4 mt-[-50px]">
        {/* Top Profile Info */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-gray-300 w-[120px] h-[120px] rounded-full flex items-center justify-center z-50">
              <p className="text-black text-xl">120X120</p>
            </div>
            <h1 className="text-2xl font-bold mt-4">Mohid Khan</h1>
            <p className="text-gray-500">
              UX Designer | San Francisco | Joined August 2024
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center border-b border-gray-200">
          <nav className="flex space-x-6">
            <button className="py-3 px-4 text-blue-500 border-b-2 border-blue-500">
              My Details
            </button>
            <button className="py-3 px-4 text-gray-500">Profile</button>
            <button className="py-3 px-4 text-gray-500">Password</button>
            <button className="py-3 px-4 text-gray-500">Plan</button>
            <button className="py-3 px-4 text-gray-500">Billing</button>
            <button className="py-3 px-4 text-gray-500">Notification</button>
          </nav>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">My Details</h2>
          <p className="mb-6 text-gray-500">
            Please fill in details about yourself
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter Last Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Profile Photo Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Your Photo
              </label>
              <div className="mt-1 flex items-center">
                <div className="bg-gray-300 w-[120px] h-[120px] rounded-full flex items-center justify-center">
                  <p className="text-black text-sm">120x120</p>
                </div>
                <input type="file" className="ml-6" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter Role"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter ZIP Code"
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Write a short bio"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
