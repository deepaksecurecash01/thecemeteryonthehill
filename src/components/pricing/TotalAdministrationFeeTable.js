import React from "react";

const TotalAdministrationFeeTable = ({ fees, formattedTotalAmount }) => {
  const renderTableRows = () => (
    <>
      {fees.map((fee, index) => (
        <tr key={index} className="font-roboto text-tertiary">
          <td className="text-sm md:text-base py-2 md:py-3 text-start w-[70%]">
            {fee.name}
          </td>
          <td className="text-sm md:text-base py-2 md:py-3 text-center w-[30%]">
            $ {fee.amount}
          </td>
        </tr>
      ))}
    </>
  );

  const renderMobileView = () => (
    <div className="lg:hidden">
      <h2 className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary py-2 text-start">
        A breakdown of the &apos;Administration Fee&apos; is set out in the
        below:
      </h2>
      <div className="flex flex-col py-4 shadow-sm p-4 mb-4 border border-gray-300 bg-white rounded-lg">
        {fees.map((fee, index) => (
          <div className="mb-2" key={index}>
            <span className="font-medium">{fee.name}&nbsp; : &nbsp;</span>
            <span className="text-primary font-display font-bold">
              $ {fee.amount}
            </span>
          </div>
        ))}
        <div className="flex mb-2">
          <span className="font-medium">Total Administration Fee : &nbsp;</span>
          <span className="text-primary font-display font-bold">
            $ {formattedTotalAmount}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 border border-gray-300 bg-white rounded-lg shadow-sm">
      <table
        className="w-full hidden lg:table "
        id="totalAdministrationFeeTable"
      >
        <thead>
          <tr className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary">
            <th className="py-2 text-start w-[70%]">
              A breakdown of the &apos;Administration Fee&apos; is set out in
              the below:
            </th>
            <th className="text-center py-2 w-[30%]">Fee</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
        <tfoot>
          <tr className="font-bold font-display text-sm md:text-base lg:text-lg text-primary border-primary">
            <td className="text-start py-2 w-[70%]">
              Total Administration Fee
            </td>
            <td className="text-center py-2 w-[30%]">
              $ {formattedTotalAmount}
            </td>
          </tr>
        </tfoot>
      </table>
      {renderMobileView()}
    </div>
  );
};

export default TotalAdministrationFeeTable;
