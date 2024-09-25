import React, { useState } from "react";
import Book1 from "../assets/books/book1.jpg";
import Book2 from "../assets/books/book2.jpg";
import Book3 from "../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";
import SubscriptionModal from "./SubscriptionModal";

const ServicesData = [
    {
        id: 1,
        img: Book1,
        title: "Life'S Amazing Secrets",
        author: "Gaur Gopal Das",
        description:
            "It explores the key principles of success and happiness, using personal anecdotes and spiritual insights to guide readers towards their goals.",
    },
    {
        id: 2,
        img: Book2,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        description:
            "Think and Grow Rich is a book written by Napoleon Hill and Rosa Lee Beeland released in 1937 and promoted as a personal development and self-improvement book.",
    },
    {
        id: 3,
        img: Book3,
        title: "The Power of a Positive Attitude",
        author: "Roger Fritz",
        description:
            "Attitude affects every facet of our lives. Roger Fritz has devoted his career to helping people overcome obstacles and achieve their goals by changing their outlook on life.",
    },
];

const Services = () => {
  const [isSubscriptionOpen, setSubscriptionOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleReadBook = (book) => {
    setSelectedBook(book);
    setSubscriptionOpen(true);
  };

  const handleCloseSubscription = () => {
    setSubscriptionOpen(false);
    setSelectedBook(null);
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleReadBook(service)}
                  >
                    Read This Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Modal for subscription requirement */}
      <SubscriptionModal isOpen={isSubscriptionOpen} onClose={handleCloseSubscription} />
    </>
  );
};

export default Services;
