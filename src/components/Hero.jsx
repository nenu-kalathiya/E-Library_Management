import React, { useState } from "react";
import Book1 from "../assets/books/book1.jpg";
import Book2 from "../assets/books/book2.jpg";
import Book3 from "../assets/books/book3.jpg";
import Book4 from "../assets/books/book4.jpg";
import Vector from "../assets/website/blue-pattern.png";

const ImageList = [
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
];

const Hero = () => {
    const [imageId, setImageId] = useState(Book1); // Default image
    const [title, setTitle] = useState(ImageList[0].title);
    const [author, setAuthor] = useState(ImageList[0].author); // New state for author
    const [description, setDescription] = useState(ImageList[0].description);

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    };

    return (
        <div
            className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
            style={bgImage}
        >
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Text content section */}
                    <div
                        data-aos-once="true"
                        className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                    >
                        <h1
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true"
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                        >
                            {title}
                            <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm">
                                By {author} {/* Display the author's name */}
                            </p>
                        </h1>
                        <p
                            data-aos="slide-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className="text-sm"
                        >
                            {description}
                        </p>
                    </div>
                    {/* Image section */}
                    <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                        <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                            <img
                                data-aos="zoom-in"
                                data-aos-once="true"
                                src={imageId}
                                alt="Book cover"
                                className="w-full h-full object-cover mx-auto" // Changed to object-cover and set width/height to full
                            />
                        </div>
                        <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                            {ImageList.map((item) => (
                                <img
                                    key={item.id}
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    src={item.img}
                                    onClick={() => {
                                        setImageId(item.img);
                                        setTitle(item.title);
                                        setAuthor(item.author); // Update the author state
                                        setDescription(item.description);
                                    }}
                                    alt={item.title}
                                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
