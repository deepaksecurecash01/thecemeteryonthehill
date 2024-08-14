import Element from "../Element";

const renderElements = (elements, count) =>
  elements
    .slice(0, count)
    .map((elementData, index) => (
      <Element key={index} elementData={elementData} plot_number={index + 1} />
    ));

const createRows = (data, rowConfig) => {
  const labels = ["A", "B", "C", "D", "E", "F", "G"];
  return rowConfig.map((count, rowIndex) => (
    <div key={rowIndex} className="md:w-20 w-full flex flex-col gap-1">
      <p className="text-xl text-center text-primary font-roboto py-2">
        {labels[rowIndex]}
      </p>
      {renderElements(data[labels[rowIndex]].slice(0, count), count)}
      {Array.from({ length: 10 - count }).map((_, index) => (
        <div key={index} className="flex-grow"></div>
      ))}
    </div>
  ));
};

export default function FirstRow({ data }) {
  const rowConfig = [10, 10, 10, 10, 9, 7, 2]; // Specifies the number of columns per row

  return (
    <div>
      <div className="flex gap-1">{createRows(data, rowConfig)}</div>
    </div>
  );
}
