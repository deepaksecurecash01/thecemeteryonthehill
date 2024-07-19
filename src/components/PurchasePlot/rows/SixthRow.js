import Element from "../Element";
import RoseGarden from "../RoseGarden";
import Historic from "./Historic";
import NewAshes from "./NewAshes";
import Sandstone from "./Sandstone";

export default function SixthRow({ data, AshesBed }) {
  const renderContent = () => {
    switch (AshesBed) {
      case "Sandstone Ashes Bed":
        return <Sandstone data={data.SandStoneAshesBed} />;
      case "Rose Garden Ashes Bed":
        return <RoseGarden data={data} />;
      case "New Ashes Bed":
        return <NewAshes data={data.NewAshesBed} />;
      case "Historic Ashes Bed":
        return <Historic data={data.HistoricAshesBed} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-white shadow-2xl rounded-lg p-6 flex flex-col justify-center items-start w-[90vw] gap-6  ${
        AshesBed === "Rose Garden Ashes Bed"
          ? "rounded-br-[80%] md:w-auto pb-10 pr-10"
          : " md:w-[60vw] lg:w-[90vw] xl:w-[80%]"
      }`}
    >
      <p className="text-primary text-center w-full font-display text-4xl">
        {AshesBed}
      </p>
      <div
        className={`flex lg:flex-col gap-6 w-full ${
          AshesBed === "Rose Garden Ashes Bed" && "w-[80%] "
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}
