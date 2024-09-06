"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setBiographyData } from "@/redux/slice";
import { useDispatch } from "react-redux";

const dummyData = [
  {
    lastName: "Nixon",
    givenName: "Tiger",
    maidenName: "Smith",
    birthDate: "15/05/1962",
    deathDate: "10/07/2023",
    intermentType: "Cremation",
    plotNo: "A12",
    biography: true,
  },
  {
    lastName: "Snider",
    givenName: "Donna",
    maidenName: "Williams",
    birthDate: "28/02/1996",
    deathDate: "05/11/2080",
    intermentType: "Burial",
    plotNo: "B07",
  },
  {
    lastName: "Doe",
    givenName: "Jane",
    maidenName: "Johnson",
    birthDate: "22/08/1989",
    deathDate: "30/04/2085",
    intermentType: "Burial",
    plotNo: "C19",
    biography: true,
  },
  {
    lastName: "Smith",
    givenName: "John",
    maidenName: "Brown",
    birthDate: "17/01/1984",
    deathDate: "21/09/2080",
    intermentType: "Cremation",
    plotNo: "D22",
    biography: true,
  },
  {
    lastName: "Brown",
    givenName: "Emily",
    maidenName: "Davis",
    birthDate: "05/06/1995",
    deathDate: "13/12/2080",
    intermentType: "Burial",
    plotNo: "E08",
    biography: true,
  },
  {
    lastName: "Johnson",
    givenName: "Michael",
    maidenName: "Miller",
    birthDate: "09/04/1979",
    deathDate: "14/10/2080",
    intermentType: "Cremation",
    plotNo: "F14",
  },
  {
    lastName: "Wilson",
    givenName: "Sarah",
    maidenName: "Martinez",
    birthDate: "30/11/1992",
    deathDate: "02/03/2080",
    intermentType: "Burial",
    plotNo: "G11",
  },
  {
    lastName: "Lee",
    givenName: "Kevin",
    maidenName: "Garcia",
    birthDate: "18/09/1986",
    deathDate: "23/08/2080",
    intermentType: "Cremation",
    plotNo: "H09",
    biography: true,
  },
  {
    lastName: "Miller",
    givenName: "Megan",
    maidenName: "Martinez",
    birthDate: "21/03/1993",
    deathDate: "19/07/2080",
    intermentType: "Burial",
    plotNo: "I20",
  },
  {
    lastName: "Garcia",
    givenName: "David",
    maidenName: "Lopez",
    birthDate: "02/12/1988",
    deathDate: "25/01/2080",
    intermentType: "Cremation",
    plotNo: "J05",
    biography: true,
  },
  {
    lastName: "Martinez",
    givenName: "Olivia",
    maidenName: "Rodriguez",
    birthDate: "07/07/1991",
    deathDate: "11/05/2080",
    intermentType: "Burial",
    plotNo: "K13",
  },
];

export default function DataTablePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") {
      setFilteredData(dummyData);
    } else {
      const filtered = dummyData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  };

  const handleNameClick = (item) =>
  {
    console.log(item)
    const encodedName = encodeURIComponent(
      `${item.lastName}-${item.givenName}` //id pass - solution
    ); 
    router.push(`/biography/${encodedName}`, {
      query: { data: encodeURIComponent(JSON.stringify(item)) },
    });
  };

  return (
    <div className="lg:shadow-xl rounded-xl overflow-hidden w-[90vw] xl:w-[80vw] 3xl:w-[60vw] my-10">
      <div
        className="relative 6xl:min-h-[35vh] flex justify-center items-center"
        aria-labelledby="banner-heading"
      >
        <div
          className={`absolute bg-banner-bg-2 bg-no-repeat w-full h-full bg-cover bg-center -z-20`}
          role="img"
          aria-label="Decorative background image"
        />
        <div className="absolute bg-tertiary bg-opacity-60 w-full h-full -z-10" />
        <div className="grid place-items-center gap-6 py-12 px-4 md:px-8">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-white text-center font-display">
            THE CEMETERY RECORDS
          </h2>
          <div className="mb-3 w-[60%]">
            <div className="relative mb-4 flex w-full items-stretch">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="relative m-0 block flex-auto rounded-full border border-solid border-white bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition selection:text-white duration-200 ease-in-out placeholder-white focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <span
                className="input-group-text cursor-pointer flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-white"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[33rem] overflow-y-scroll bg-transparent xl:bg-white font-roboto">
        {isClient ? (
          <>
            <div className=" w-full table-fixed hidden xl:table">
              <thead className="bg-secondary/50 text-paragraph sticky top-0 backdrop-blur-xl">
                <tr>
                  <th className="py-2 text-center">LAST NAME</th>
                  <th className="py-2 text-center">GIVEN NAME</th>
                  <th className="py-2 text-center">MAIDEN NAME</th>
                  <th className="py-2 text-center">BIRTH DATE</th>
                  <th className="py-2 text-center">DEATH DATE</th>
                  <th className="py-2 text-center">INTERMENT TYPE</th>
                  <th className="py-2 text-center">PLOT NO.</th>
                  <th className="py-2 text-center">BIOGRAPHY</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 text-center ">{item.lastName}</td>
                    <td className="py-3 text-center ">{item.givenName}</td>
                    <td className="py-3 text-center ">{item.maidenName}</td>
                    <td className="py-3 text-center ">{item.birthDate}</td>
                    <td className="py-3 text-center ">{item.deathDate}</td>
                    <td className="py-3 text-center ">{item.intermentType}</td>
                    <td className="py-3 text-center ">{item.plotNo}</td>
                    <td className="py-3 flex justify-center items-center">
                      <button
                        type="button"
                        onClick={() => handleNameClick(item)}
                        className={`bg-primary text-white rounded-lg border-2 cursor-pointer border-primary px-6 flex justify-center items-center  ${
                          !item.biography && "hidden"
                        }`}
                      >
                        See More
                      </button>
                      {!item.biography && "Coming Soon"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
            <div className="flex flex-col py-4 shadow-xl xl:hidden">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 mb-4 border border-gray-300 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex mb-2">
                    <span className="">LAST NAME:&nbsp;</span>
                    <span className="text-primary font-display font-bold ">
                      <button onClick={() => handleNameClick(item)}>
                        {item.lastName}
                      </button>
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <span className="">GIVEN NAME:&nbsp;</span>
                    <span className="text-primary font-display font-bold ">
                      <button onClick={() => handleNameClick(item)}>
                        {item.givenName}
                      </button>
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <span className="">MAIDEN NAME:&nbsp;</span>
                    <span className="text-primary font-display font-bold ">
                      {item.maidenName}
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <span className="">BIRTH DATE:&nbsp;</span>
                    <span className="text-primary font-display font-bold ">
                      {item.birthDate}
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <span className="">DEATH DATE:&nbsp;</span>
                    <span className="text-primary font-display font-bold ">
                      {item.deathDate}
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <span className="">INTERMENT TYPE:&nbsp;</span>
                    <span className="text-primary font-display font-bold ">
                      {item.intermentType}
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <span className="">PLOT NO.:&nbsp;</span>
                    <span className="text-primary font-display font-bold ">
                      {item.plotNo}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="">BIOGRAPHY:&nbsp;</span>
                    <span className="flex justify-center items-center">
                      <button
                        type="button"
                        onClick={() => handleNameClick(item)}
                        className={`bg-primary text-white   rounded-lg border-2 cursor-pointer border-primary px-6 flex justify-center items-center  ${
                          !item.biography && "hidden"
                        }`}
                      >
                        See More
                      </button>
                      {!item.biography && "Coming Soon"}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            <div
              className="inline-block h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
