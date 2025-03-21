import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import axios from "axios";

const Courses = () => {
  const [data, setData] = useState([]);

  const fetchBookData = async () => {
    try {
      const res = await axios.get("https://bookstoreapp-o0ql.onrender.com/api/v1/books");
      // console.log("Fetched Data:", res.data);

      if (Array.isArray(res.data)) {
        setData(res.data);
      } else {
        console.error("Error: API response is not an array");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-red-200 to-green-200 px-6 py-24">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          📘 Explore Our Courses 🚀
        </h1>
        <p className="text-white text-lg mt-3 max-w-3xl mx-auto">
          Browse through our collection of amazing books and courses, designed
          to enhance your knowledge and skills!
        </p>
      </div>

      {/* Courses Grid */}
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto">
          {data.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-white mt-10">
          📌 No courses available right now.
        </p>
      )}
    </div>
  );
};

export default Courses;
