import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Faq = () => {
  const [faqDetails, setFaqDetails] = useState({
    certificateCourseName: "",
    type: "Private",
    question: "",
    answer: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFaqDetails({ ...faqDetails, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFaqDetails({ ...faqDetails, type: e.target.value });
  };

  const handleSave = () => {
    console.log(faqDetails);
    // Add save logic here
  };

  return (
    <div className=" p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Course FAQ's</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Certificate/Course Name
            </label>
            <input
              type="text"
              name="certificateCourseName"
              value={faqDetails.certificateCourseName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Certificate or Course Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Type</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="private"
                name="type"
                value="Private"
                checked={faqDetails.type === "Private"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="private" className="mr-4">
                Private
              </label>
              <input
                type="radio"
                id="public"
                name="type"
                value="Public"
                checked={faqDetails.type === "Public"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="public">Public</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Question
            </label>
            <textarea
              name="question"
              value={faqDetails.question}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg h-24"
              placeholder="Enter Question"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Answer</label>
            <textarea
              name="answer"
              value={faqDetails.answer}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg h-24"
              placeholder="Enter Answer"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Faq;
