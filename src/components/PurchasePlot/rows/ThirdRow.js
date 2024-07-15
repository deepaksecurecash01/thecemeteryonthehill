import Element from "../Element";

export default function FirstRow({ data }) {
  return (
    <div className="">
      <div className="flex gap-1">
        <div className="lg:w-20 w-full flex flex-col gap-1 xl:mr-6">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            H
          </p>

          <Element elementData={data[0]} />
          <Element elementData={data[1]} />
          <Element elementData={data[2]} />
          <Element elementData={data[3]} />
          <Element elementData={data[4]} />
          <Element elementData={data[5]} />
          <Element elementData={data[6]} />
          <Element elementData={data[7]} />
          <Element elementData={data[8]} />
          <Element elementData={data[9]} />
          <Element elementData={data[10]} />
          <Element elementData={data[11]} />
          <Element elementData={data[12]} />
          <Element elementData={data[13]} />
          <Element elementData={data[14]} />
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            I
          </p>

          <Element elementData={data[15]} />
          <Element elementData={data[16]} />
          <Element elementData={data[17]} />
          <Element elementData={data[18]} />
          <Element elementData={data[19]} />
          <Element elementData={data[20]} />
          <Element elementData={data[21]} />
          <Element elementData={data[22]} />
          <Element elementData={data[23]} />
          <Element elementData={data[20]} />
          <Element elementData={data[25]} />
          <Element elementData={data[26]} />
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
          <p className=" text-xl text-center text-primary font-roboto py-2">
            J
          </p>

          <Element elementData={data[27]} />
          <Element elementData={data[28]} />
          <Element elementData={data[29]} />
          <Element elementData={data[30]} />
          <Element elementData={data[31]} />
          <Element elementData={data[32]} />
          <Element elementData={data[33]} />
          <Element elementData={data[34]} />
          <Element elementData={data[35]} />
          <Element elementData={data[36]} />
          <Element elementData={data[37]} />
          <Element elementData={data[38]} />
          <Element elementData={data[39]} />
          <Element elementData={data[40]} />
          <Element elementData={data[41]} />
          <div className="">
            <Element
              elementData={data[42]}
              elementData2={data[43]}
              valueRow={true}
            />
          </div>
          <div className="flex-grow mt-4">
            <Element
              elementData={data[44]}
              valueRow={true}
              elementData2={data[45]}
              colSpan2={true}
            />
          </div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            K
          </p>
          <Element elementData={data[46]} />
          <Element elementData={data[47]} />
          <Element elementData={data[48]} />
          <Element elementData={data[49]} />
          <Element elementData={data[50]} />
          <Element elementData={data[51]} />
          <Element elementData={data[52]} />
          <Element elementData={data[53]} />
          <Element elementData={data[54]} />
          <Element elementData={data[55]} />
          <Element elementData={data[56]} />
          <Element elementData={data[57]} />
          <Element elementData={data[58]} />
          <Element elementData={data[59]} />
          <Element elementData={data[60]} />
          <Element elementData={data[61]} />
          <Element elementData={data[62]} />
          <Element elementData={data[63]} />
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            L
          </p>

          <Element elementData={data[64]} />
          <Element elementData={data[65]} />
          <Element elementData={data[66]} />
          <Element elementData={data[67]} />
          <Element elementData={data[68]} />
          <Element elementData={data[69]} />
          <Element elementData={data[70]} />
          <Element elementData={data[71]} />
          <Element elementData={data[72]} />
          <Element elementData={data[73]} />
          <Element elementData={data[74]} />
          <Element elementData={data[75]} />
          <Element elementData={data[76]} />
          <Element elementData={data[77]} />
          <div className="flex-grow mt-4">
            <Element colSpan2={true} valueCol={true} />
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="lg:w-20 w-full flex flex-col gap-1 xl:ml-4">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            M
          </p>

          <Element elementData={data[80]} />
          <Element elementData={data[81]} />
          <Element elementData={data[82]} />
          <Element elementData={data[83]} />
          <Element elementData={data[84]} />
          <Element elementData={data[85]} />
          <Element elementData={data[86]} />
          <Element elementData={data[87]} />
          <Element elementData={data[88]} />
          <Element elementData={data[89]} />
          <Element elementData={data[90]} />
          <Element elementData={data[91]} />
          <Element elementData={data[92]} />
          <Element elementData={data[93]} />
          <Element elementData={data[94]} />
          <Element elementData={data[95]} />
          <Element elementData={data[96]} />
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}
