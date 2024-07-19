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
              elementData={data.N[0]}
              plot_number={9}
              plot_number_2={10}
              valueCol={true}
              elementData2={data.N[1]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <div className="flex-grow">
            <Element
              elementData={data.N[2]}
              plot_number={9}
              plot_number_2={10}
              valueCol={true}
              elementData2={data.N[3]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <div className="flex-grow">
            <Element
              elementData={data.N[4]}
              plot_number={9}
              plot_number_2={10}
              valueCol={true}
              elementData2={data.N[5]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <div className="flex-grow mb-4">
            <Element
              elementData={data.N[6]}
              plot_number={9}
              plot_number_2={10}
              valueCol={true}
              elementData2={data.N[7]}
              colSpan2={true}
              valueRow={true}
            />
          </div>
          <Element elementData={data.N[8]} plot_number={9} />
          <Element elementData={data.N[9]} plot_number={10} />
          <Element elementData={data.N[10]} plot_number={11} />
        </div>
        <div className="lg:w-20 w-1/6 flex flex-col gap-1">
          <p className=" text-xl text-center text-primary font-roboto py-2">
            O
          </p>

          <Element elementData={data.O[0]} plot_number={1} />
          <Element elementData={data.O[1]} plot_number={2} />
          <Element elementData={data.O[2]} plot_number={3} />
          <Element elementData={data.O[3]} plot_number={4} />
          <Element elementData={data.O[4]} plot_number={5} />
          <Element elementData={data.O[5]} plot_number={6} />
          <Element elementData={data.O[6]} plot_number={7} />
          <Element elementData={data.O[7]} plot_number={8} />
          <Element elementData={data.O[8]} plot_number={9} />
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
          <Element elementData={data.P[0]} plot_number={1} />
          <Element elementData={data.P[1]} plot_number={2} />
          <Element elementData={data.P[2]} plot_number={3} />
          <Element elementData={data.P[3]} plot_number={4} />
          <Element elementData={data.P[4]} plot_number={5} />
          <Element elementData={data.P[5]} plot_number={6} />
          <Element elementData={data.P[6]} plot_number={7} />
          <Element elementData={data.P[7]} plot_number={8} />
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
