import React, { useState } from "react";
import Logo from "../assets/website/logo.png";
import { FaCaretDown } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    
];

const DropdownLinks = [
    {
        name: "Trending Books",
        link: "/#",
    },
    {
        name: "Best Selling",
        link: "/#",
    },
    {
        name: "Authors",
        link: "/#",
    },
];

const suggestions = [
    "The Great Gatsby",
    "1984",
    "To Kill a Mockingbird",
    "The Catcher in the Rye",
    "Pride and Prejudice",
    "The Lord of the Rings",
    "Harry Potter",
];



const Navbar = () => {
    // State to handle search input
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    };

    // Function to handle search submit
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searched for: ", searchQuery);
        setSearchQuery("");
        setFilteredSuggestions([]);
    };

    // Function to handle login/logout toggle
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div>
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div >
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="" className="w-10" />
                            Books
                        </a>
                    </div>
                    
                     {/* Search Bar with Dropdown */}
                     <div className="relative">
                        
                        <form onSubmit={handleSearch} className="flex items-center">
                            <input
                                type="text"
                                className="border border-gray-400 rounded-full px-4 py-2 focus:outline-none"
                                placeholder="Search books..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button
                                type="submit"
                                className="ml-2 bg-primary text-white py-1 px-4 rounded-full hover:scale-105 duration-200 flex items-center gap-2   "
                            >
                                Search
                                <MdOutlineSearch />
                            </button>
                        </form>

                        {/* Dropdown for search suggestions */}
                        {filteredSuggestions.length > 0 && (
                            <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                <ul className="list-none p-2">
                                    {filteredSuggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                            onClick={() => {
                                                setSearchQuery(suggestion);
                                                setFilteredSuggestions([]);
                                            }}
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <ul className="hidden sm:flex items-center gap-4">
                            {Menu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className="inline-bolck py-4 px-4 hover:text-primary duration-200">
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                            <li className="group relative cursor-pointer">
                                <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                                    Quick Links
                                    <span>
                                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                    </span>
                                </a>
                                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                                    <ul className="space-y-3">
                                        {DropdownLinks.map((data) => (
                                            <li key={data.name}>
                                                <a
                                                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                                    href={data.link}
                                                >
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        {/* Login and Signup Buttons */}
                        {isLoggedIn ? (
                            <button
                                onClick={handleLoginLogout}
                                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200"
                            >
                                Logout
                            </button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <a
                                    href="/login"
                                    className="border border-primary text-primary py-2 px-4 rounded-full hover:bg-primary hover:text-white transition duration-200"
                                >
                                    Login
                                </a>
                                <a
                                    href="/signup"
                                    className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/70 transition duration-200"
                                >
                                    Sign Up
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
