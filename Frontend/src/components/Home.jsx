import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa6";
import axios from "axios";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState("");
  const [downloadError, setDownloadError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/convertFile",
        formData,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      setConvertedFile("File converted successfully!");
      setDownloadError("");
    } catch (error) {
      setDownloadError("Error converting file. Please try again.");
      setConvertedFile("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-300">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">
          Convert Word to PDF Online
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg shadow-md">
          Easily convert Word documents to PDF format online, without having to
          install any software.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <input
            type="file"
            accept=".doc, .docx"
            onChange={handleFileChange}
            className="hidden"
            id="FileInput"
          />
          <label
            htmlFor="FileInput"
            className="w-full flex items-center justify-center px-6 py-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg cursor-pointer border border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaFileWord className="text-4xl mr-4" />
            <span className="text-lg font-semibold">
              {selectedFile ? selectedFile.name : "Choose File"}
            </span>
          </label>

          <button
            onClick={handleSubmit}
            disabled={!selectedFile}
            className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg text-lg w-full sm:w-auto px-6 py-3 text-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg"
          >
            Convert File
          </button>

          {convertedFile && (
            <p className="mt-4 text-green-600 font-semibold">{convertedFile}</p>
          )}
          {downloadError && (
            <p className="mt-4 text-red-600 font-semibold">{downloadError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
