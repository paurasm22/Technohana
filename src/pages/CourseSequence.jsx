import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const CourseSequence = () => {
  const [courseDetails, setCourseDetails] = useState({
    beforeCourse: "",
    afterCourse: "",
    explanation: "",
    infographic: null,
  });

  const [courseDetailsList, setCourseDetailsList] = useState([
    {
      beforeCourse:
        "Certified Associate in Project Management (CAPM) Certification Training",
      afterCourse:
        "Project Management Professional (PMP) Certification Training",
      explanation:
        "These two certifications differ in terms of the experience requirements, exam content, and certification duration. PMP certification is generally considered to be more advanced and may require more education and experience in order to qualify. The CAPM certification covers the fundamental knowledge and skills needed for project management, while the PMP certification covers more advanced concepts and practices. Earning a PMP certification can give you a deeper understanding of project management and make you more effective in your role.",
      infographic: "Image",
    },
    {
      beforeCourse: "Risk Management Foundation and Practitioner (3rd edition)",
      afterCourse:
        "Project Management Professional (PMP) Certification Training",
      explanation:
        "Risk management is an important aspect of project management, and earning a PMP certification can give you a deeper understanding of all aspects of project management, including risk management. This can make you more effective in your role as a project manager.",
      infographic: "N/A",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCourseDetails({ ...courseDetails, [name]: files[0] });
  };

  const handleSave = () => {
    setCourseDetailsList([...courseDetailsList, courseDetails]);
    setCourseDetails({
      beforeCourse: "",
      afterCourse: "",
      explanation: "",
      infographic: null,
    });
  };

  const handleEdit = (detail) => {
    setCourseDetails(detail);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Course Details</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Before Course
          </label>
          <input
            type="text"
            name="beforeCourse"
            value={courseDetails.beforeCourse}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Before Course"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            After Course
          </label>
          <input
            type="text"
            name="afterCourse"
            value={courseDetails.afterCourse}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="After Course"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Explanation
          </label>
          <textarea
            name="explanation"
            value={courseDetails.explanation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg h-32"
            placeholder="Explanation"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Upload Infographic
          </label>
          <input
            type="file"
            name="infographic"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>

      <div className="mt-6">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Before Course</th>
              <th className="py-2 px-4 border-b">After Course</th>
              <th className="py-2 px-4 border-b">Explanation</th>
              <th className="py-2 px-4 border-b">Infographic</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseDetailsList.map((detail, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{detail.beforeCourse}</td>
                <td className="py-2 px-4 border-b">{detail.afterCourse}</td>
                <td className="py-2 px-4 border-b">{detail.explanation}</td>
                {/* <td className="py-2 px-4 border-b">
                  {detail.infographic ? (
                    <img
                      src={URL.createObjectURL(detail.infographic)}
                      alt="Infographic"
                      className="w-16 h-16"
                    />
                  ) : (
                    "N/A"
                  )}
                </td> */}
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(detail)}
                    className="mr-2 text-blue-500"
                  >
                    Edit
                  </button>
                  <button className="text-red-500">Delete</button>
                  <button className="ml-2 text-green-500">
                    Upload Infographic
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseSequence;
