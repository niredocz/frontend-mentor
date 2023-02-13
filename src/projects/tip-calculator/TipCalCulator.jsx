import React from "react";
import "./TipCalculator.css";

const TipCalCulator = () => {
  return (
    <>
      <div className="App bgTipCalculator bg-[#c5e4e7]">
        <div className="container">
          <div className="card mx-auto">
            <div className="cardBody p-4">
              <div className="flex">
                <div className="form">
                  <div className="bill">
                    <h5>Bill</h5>
                  </div>
                  <div className="selectTip">
                    <h5>Select Tip %</h5>
                    <div className="flex">
                      <button className="w-1/3" type="button">
                        5%
                      </button>
                      <button type="button">10%</button>
                      <button type="button">15%</button>
                      <button type="button">25%</button>
                      <button type="button">50%</button>
                      <input type="text" placeholder="Custom" />
                    </div>
                  </div>
                </div>
                <div className="result">
                  <div className="wrap">
                    <h4>
                      Tip Amount <br /> <span>/ person</span>
                    </h4>
                    <span>$ 0.00</span>
                  </div>
                  <div className="wrap">
                    <h4>
                      Total <br /> <span>/ person</span>
                    </h4>
                    <span>$ 0.00</span>
                  </div>
                  <button className="btnReset" type="button">
                    RESET
                  </button>
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
