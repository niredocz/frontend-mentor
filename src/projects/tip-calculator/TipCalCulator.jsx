import React, { useState } from "react";
import "./TipCalculator.css";
import ResetButton from "./resetButton";

const TipCalCulator = () => {
  const [billValue, setBillValue] = useState(0.0);
  const [customBillValue, setCustomBillValue] = useState(null);
  const [peopleValue, setPeopleValue] = useState(1);
  const [isRadioChecked, setIsRadioChecked] = useState(false);

  function handleRadioChange() {
    setIsRadioChecked(true);
  }
  
  const handleBillChange = (e) => {
    setBillValue(e.target.value);
  };
  
  const handleCustomBillChange = (e) => {
    setCustomBillValue(e.target.value);
  };
  
  const handlePeopleChange = (e) => {
    if (e.target.value != 0) {
      setPeopleValue(e.target.value);
    } else {
      setPeopleValue(1);
    }
  };
  
  const countTipAmount = () => {
    let a = (parseFloat(billValue) * 1) / parseFloat(peopleValue);
  
    if (customBillValue > 0) {
      a =
        (parseFloat(billValue) * (customBillValue / 100)) /
        parseFloat(peopleValue);
    }
  
    let roundedNum = Math.round(a * 100) / 100;
  
    return roundedNum;
  };
  
  const countTotalPerPerson = () => {
    let a = parseFloat(billValue) / parseFloat(peopleValue);
    let b = customBillValue;
    let c = countTipAmount();
  
    if (b > 0) {
      a = (parseFloat(billValue) + c) / parseFloat(peopleValue);
    }
  
    let roundedNum = Math.round(a * 100) / 100;
  
    return roundedNum;
  };
  
  const tipAmount = countTipAmount();
  const totalPerPerson = countTotalPerPerson();
  
  const handleReset = () => {
    setBillValue(0.0);
    setCustomBillValue(null);
    setPeopleValue(1);
    document.getElementById("bill-input").value = "";
    document.getElementById("custom-input").value = "";
    document.getElementById("number-input").value = 1;
  };

  const tes = document.getElementsByClassName('peer')

  // if (tes === '')

  return (
    <>
      <div className="App bgTipCalculator bg-[#c5e4e7]">
        <div className="container">
          <div className="card mx-auto rounded-3xl">
            <div className="cardBody p-10">
              <div className="flex gap-10">
                <div className="form lg:w-1/2">
                  <div className="bill mb-5">
                    <h5 className="text-left font-semibold text-lg mb-2">
                      Bill
                    </h5>
                    <div className="formGroup">
                      <svg xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="#9EBBBD"
                          d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                        />
                      </svg>
                      <input
                        type="number"
                        id="bill-input"
                        onChange={handleBillChange}
                        className="bg-gray-50 border border-gray-300 text-green-800 text-right text-xl font-bold rounded-lg focus:ring-green-400 focus:border-green-400 block w-full py-3 pl-11 pr-4 cursor-pointer"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="selectTip mb-5">
                    <h5 className="text-left font-semibold text-lg mb-2">
                      Select Tip %
                    </h5>
                    <ul className="grid md:grid-cols-3 md:gap-3">
                      <li>
                        <input type="radio" id="tip-5" name="hosting" value="5" className="hidden peer" checked={isRadioChecked} onChange={handleRadioChange} required />
                        <label htmlFor="tip-5" className="block cursor-pointer w-full py-3 px-2 rounded-md font-semibold text-2xl text-white bg-[#00474b] hover:bg-[#9fe8df] hover:text-green-900 peer-checked:bg-[#9fe8df] peer-checked:text-green-900">                           
                          5%
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="tip-10" name="hosting" value="10" className="hidden peer" checked={isRadioChecked} onChange={handleRadioChange} required />
                        <label htmlFor="tip-10" className="block cursor-pointer w-full py-3 px-2 rounded-md font-semibold text-2xl text-white bg-[#00474b] hover:bg-[#9fe8df] hover:text-green-900 peer-checked:bg-[#9fe8df] peer-checked:text-green-900">                           
                          10%
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="tip-15" name="hosting" value="15" className="hidden peer" checked={isRadioChecked} onChange={handleRadioChange} required />
                        <label htmlFor="tip-15" className="block cursor-pointer w-full py-3 px-2 rounded-md font-semibold text-2xl text-white bg-[#00474b] hover:bg-[#9fe8df] hover:text-green-900 peer-checked:bg-[#9fe8df] peer-checked:text-green-900">                           
                          15%
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="tip-25" name="hosting" value="25" className="hidden peer" checked={isRadioChecked} onChange={handleRadioChange} required />
                        <label htmlFor="tip-25" className="block cursor-pointer w-full py-3 px-2 rounded-md font-semibold text-2xl text-white bg-[#00474b] hover:bg-[#9fe8df] hover:text-green-900 peer-checked:bg-[#9fe8df] peer-checked:text-green-900">                           
                          25%
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="tip-50" name="hosting" value="50" className="hidden peer" checked={isRadioChecked} onChange={handleRadioChange} required />
                        <label htmlFor="tip-50" className="block cursor-pointer w-full py-3 px-2 rounded-md font-semibold text-2xl text-white bg-[#00474b] hover:bg-[#9fe8df] hover:text-green-900 peer-checked:bg-[#9fe8df] peer-checked:text-green-900">                           
                          50%
                        </label>
                      </li>
                      <li>
                        <input
                          type="number"
                          id="custom-input"
                          onChange={handleCustomBillChange}
                          disabled={isRadioChecked}
                          className="w-full h-full bg-gray-50 border border-gray-300 text-green-800 text-center text-xl font-bold rounded-lg focus:ring-green-400 focus:border-green-400 block p-1.5 inputCustom cursor-pointer"
                          placeholder="Custom"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="numberOfPeople mb-5">
                    <h5 className="text-left font-semibold text-lg mb-2">
                      Number of People
                    </h5>
                    <div className="formGroup">
                      <svg xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="#9EBBBD"
                          d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                        />
                      </svg>
                      <input
                        min={1}
                        type="number"
                        id="number-input"
                        value={peopleValue}
                        onChange={handlePeopleChange}
                        className="bg-gray-50 border border-gray-300 text-green-800 text-right text-xl font-bold rounded-lg focus:ring-green-400 focus:border-green-400 block w-full py-3 pl-11 pr-4 cursor-pointer"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <div className="result grid items-stretch lg:w-1/2 p-10 pt-14 bg-[#00474b] text-white rounded-2xl">
                  <div className="totalWrap">
                    <div className="wrap flex items-center justify-between mb-8">
                      <h5 className="text-left font-semibold text-base mb-0">
                        Tip Amount <br />
                        <span className=" text-gray-400">/ person</span>
                      </h5>
                      <span className=" text-6xl text-[#18c9ad]">
                        ${tipAmount}
                      </span>
                    </div>
                    <div className="wrap flex items-center justify-between">
                      <h5 className="text-left font-semibold text-base mb-0">
                        Total <br />
                        <span className=" text-gray-400">/ person</span>
                      </h5>
                      <span className=" text-6xl text-[#18c9ad]">
                        ${totalPerPerson}
                      </span>
                    </div>
                  </div>

                  <ResetButton click={handleReset}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipCalCulator;
