import React from "react";

const BookModal = ({ isOpen, onClose, book }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg mx-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          &times;
        </button>
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <img src={book.img} alt={book.title} className="w-full h-48 object-cover my-4 rounded" />
        <p className="text-gray-700">{book.description}</p>
      </div>
    </div>
  );
};

export default BookModal;
