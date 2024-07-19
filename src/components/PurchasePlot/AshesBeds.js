"use client";

import SixthRow from "./rows/SixthRow";

;

const AshesBeds = ({ data, AshesBed }) => {

  return (
    <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
      <div className=" md:max-h-[1024px]  popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center my-36 md:py-24 lg:py-20">
        <SixthRow data={data} AshesBed={AshesBed} />
      </div>
    </div>
  );
};

export default AshesBeds;
