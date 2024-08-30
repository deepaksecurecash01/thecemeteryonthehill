import React from 'react'
import { formatNumber } from "@/lib/helper";

const BurialLocationTable = ({
  ashesLocations,
  formattedTotalAmount,
  totalAmount,
}) => {
  return (
    <>
      <div
        className="w-full hidden lg:table p-4 border border-gray-300 bg-white rounded-lg shadow-sm"
        id="ashesLocationTable"
      >
        <thead>
          <tr className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary">
            <th className="py-2 text-start w-[40%]">Burial Locations</th>
            <th className="text-center py-2 w-[20%]">Location Fee</th>
            <th className="text-center py-2 w-[20%]">Administration Fee</th>
            <th className="text-center py-2 w-[20%]">All Inclusive Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-roboto text-tertiary">
            <td className="text-sm md:text-base py-2 md:py-3 text-start w-[40%]">
              Subject to Availability
            </td>
            <td className="text-sm md:text-base py-2 md:py-3 text-center w-[20%]">
              $ 16,000
            </td>
            <td className="text-sm md:text-base py-2 md:py-3 text-center w-[20%]">
              $ {formattedTotalAmount}
            </td>
            <td className="text-sm md:text-base py-2 md:py-3 text-center w-[20%]">
              $ {formatNumber((16000 + parseFloat(totalAmount)).toFixed(2))}
            </td>
          </tr>
        </tbody>
      </div>

      <div className="flex flex-col py-4  lg:hidden">
        <div className="p-4 mb-4 border border-gray-300 bg-white rounded-lg shadow-sm">
          <div className="  mb-2">
            <span className="font-medium">Burials Locations :&nbsp;</span>
            <span className="text-primary font-display font-bold ">
              Subject to Availability
            </span>
          </div>
          <div className="flex  mb-2">
            <span className="font-medium">Location Fee :&nbsp;</span>
            <span className="text-primary font-display font-bold ">
              $ 16,000
            </span>
          </div>
          <div className="flex  mb-2">
            <span className="font-medium">Administration Fee :&nbsp;</span>
            <span className="text-primary font-display font-bold ">
              $ {formattedTotalAmount}
            </span>
          </div>
          <div className="flex  mb-2">
            <span className="font-medium">All Inclusive Total :&nbsp;</span>
            <span className="text-primary font-display font-bold ">
              $ {formatNumber((16000 + parseFloat(totalAmount)).toFixed(2))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurialLocationTable