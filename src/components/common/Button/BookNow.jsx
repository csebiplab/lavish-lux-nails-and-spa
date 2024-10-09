import React from "react";
import "./BookNow.css";
const BookNow = () => {
  return (
    <div>
      <button className="bg-secondary hover:bg-primary text-base font-semibold text-white py-[16px] px-[32px] flex items-center space-x-3 clip-path-custom">
        <span>Book Now</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="22"
          viewBox="0 0 34 22"
          fill="none"
        >
          <path
            d="M34 10.625C29.3056 10.625 25.5 15.382 25.5 21.25"
            stroke="white"
          />
          <path d="M0 10.625H34" stroke="white" />
          <path
            d="M25.5 0C25.5 5.868 29.3056 10.6249 34 10.625"
            stroke="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default BookNow;
