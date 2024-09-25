import React from "react";
import Book1 from "../assets/books/book1.jpg";
import Book2 from "../assets/books/book2.jpg";
import Book3 from "../assets/books/book3.jpg";
import Book4 from "../assets/books/book4.jpg";
import Book5 from "../assets/books/book5.jpg";
import Book6 from "../assets/books/book6.jpg";
import { FaStar } from "react-icons/fa";

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
            "Think and Grow Rich is a book written by Napoleon Hill and Rosa Lee Beeland released in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.",
    },
    {
        id: 3,
        img: Book3,
        title: "The Power of a Positive Attitude",
        author: "Roger Fritz",
        description:
            "Attitude affects every facet of our lives—from the way we handle stress to how we communicate at work. The way we view difficulties and setbacks can make the difference between success and failure. Roger Fritz has devoted his career to helping people overcome obstacles and achieve their goals by changing their outlook on life.",
    },
    {
        id: 4,
        img: Book4,
        title: "Learning How to Fly",
        author: "Dr. A.P.J. Abdul Kalam",
        description:
            "Life Lessons for the Youth by Dr. A.P.J. Abdul Kalam, India's former President and renowned scientist, is a book that shares life lessons for young people.",
    },
    {
        id: 5,
        img: Book5,
        title: "The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery",
        author: "Brianna Wiest",
        description:
            " In this book, Wiest addresses the internal obstacles we create that prevent us from achieving our goals. She provides practical advice on overcoming self-sabotage by understanding our behaviors and thoughts, empowering readers to harness their potential and achieve personal mastery.",
    },
    {
        id: 6,
        img: Book6,
        title: "Don't Believe Everything You Think",
        author: "Thomas E. Brown",
        description:
            "This book delves into the nature of our thoughts and how they can shape our emotions and behaviors. Brown offers insights into cognitive distortions and encourages readers to challenge negative thoughts, promoting healthier thinking patterns to improve mental well-being.",
    },    
];

const Services = ({ handleOrderPopup }) => {
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
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
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
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;