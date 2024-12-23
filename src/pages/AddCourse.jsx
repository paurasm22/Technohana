import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    courseCode: "",
    technology: "",
    psName: "",
    availableFrom: "",
    menuName: "",
    labSpecOnsite: "",
    labSpecLocal: "",
    duration: "",
    courseSummary: "",
    chapterTopic: "",
    courseLevel: "",
    oldVersion: "",
    tocFile: null,
    vendor: "",
    standardCustom: "Standard",
    ram: "",
    hardDiscMemory: "",
    relatedExam: "",
    examCode: "",
    withoutExam: false,
    sme: "",
    typeOfData: "",
    beforeCourse: "",
    afterCourse: "",
    expiryDate: "",
    typeOfCourse: "",
    sources: "",
    noDCRequired: false,
    noCWRequired: false,
    launchedBy: "",
    baseCourse: "",
    koenigOriginalsCreator: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseData({
      ...courseData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCourseData({ ...courseData, [name]: files[0] });
  };

  const handleSave = () => {
    console.log(courseData);
    // Add save logic here
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">COURSE DETAIL</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Add Course</h3>
        <p className="mb-4 text-gray-600">
          Do not create custom course if only duration is different from an
          existing course. Course to be marked customized only if it is not a
          standard course and made for only specific customer. It has no
          relation to being a freelancer only course.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-gray-700">Course Name</label>
            <input
              type="text"
              name="courseName"
              value={courseData.courseName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Course Code</label>
            <input
              type="text"
              name="courseCode"
              value={courseData.courseCode}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Technology</label>
            <input
              type="text"
              name="technology"
              value={courseData.technology}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">PS Name</label>
            <input
              type="text"
              name="psName"
              value={courseData.psName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Available from</label>
            <input
              type="date"
              name="availableFrom"
              value={courseData.availableFrom}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Menu Name</label>
            <input
              type="text"
              name="menuName"
              value={courseData.menuName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">
              Lab Specification (Onsite)
            </label>
            <input
              type="text"
              name="labSpecOnsite"
              value={courseData.labSpecOnsite}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">
              Lab Specification (Local)
            </label>
            <input
              type="text"
              name="labSpecLocal"
              value={courseData.labSpecLocal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Standard Duration in Hours
            </label>
            <input
              type="text"
              name="duration"
              value={courseData.duration}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Course Summary</label>
            <textarea
              name="courseSummary"
              value={courseData.courseSummary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Chapter/Topic</label>
            <textarea
              name="chapterTopic"
              value={courseData.chapterTopic}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Course Level</label>
            <textarea
              name="courseLevel"
              value={courseData.courseLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Old Version</label>
            <input
              type="text"
              name="oldVersion"
              value={courseData.oldVersion}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">TOC File</label>
            <input
              type="file"
              name="tocFile"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Vendor</label>
            <input
              type="text"
              name="vendor"
              value={courseData.vendor}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Standard/Custom</label>
            <select
              name="standardCustom"
              value={courseData.standardCustom}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="Standard">Standard</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">RAM</label>
            <input
              type="text"
              name="ram"
              value={courseData.ram}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Hard Disc Memory</label>
            <input
              type="text"
              name="hardDiscMemory"
              value={courseData.hardDiscMemory}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Related Exam</label>
            <input
              type="text"
              name="relatedExam"
              value={courseData.relatedExam}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Related Exam</label>
            <input
              type="text"
              name="relatedExam"
              value={courseData.relatedExam}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Exam Code</label>
            <input
              type="text"
              name="examCode"
              value={courseData.examCode}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2 flex items-center mt-1">
            <label className="block text-gray-700 mr-2">Without Exam</label>
            <input
              type="checkbox"
              name="withoutExam"
              checked={courseData.withoutExam}
              onChange={handleInputChange}
              className="form-checkbox"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">SME</label>
            <input
              type="text"
              name="sme"
              value={courseData.sme}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Type of Data</label>
            <input
              type="text"
              name="typeOfData"
              value={courseData.typeOfData}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Before Course</label>
            <input
              type="text"
              name="beforeCourse"
              value={courseData.beforeCourse}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">After Course</label>
            <input
              type="text"
              name="afterCourse"
              value={courseData.afterCourse}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={courseData.expiryDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Type of Course</label>
            <input
              type="text"
              name="typeOfCourse"
              value={courseData.typeOfCourse}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Sources</label>
            <input
              type="text"
              name="sources"
              value={courseData.sources}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2 flex items-center mt-1">
            <label className="block text-gray-700 mr-2">No DC Required</label>
            <input
              type="checkbox"
              name="noDCRequired"
              checked={courseData.noDCRequired}
              onChange={handleInputChange}
              className="form-checkbox"
            />
          </div>
          <div className="col-span-2 flex items-center mt-1">
            <label className="block text-gray-700 mr-2">No CW Required</label>
            <input
              type="checkbox"
              name="noCWRequired"
              checked={courseData.noCWRequired}
              onChange={handleInputChange}
              className="form-checkbox"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Launched By</label>
            <input
              type="text"
              name="launchedBy"
              value={courseData.launchedBy}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Base Course</label>
            <input
              type="text"
              name="baseCourse"
              value={courseData.baseCourse}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">
              Koenig Originals Creator
            </label>
            <input
              type="text"
              name="koenigOriginalsCreator"
              value={courseData.koenigOriginalsCreator}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        </div>
        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
