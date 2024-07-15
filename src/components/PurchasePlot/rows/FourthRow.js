import Element from "../Element";

export default function FirstRow({ data }) {
  return (
    <div className="">
      <div className="flex gap-1">
        <div className="lg:w-20 w-1/6 flex flex-col gap-1 xl:mr-10">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            N
          </p>

          <div className="flex-grow">
            <Element
              elementData={data[0]}
              valueCol={true}
              elementData2={data[1]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <div className="flex-grow">
            <Element
              elementData={data[2]}
              valueCol={true}
              elementData2={data[3]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <div className="flex-grow">
            <Element
              elementData={data[4]}
              valueCol={true}
              elementData2={data[5]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <div className="flex-grow mb-4">
            <Element
              elementData={data[6]}
              valueCol={true}
              elementData2={data[7]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <Element elementData={data[8]} />
          <Element elementData={data[9]} />
          <Element elementData={data[10]} />
        </div>
        <div className="lg:w-20 w-1/6 flex flex-col gap-1">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            O
          </p>

          <Element elementData={data[11]} />
          <Element elementData={data[12]} />
          <Element elementData={data[13]} />
          <Element elementData={data[14]} />
          <Element elementData={data[15]} />
          <Element elementData={data[16]} />
          <Element elementData={data[17]} />
          <Element elementData={data[18]} />
          <Element elementData={data[19]} />
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
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
        <div className="lg:w-20 w-1/6 flex flex-col gap-1">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            P
          </p>
          <Element elementData={data[20]} />
          <Element elementData={data[21]} />
          <Element elementData={data[22]} />
          <Element elementData={data[23]} />
          <Element elementData={data[20]} />
          <Element elementData={data[25]} />
          <Element elementData={data[26]} />
          <Element elementData={data[27]} />
          <Element elementData={data[28]} />
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div> <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          <div className="flex-grow"></div> <div className="flex-grow"></div>
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
