import React from 'react'
import { formatNumber } from "@/lib/helper";

const AshesLocationTable = ({ashesLocations, formattedTotalAmount,totalAmount}) => {
  return (
    <>
      <h2 className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary py-2 text-start hidden lg:block">
        Location Fees below to be paid in addition to the &apos;Administration
        Fee&apos; as per above
      </h2>
      <div
        className="w-full hidden lg:table p-4 border border-gray-300 bg-white rounded-lg shadow-sm"
        id="ashesLocationTable"
      >
        <thead>
          <tr className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary">
            <th className="py-2 text-start w-[40%]">Ashes Locations</th>
            <th className="text-center py-2 w-[20%]">Location Fee</th>
            <th className="text-center py-2 w-[20%]">Administration Fee</th>
            <th className="text-center py-2 w-[20%]">All Inclusive Total</th>
          </tr>
        </thead>
        <tbody>
          {ashesLocations.map((location, index) => {
            const adminFee = location.adminFee
              ? location.adminFee
              : formattedTotalAmount;
            const allInclusiveTotal = location.adminFee
              ? location.fee
              : (location.fee + parseFloat(totalAmount)).toFixed(2);
            return (
              <tr key={index} className="font-roboto text-tertiary">
                <td className="text-sm md:text-base py-2 md:py-3 text-start w-[40%]">
                  {location.name}
                </td>
                <td className="text-sm md:text-base py-2 md:py-3 text-center w-[20%]">
                  $ {formatNumber(location.fee)}
                </td>
                <td className="text-sm md:text-base py-2 md:py-3 text-center w-[20%]">
                  {adminFee !== "N/A" ? `$ ${adminFee}` : "N/A"}
                </td>
                <td className="text-sm md:text-base py-2 md:py-3 text-center w-[20%]">
                  $ {formatNumber(allInclusiveTotal)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </div>

      <div className="flex flex-col py-4  lg:hidden">
        <h2 className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary py-2 text-start">
          Location Fees below to be paid in addition to the &apos;Administration
          Fee&apos; as per above
        </h2>
        {ashesLocations.map((location, index) => {
          const adminFee = location.adminFee
            ? location.adminFee
            : formattedTotalAmount;
          const allInclusiveTotal = location.adminFee
            ? location.fee
            : (location.fee + parseFloat(totalAmount)).toFixed(2);
          return (
            <div
              key={index}
              className="p-4 mb-4 border border-gray-300 bg-white rounded-lg shadow-sm"
            >
              <div className="  mb-2">
                <span className="font-medium">Ashes Locations :&nbsp;</span>
                <span className="text-primary font-display font-bold ">
                  {location.name}
                </span>
              </div>
              <div className="flex  mb-2">
                <span className="font-medium">Location Fee :&nbsp;</span>
                <span className="text-primary font-display font-bold ">
                  $ {location.fee}
                </span>
              </div>
              <div className="flex  mb-2">
                <span className="font-medium">Administration Fee :&nbsp;</span>
                <span className="text-primary font-display font-bold ">
                  {adminFee !== "N/A" ? `$ ${adminFee}` : "N/A"}
                </span>
              </div>
              <div className="flex  mb-2">
                <span className="font-medium">All Inclusive Total :&nbsp;</span>
                <span className="text-primary font-display font-bold ">
                  $ {formatNumber(allInclusiveTotal)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AshesLocationTable