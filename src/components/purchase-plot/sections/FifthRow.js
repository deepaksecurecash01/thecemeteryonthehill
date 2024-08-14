import Element from "../Element";
import AshesWall1 from "./AshesWall1";
import AshesWall2 from "./AshesWall2";
import FrontFenceBed from "./FrontFenceBed";

export default function FifthRow({ data, AshesWall }) {
  const renderContent = () => {
    switch (AshesWall) {
      case "Ashes Wall 1":
        return <AshesWall1 data={data.AshesWall1} AshesWall={AshesWall} />;
      case "Front Fence Bed":
        return <FrontFenceBed data={data.FrontFence} AshesWall={AshesWall} />;
      case "Ashes Wall 2":
        return <AshesWall2 data={data.AshesWall2} AshesWall={AshesWall} />;

      default:
        return null;
    }
  };
  return <>{renderContent()}</>;
}
