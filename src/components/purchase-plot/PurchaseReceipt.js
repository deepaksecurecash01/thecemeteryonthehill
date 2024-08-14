const PurchaseReceipt = ({
  elementData,
  formattedTotalAmount,
  formatNumber,
  setscreenToShow,
  totalAmount,
}) => {
  const numbersInWords = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertAmountToWords(amount) {
    if (amount === 0) {
      return numbersInWords[0];
    }

    let words = "";

    if (amount >= 1000) {
      const thousands = Math.floor(amount / 1000);
      words += `${convertAmountToWords(thousands)} Thousand `;
      amount %= 1000;
    }

    if (amount >= 100) {
      const hundreds = Math.floor(amount / 100);
      words += `${numbersInWords[hundreds]} Hundred `;
      amount %= 100;
    }

    if (amount > 0) {
      if (words !== "") {
        words += "and ";
      }

      if (amount < 20) {
        words += numbersInWords[amount];
      } else {
        const tens = Math.floor(amount / 10);
        words += `${numbersInWords[tens + 18]} `;
        amount %= 10;

        if (amount > 0) {
          words += numbersInWords[amount];
        }
      }
    }

    return words;
  }
  const amountInWords = convertAmountToWords(totalAmount);
  return (
    <div className="w-[70%] md:w-[32rem] sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-center items-center  z-10">
      <div className="h-[80%] py-5 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-[1.5rem] md:text-[2.75rem] text-center font-bold text-primary font-display">
            PURCHASE A PLOT
          </h2>
          <p className="text-primary text-xs sm:text-sm md:text-base font-roboto text-center font-bold tracking-wide lg:text-lg">
            Thank you for choosing The Cemetery on the Hill as a final resting
            place. It is important to us to provide an amazing location to be
            remembered.
          </p>
        </div>
        <div>
          <h2 className="text-[1.25rem] md:text-[1.50rem] text-center font-bold text-primary font-display">
            Selected PLOT:
            <span className=" font-roboto uppercase">
              &nbsp;{elementData[0]?.Plot_number}
            </span>
          </h2>
        </div>
        <div
          className="col-span-2 md:col-span-2"
          style={{ gridColumn: "span 4 / span 2" }}
        >
          <table className="w-full" id="voucherTable">
            <thead>
              <tr className="font-bold font-display text-primary text-sm md:text-base lg:text-lg border-primary border-t-2 border-b-2">
                <th className="w-3/4 py-2 text-start">Breakdown</th>
                <th className=" w-1/4 text-start py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Ashes Plot B-1",
                  amount: formatNumber(elementData[0]?.prices?.plot_Price),
                },
                {
                  name: "Internment Rights (100 Years)",
                  amount: formatNumber(
                    elementData[0]?.prices?.Internment_Rights_100_Years
                  ),
                },
                {
                  name: "Preparation for initial Interments",
                  amount: formatNumber(
                    elementData[0]?.prices?.Preparation_for_initial_Interments
                  ),
                },
                {
                  name: "Ongoing maintenance Fee ($50 per year)",
                  amount: formatNumber(
                    elementData[0]?.prices?.Ongoing_maintenance_Fee_per_year
                  ),
                },
                {
                  name: "Plaque",
                  amount: formatNumber(elementData[0]?.prices?.Plaque),
                },
              ].map((fee, index) => (
                <tr key={index} className="font-roboto text-tertiary">
                  <td className="text-sm md:text-base py-2 md:py-3 w-3/4 text-start">
                    {fee.name}
                  </td>
                  <td className="text-sm md:text-base py-2 md:py-3 w-1/4 text-start">
                    ${fee.amount}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className=" font-bold font-display text-sm md:text-base lg:text-lg text-primary border-primary border-t-2 border-b-2">
                <td className="w-3/4 text-start py-2">Total</td>
                <td className="w-1/4 text-start py-2">
                  ${formattedTotalAmount}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-primary text-xs sm:text-sm font-roboto text-center font-bold tracking-wide">
          In Words: {amountInWords} Dollars Only
        </p>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="text-primary font-display uppercase z-20 rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg"
            onClick={() => setscreenToShow("detailedform")}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseReceipt;
