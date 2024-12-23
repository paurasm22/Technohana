import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const FreelancerRequestPanel = () => {
  const [formData, setFormData] = useState({
    client: "",
    newCourse: "",
    technology: "",
    currency: "INR",
    cityOfTraining: "",
    language: "English",
    chancesOfConversion: "",
    remarksOfSales: "",
    budgetPerDay: "",
    ilt: "",
    existingCourse: "",
    vendor: "",
    status: "WIP",
    numberOfPax: "",
    country: "",
    closureMonth: "",
    remarksOfFM: "",
    tocFile: null,
    filterByChance: "0",
    filterByFM: "",
    fromDate: "",
    toDate: "",
    search: "",
    fmChecked: false,
    wip: false,
    signedUp: false,
    paymentPending: false,
    trainingDate: false,
    clientConfirmed: false,
    toSendAutoDemoLink: false,
    dcRequired: false,
    cwRequired: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSave = () => {
    console.log(formData);
  };

  const handleSearch = () => {
    console.log("Searching...");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Freelancer Request Panel</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Client:</label>
          <input
            type="text"
            name="client"
            value={formData.client}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search here (min three ch)"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            New Course:
          </label>
          <input
            type="text"
            name="newCourse"
            value={formData.newCourse}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Technology:
          </label>
          <input
            type="text"
            name="technology"
            value={formData.technology}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Currency:
          </label>
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="INR"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            City Of Training:
          </label>
          <input
            type="text"
            name="cityOfTraining"
            value={formData.cityOfTraining}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Language:
          </label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="English"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Chances of conversion:
          </label>
          <input
            type="number"
            name="chancesOfConversion"
            value={formData.chancesOfConversion}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="%age"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Remarks of sales:
          </label>
          <textarea
            name="remarksOfSales"
            value={formData.remarksOfSales}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Budget per day:
          </label>
          <input
            type="text"
            name="budgetPerDay"
            value={formData.budgetPerDay}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">ILT:</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="ilt"
              value="Individual"
              checked={formData.ilt === "Individual"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="mr-4">Individual</label>
            <input
              type="radio"
              name="ilt"
              value="Corporate"
              checked={formData.ilt === "Corporate"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="mr-4">Corporate</label>
            <input
              type="radio"
              name="ilt"
              value="Third Party"
              checked={formData.ilt === "Third Party"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Third Party</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Existing Course:
          </label>
          <input
            type="text"
            name="existingCourse"
            value={formData.existingCourse}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Vendor:</label>
          <input
            type="text"
            name="vendor"
            value={formData.vendor}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Status:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="WIP"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            # of Pax:
          </label>
          <input
            type="number"
            name="numberOfPax"
            value={formData.numberOfPax}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Closure Month:
          </label>
          <input
            type="text"
            name="closureMonth"
            value={formData.closureMonth}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Closure Month:
          </label>
          <input
            type="text"
            name="closureMonth"
            value={formData.closureMonth}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Remarks of FM:
          </label>
          <textarea
            name="remarksOfFM"
            value={formData.remarksOfFM}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            TOC File:
          </label>
          <input
            type="file"
            name="tocFile"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Filter By Chance (%)
            </label>
            <input
              type="number"
              name="filterByChance"
              value={formData.filterByChance}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Filter By FM
            </label>
            <input
              type="text"
              name="filterByFM"
              value={formData.filterByFM}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Type Name"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              From Date
            </label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              To Date
            </label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Search</label>
          <input
            type="text"
            name="search"
            value={formData.search}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Type Search Query"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Additional Filters
          </label>
          <div className="flex flex-wrap">
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="fmChecked"
                checked={formData.fmChecked}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">FM Checked</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="wip"
                checked={formData.wip}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">WIP</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="signedUp"
                checked={formData.signedUp}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">Signed Up</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="paymentPending"
                checked={formData.paymentPending}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">Payment Pending</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="trainingDate"
                checked={formData.trainingDate}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">Training Date</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="clientConfirmed"
                checked={formData.clientConfirmed}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">Client Confirmed</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="toSendAutoDemoLink"
                checked={formData.toSendAutoDemoLink}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">To Send Auto Demo Link</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="dcRequired"
                checked={formData.dcRequired}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">DC Required</label>
            </div>
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                name="cwRequired"
                checked={formData.cwRequired}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="text-gray-700">CW Required</label>
            </div>
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Add and Update</h3>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FreelancerRequestPanel;
