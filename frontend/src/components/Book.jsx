import React from "react";

const Book = ({ book }) => {
  return (
    <div className="shadow-2xl rounded-lg p-5 flex flex-col items-center text-center sm:m-5 space-y-5 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={book.image}
        alt={book.title}
        className="w-56 h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-3 text-gray-800 flex gap-3 items-center tracking-tight">
        {book.title}
        {book.isPaid === false ? (
          <span className="text-sm text-gray-200 bg-blue-600 rounded-lg px-3 py-1 font-black uppercase">
            Free
          </span>
        ):(
                <span className="text-sm text-gray-200 bg-green-600 rounded-lg px-3 py-1 font-black uppercase">
                  Paid
                </span>
              )}
      </h2>
      <div className="flex mt-5 items-center justify-between w-full">
        <p className="font-semibold text-xl text-gray-600">{book.price}</p>
        <button className={`px-4 py-2 rounded-md transition cursor-pointer active:scale-90 ${
          book.isPaid ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-green-500 text-white hover:bg-green-600"
        }`}>
          {book.isPaid ? "Buy Now" : "Read Free"}
        </button>
      </div>
    </div>
  );
};

export default Book;
