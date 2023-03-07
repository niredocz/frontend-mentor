import React, { useEffect, useState } from "react";
import "./RestCountries.css";
import FlagCard from "./FlagCard";

const RestCountries = () => {
  const [dataCountry, setDataCountry] = useState([]);
  const [dataSearch, setDataSearch] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setDataSearch(value);
  };

  useEffect(() => {
    const getData = async () => {
      let searchValue = "";

      if (dataSearch !== "") {
        searchValue = `/name/${dataSearch}`;
      } else {
        searchValue = `/all`;
      }
      console.log(searchValue);

      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1${searchValue}`
        );
        const awaitRes = await response.json();
        const slicedCountry = awaitRes.slice(0, 50);
        setDataCountry(slicedCountry);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [dataSearch]);

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
                    <svg
                      aria-hidden="true"
                      data-toggle-icon="moon"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>{" "}
                    Dark Mode
                  </button>
                ) : (
                  <button
                    onClick={handleDarkMode}
                    className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <svg
                      aria-hidden="true"
                      data-toggle-icon="sun"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>{" "}
                    Light Mode
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-between mb-10">
              <div className="w-64">
                <input
                  type="text"
                  id="country-search"
                  onChange={handleSearch}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for a country..."
                  required
                />
              </div>
              <div className="w-80">
                <select
                  id="countries"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultValue disabled>
                    Filter by Region
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            {loading === false ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {dataCountry.map((res, i) => {
                  return (
                    <FlagCard
                      key={i}
                      src={res.flags.svg}
                      alt={res.flag}
                      countryName={res.name.official}
                      population={res.population}
                      region={res.region}
                      capital={res.capital}
                    />
                  );
                })}
              </div>
            ) : (
              <div
                role="status"
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-pulse">
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
                <div className="flagCard bg-white rounded-md shadow-md text-center">
                  <div className="flex items-center justify-center w-full h-[180px] xl:h-[220px] bg-gray-300 rounded-t sm:w-full dark:bg-gray-700">
                    <svg
                      className="w-12 h-[180px] xl:h-[220px] text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content p-6 px-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestCountries;
