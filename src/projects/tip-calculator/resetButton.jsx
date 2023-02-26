import React from "react";

const resetButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.click}
      className="btnReset w-full py-3 px-2 mt-auto rounded-md font-semibold text-2xl transition-all text-[#00474b] bg-[#0d686d] hover:bg-[#9fe8df] hover:text-[#0d686d]">
      RESET
    </button>
  );
};

export default resetButton;
