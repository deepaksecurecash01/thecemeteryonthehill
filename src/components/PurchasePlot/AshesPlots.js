"use client";
import FifthRow from "./rows/FifthRow";



const AshesPlots = ({data, AshesWall}) => {


  return (
    <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
      <div className=" md:max-h-[1024px] my-auto popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center py-28 md:py-24 lg:py-20">
       
              <FifthRow data={data} AshesWall={AshesWall} />
        </div>
    </div>
  );
};

export default AshesPlots;
