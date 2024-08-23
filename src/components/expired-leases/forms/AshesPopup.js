const AshesPopup = ({
  setShowPopup,
  ashesReturned,
  setAshesReturned,
  ashesReturnAddress,
  setAshesReturnAddress,
}) => {
  const handleClosePopup = () => {
    setShowPopup(false);
    setAshesReturned(null);
  };

  const handleConfirmAcceptance = async () => {
      setShowPopup(false);
      console.log(ashesReturnAddress)
  };

  return (
    <div className="absolute inset-0 top-0 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-full flex flex-col items-center justify-center gap-4">
        <div className="flex justify-around items-start px-6 text-lg w-full">
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="ashes-returned"
              name="ashes-status"
              value="returned"
              checked={ashesReturned === true}
              onChange={() => setAshesReturned(true)}
            />
            <label
              htmlFor="ashes-returned"
              className="ml-2 cursor-pointer text-base xxs:text-[0.95rem] md:text-lg font-display font-medium text-primary"
            >
              Ashes Returned
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="ashes-not-returned"
              name="ashes-status"
              value="not-returned"
              checked={ashesReturned === false}
              onChange={() => setAshesReturned(false)}
            />
            <label
              htmlFor="ashes-not-returned"
              className="ml-2 cursor-pointer text-base xxs:text-[0.95rem] md:text-lg font-display font-medium text-primary"
            >
              Not Returned
            </label>
          </div>
        </div>

        <div className="w-full">
          {ashesReturned === null && (
            <p className="w-full px-4 py-2.5 text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary placeholder-primary bg-secondary/25 rounded-lg border-transparent">
              Select any one from the above options.
            </p>
          )}
          {ashesReturned === false && (
            <input
              disabled
              placeholder="Ashes spread permanently at the Cemetery."
              className="w-full px-4 py-2.5 text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary placeholder-primary bg-secondary/25 rounded-lg border-transparent focus:border-blueGray-500 focus:outline-none "
            />
          )}
          {ashesReturned === true && (
            <input
              placeholder="Enter Return Address"
              className="w-full px-4 py-2.5 text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary placeholder-primary bg-secondary/25 rounded-lg border-transparent focus:outline-none shadow-outline ring-2 ring-offset-current ring-offset-2 ring-primary"
              value={ashesReturnAddress}
              onChange={(e) => setAshesReturnAddress(e.target.value)}
            />
          )}
        </div>

        <div className="flex justify-end items-center w-full">
          <button
            onClick={handleConfirmAcceptance}
            className="text-white bg-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-2 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AshesPopup;
