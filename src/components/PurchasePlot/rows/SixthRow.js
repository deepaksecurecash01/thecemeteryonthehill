import Element from "../Element";
import Historic from "./Historic";
import NewAshes from "./NewAshes";
import Sandstone from "./Sandstone";


export default function SixthRow({ data, AshesBed }) {
  const renderContent = () => {
    switch (AshesBed) {
      case "Sandstone Ashes Bed":
        return <Sandstone data={data} />;
      case "Rose Garden Ashes Bed":
        return <Sandstone data={data} />;
      case "New Ashes Bed":
        return <NewAshes data={data} />;
      case "Historic Ashes Bed":
        return <Historic data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col gap-6 w-[90vw] md:w-[60vw] lg:w-[90vw] xl:w-[80%]">
      <p className="text-primary text-center font-display text-4xl">
        {AshesBed}
      </p>
      <div className="flex lg:flex-col gap-6 w-full">{renderContent()}</div>
    </div>
  );
}
