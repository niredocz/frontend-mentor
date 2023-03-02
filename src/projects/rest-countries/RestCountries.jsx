import React, { useState } from "react";
import "./RestCountries.css";

const RestCountries = () => {
  // const api = "https://restcountries.com/v3.1/all";
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    isDarkMode === false ? setDarkMode(true) : setDarkMode(false);
  };

  return (
    <>
      <div className="bgRestCountries block bg-[#fafafa]">
        <div className="">
          <div className="p-5 border-gray-200 rounded bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl">Where In the World?</h1>

              <div className="darkModeWrapper">
                {isDarkMode === true ? (
                  <button
                    onClick={handleDarkMode}
                    className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 border border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <svg aria-hidden="true" data-toggle-icon="moon" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> Dark Mode
                  </button>
                ) : (
                  <button
                    onClick={handleDarkMode}
                    className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <svg aria-hidden="true" data-toggle-icon="sun" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> Light Mode
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="p-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              ullam architecto perspiciatis minima fugiat facere.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestCountries;
