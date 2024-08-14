import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAshesBed, setAshesWall, setPlot } from "@/redux/slice";

export default function Element({
  plot_number,
  plot_number_2,
  elementData,
  elementData2,
  series,
  from,
  colSpan2 = false,
  rounded = false,
  valueRow = false,
  valueCol = false,
}) {
  const dispatch = useDispatch();
  const [isFocused, setFocus] = useState(false);

  const statusColors = {
    available: "bg-green-500 text-white border border-green-800",
    expired: "bg-orange-500 text-white border border-orange-800",
    assigned: "bg-gray-200 text-primary border border-gray-800",
  };

  const getStatusClass = (status) =>
    statusColors[status] || "bg-white text-black";
  const statusClass = elementData ? getStatusClass(elementData.Status) : "";

  const baseStyle = " rounded text-primary border border-primary w-full";
  const hoverStyle = isFocused
    ? "hover:bg-gray-100 hover:text-primary hover:border hover:border-primary"
    : "";

  const handleClick = () => {
    dispatch(setAshesWall("")); // Dispatch blank value when closing modal
    dispatch(setAshesBed("")); // Dispatch blank value when closing modal
    if (elementData) {
      if (
        elementData.Status === "available" ||
        elementData.Status === "expired"
      ) {
        dispatch(setPlot([elementData]));
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className={`${baseStyle} ${statusClass} ${
        elementData && elementData?.Status !== "assigned" && hoverStyle
      } ${
        elementData?.Status === "available" || elementData?.Status === "expired"
          ? "cursor-pointer"
          : "cursor-not-allowed	"
      } ${colSpan2 ? "h-full" : ""} ${
        rounded ? "rounded-tr-[80%]" : ""
      } flex justify-center items-center`}
    >
      {from && (
        <div className="border border-white py-6 m-0">
          <h1 className="font-bold text-white">{from}</h1>
          <p className="text-xs tracking-tighter text-white">{series}</p>
        </div>
      )}

      {plot_number && (
        <div
          className={`${
            valueCol ? "flex flex-col justify-around h-full py-0" : ""
          } ${
            valueRow ? "flex justify-around items-center w-full h-full" : ""
          } py-2 m-0`}
        >
          <p className="text-lg font-semibold text-center">{plot_number}</p>
          {elementData2 && (
            <p className="text-lg font-semibold text-center">{plot_number_2}</p>
          )}
        </div>
      )}
    </div>
  );
}
