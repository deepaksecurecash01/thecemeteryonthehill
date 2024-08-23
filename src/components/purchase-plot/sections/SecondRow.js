import { setAshesBed } from "@/redux/slice";
import Element from "../Element";
import { useDispatch } from "react-redux";
import Tooltip from "../../ui/Tooltip";

export default function FirstRow({ data, CemeteryData }) {
  const statusColors = {
    available: "bg-green-500 text-white border border-green-800",
    expired: "bg-orange-500 text-white border border-orange-800",
    assigned: "bg-gray-200 text-primary border border-gray-800",
  };

  // Determine the bed color based on statuses
  const getBedColorClass = (statuses) => {
    if (statuses.some((status) => status === "available")) {
      return statusColors.available;
    }
    if (statuses.some((status) => status === "expired")) {
      return statusColors.expired;
    }
    return statusColors.assigned;
  };

  const statusesRoseGarden =
    CemeteryData?.RoseGardenBed?.map((section) => section.Status) || [];

  const bedColorClassRoseGarden = getBedColorClass(statusesRoseGarden);

  console.log(statusesRoseGarden);

  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex gap-1">
        <div className="lg:w-20 w-full flex flex-col gap-1 xl:mr-2">
          <p className="text-xl text-center text-primary font-roboto py-2">A</p>
          <Element elementData={data.A[10]} plot_number={11} />
          <Element elementData={data.A[11]} plot_number={12} />
          <Element elementData={data.A[12]} plot_number={13} />
          <Element elementData={data.A[13]} plot_number={14} />
          <Element elementData={data.A[14]} plot_number={15} />
          <Element elementData={data.A[15]} plot_number={16} />
          <Element elementData={data.A[16]} plot_number={17} />
          <Element elementData={data.A[17]} plot_number={18} />
          <Element elementData={data.A[18]} plot_number={19} />
          <Element elementData={data.A[19]} plot_number={20} />
          <Element elementData={data.A[20]} plot_number={21} />
          <Element elementData={data.A[21]} plot_number={22} />
          <Element elementData={data.A[22]} plot_number={23} />
          <Element elementData={data.A[23]} plot_number={24} />
          <Element elementData={data.A[24]} plot_number={25} />
          <Element elementData={data.A[25]} plot_number={26} />
          <Element elementData={data.A[26]} plot_number={27} />
          <Element elementData={data.A[27]} plot_number={28} />

          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1">
          <p className="text-xl text-center text-primary font-roboto py-2">B</p>
          <Element elementData={data.B[10]} plot_number={11} />
          <Element elementData={data.B[11]} plot_number={12} />
          <Element elementData={data.B[12]} plot_number={13} />
          <Element elementData={data.B[13]} plot_number={14} />
          <Element elementData={data.B[14]} plot_number={15} />
          <Element elementData={data.B[15]} plot_number={16} />
          <Element elementData={data.B[16]} plot_number={17} />
          <Element elementData={data.B[17]} plot_number={18} />
          <Element elementData={data.B[18]} plot_number={19} />
          <Element elementData={data.B[19]} plot_number={20} />
          <Element elementData={data.B[20]} plot_number={21} />
          <Element elementData={data.B[21]} plot_number={22} />
          <Element elementData={data.B[22]} plot_number={23} />
          <Element elementData={data.B[23]} plot_number={24} />
          <Element elementData={data.B[24]} plot_number={25} />
          <Element elementData={data.B[25]} plot_number={26} />

          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1 xl:mr-2">
          <p className="text-xl text-center text-primary font-roboto py-2">C</p>
          <Element elementData={data.C[10]} plot_number={11} />
          <Element elementData={data.C[11]} plot_number={12} />
          <Element elementData={data.C[12]} plot_number={13} />
          <Element elementData={data.C[13]} plot_number={14} />
          <Element elementData={data.C[14]} plot_number={15} />
          <Element elementData={data.C[15]} plot_number={16} />
          <Element elementData={data.C[16]} plot_number={17} />
          <Element elementData={data.C[17]} plot_number={18} />
          <Element elementData={data.C[18]} plot_number={19} />
          <Element elementData={data.C[19]} plot_number={20} />
          <Element elementData={data.C[20]} plot_number={21} />
          <Element elementData={data.C[21]} plot_number={22} />
          <Element elementData={data.C[22]} plot_number={23} />
          <Element elementData={data.C[23]} plot_number={24} />
          <Element elementData={data.C[24]} plot_number={25} />

          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1">
          <p className="text-xl text-center text-primary font-roboto py-2">D</p>
          <Element elementData={data.D[10]} plot_number={11} />
          <Element elementData={data.D[11]} plot_number={12} />
          <Element elementData={data.D[12]} plot_number={13} />
          <Element elementData={data.D[13]} plot_number={14} />
          <Element elementData={data.D[14]} plot_number={15} />
          <Element elementData={data.D[15]} plot_number={16} />
          <Element elementData={data.D[16]} plot_number={17} />
          <Element elementData={data.D[17]} plot_number={18} />
          <Element elementData={data.D[18]} plot_number={19} />
          <Element elementData={data.D[19]} plot_number={20} />
          <Element elementData={data.D[20]} plot_number={21} />
          <Element elementData={data.D[21]} plot_number={22} />
          <Element elementData={data.D[22]} plot_number={23} />
          <Element elementData={data.D[23]} plot_number={24} />
          <Element elementData={data.D[24]} plot_number={25} />
          <Element elementData={data.D[25]} plot_number={26} />
          <Element elementData={data.D[26]} plot_number={27} />
          <Element elementData={data.D[27]} plot_number={28} />
          <Element elementData={data.D[28]} plot_number={29} />

          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1 xl:mr-2">
          <p className="text-xl text-center text-primary font-roboto py-2">E</p>
          <Element elementData={data.E[10]} plot_number={11} />
          <Element elementData={data.E[11]} plot_number={12} />
          <Element elementData={data.E[12]} plot_number={13} />
          <Element elementData={data.E[13]} plot_number={14} />
          <Element elementData={data.E[14]} plot_number={15} />
          <Element elementData={data.E[15]} plot_number={16} />
          <Element elementData={data.E[16]} plot_number={17} />
          <Element elementData={data.E[17]} plot_number={18} />
          <Element elementData={data.E[18]} plot_number={19} />
          <Element elementData={data.E[19]} plot_number={20} />
          <Element elementData={data.E[20]} plot_number={21} />
          <Element elementData={data.E[21]} plot_number={22} />
          <Element elementData={data.E[22]} plot_number={23} />
          <Element elementData={data.E[23]} plot_number={24} />
          <Element elementData={data.E[24]} plot_number={25} />
          <Element elementData={data.E[25]} plot_number={26} />
          <div className="flex-grow">
            <div className="h-full w-full">
              <Element
                elementData={data.E[26]}
                valueCol={true}
                elementData2={data.E[27]}
                colSpan2={true}
                plot_number={27}
                plot_number_2={28}
              />
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1 mt-12">
          <p className="text-xl text-center text-primary font-roboto py-2">F</p>
          <Element elementData={data.F[10]} plot_number={11} />
          <Element elementData={data.F[11]} plot_number={12} />
          <Element elementData={data.F[12]} plot_number={13} />
          <Element elementData={data.F[13]} plot_number={14} />
          <Element elementData={data.F[14]} plot_number={15} />
          <Element elementData={data.F[15]} plot_number={16} />
          <Element elementData={data.F[16]} plot_number={17} />
          <Element elementData={data.F[17]} plot_number={18} />
          <Element elementData={data.F[18]} plot_number={19} />
          <Element elementData={data.F[19]} plot_number={20} />
          <Element elementData={data.F[20]} plot_number={21} />
          <Element elementData={data.F[21]} plot_number={22} />
          <Element elementData={data.F[22]} plot_number={23} />
          <Element elementData={data.F[23]} plot_number={24} />
          <Element elementData={data.F[24]} plot_number={25} />
          <div className="flex-grow mt-4">
            <Element
              elementData={data.F[25]}
              valueCol={true}
              elementData2={data.F[26]}
              colSpan2={true}
              plot_number={26}
              plot_number_2={27}
            />
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1 mt-12">
          <p className="text-xl text-center text-primary font-roboto py-2">G</p>
          <div className="flex-grow">
            <Tooltip message={"Click to expand for more details"}>
              <div
                className={`px-1 rounded-tr-[80%] h-full w-full justify-center text-start pl-1 m-0 flex items-center cursor-pointer text-primary border border-primary text-sm md:text-base hover:bg-gray-100 hover:text-primary hover:border hover:border-primary ${bedColorClassRoseGarden}`}
                onClick={() => dispatch(setAshesBed("Rose Garden Ashes Bed"))}
              >
                Rose Garden
              </div>
            </Tooltip>
          </div>

          <Element elementData={data.G[2]} plot_number={3} />
          <Element elementData={data.G[3]} plot_number={4} />
          <Element elementData={data.G[4]} plot_number={5} />
          <Element elementData={data.G[5]} plot_number={6} />
          <Element elementData={data.G[6]} plot_number={7} />
          <Element elementData={data.G[7]} plot_number={8} />
          <Element elementData={data.G[8]} plot_number={9} />
          <Element elementData={data.G[9]} plot_number={10} />
          <Element elementData={data.G[10]} plot_number={11} />
          <Element elementData={data.G[11]} plot_number={12} />
          <Element elementData={data.G[12]} plot_number={13} />
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}
