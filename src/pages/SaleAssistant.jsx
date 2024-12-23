import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const SaleAssistant = () => {
  const [formData, setFormData] = useState({
    certification: "",
    client: "",
    billingLocation: "",
    visaAccommodation: "",
    country: "",
    internationalOrDomestic: "international",
    deliveryModel: "",
    thirdPartyBatch: "no",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sales Assistant</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Choose Certification/Combo/Course(s) (Min. 2 Character)
          </label>
          <input
            type="text"
            name="certification"
            value={formData.certification}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Min. 2 Character"
          />
          <div className="mt-2">
            <a href="#" className="text-blue-500">
              Other Details
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-500">
              Exam Details
            </a>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Client{" "}
            <a href="#" className="text-blue-500">
              Add Client
            </a>
          </label>
          <input
            type="text"
            name="client"
            value={formData.client}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Select Client By Email or Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Billing Location
          </label>
          <select
            name="billingLocation"
            value={formData.billingLocation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option>Please select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Visa / Accommodation Detail
          </label>
          <select
            name="visaAccommodation"
            value={formData.visaAccommodation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option>Please select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Country"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            International or Domestic
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              name="internationalOrDomestic"
              value="international"
              checked={formData.internationalOrDomestic === "international"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label className="mr-4">International</label>
            <input
              type="radio"
              name="internationalOrDomestic"
              value="domestic"
              checked={formData.internationalOrDomestic === "domestic"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label>Domestic</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Delivery Model
          </label>
          <select
            name="deliveryModel"
            value={formData.deliveryModel}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option>Please select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Third Party Batch
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              name="thirdPartyBatch"
              value="no"
              checked={formData.thirdPartyBatch === "no"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label className="mr-4">No</label>
            <input
              type="radio"
              name="thirdPartyBatch"
              value="yes"
              checked={formData.thirdPartyBatch === "yes"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label>Yes</label>
          </div>
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
          Trainers Possessing Skills
        </button>
      </div>
    </div>
  );
};

export default SaleAssistant;
