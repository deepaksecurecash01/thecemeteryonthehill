import React from "react";
import { formatNumber } from "@/lib/helper";

const MiscFeesTable = ({ miscFees }) => {
  return (
    <>
      <div
        className="w-full hidden lg:table p-4 mb-4 border border-gray-300 bg-white rounded-lg shadow-sm"
        id="totalAdministrationFeeTable"
      >
        <thead>
          <tr className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary">
            <th className="py-2 text-start w-[70%]">Misc</th>
            <th className="text-center py-2 w-[30%]">Fee</th>
          </tr>
        </thead>
        <tbody>
          {miscFees.map((fee, index) => (
            <tr key={index} className="font-roboto text-tertiary">
              <td className="text-sm md:text-base py-2 md:py-3 text-start w-[70%]">
                {fee.name}
              </td>
              <td className="text-sm md:text-base py-2 md:py-3 text-center w-[30%]">
                $ {formatNumber(fee.fee)}
              </td>
            </tr>
          ))}
        </tbody>
      </div>
      <div className="lg:hidden">
        <h2 className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary py-2 text-start">
          Misc Fee
        </h2>
        <div className="flex flex-col py-4 shadow-sm  p-4 mb-4 border border-gray-300 bg-white rounded-lg ">
          {miscFees.map((fee, index) => (
            <div key={index} className="  mb-2">
              <span className="font-medium">{fee.name}&nbsp; : &nbsp;</span>
              <span className="text-primary font-display font-bold ">
                $ {formatNumber(fee.fee)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiscFeesTable;
