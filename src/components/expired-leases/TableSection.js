"use client";
import { useState, useEffect } from "react";

const dummyData = [
  {
    lastName: "Nixon",
    givenName: "Tiger",
    yearOfBirth: 1962,
    yearOfDeath: 2023,
    intermentType: "Cremation",
    plotNo: "A12",
    leaseExpiration: "2030/04/25",
  },
  {
    lastName: "Snider",
    givenName: "Donna",
    yearOfBirth: 1996,
    yearOfDeath: 2080,
    intermentType: "Burial",
    plotNo: "B07",
    leaseExpiration: "2041/01/25",
  },
  {
    lastName: "Doe",
    givenName: "Jane",
    yearOfBirth: 1989,
    yearOfDeath: 2085,
    intermentType: "Burial",
    plotNo: "C19",
    leaseExpiration: "2045/07/20",
  },
  {
    lastName: "Smith",
    givenName: "John",
    yearOfBirth: 1984,
    yearOfDeath: 2080,
    intermentType: "Cremation",
    plotNo: "D22",
    leaseExpiration: "2040/05/15",
  },
  {
    lastName: "Brown",
    givenName: "Emily",
    yearOfBirth: 1995,
    yearOfDeath: 2080,
    intermentType: "Burial",
    plotNo: "E08",
    leaseExpiration: "2048/02/10",
  },
  {
    lastName: "Johnson",
    givenName: "Michael",
    yearOfBirth: 1979,
    yearOfDeath: 2080,
    intermentType: "Cremation",
    plotNo: "F14",
    leaseExpiration: "2035/09/30",
  },
  {
    lastName: "Wilson",
    givenName: "Sarah",
    yearOfBirth: 1992,
    yearOfDeath: 2080,
    intermentType: "Burial",
    plotNo: "G11",
    leaseExpiration: "2044/11/18",
  },
  {
    lastName: "Lee",
    givenName: "Kevin",
    yearOfBirth: 1986,
    yearOfDeath: 2080,
    intermentType: "Cremation",
    plotNo: "H09",
    leaseExpiration: "2043/12/05",
  },
  {
    lastName: "Miller",
    givenName: "Megan",
    yearOfBirth: 1993,
    yearOfDeath: 2080,
    intermentType: "Burial",
    plotNo: "I20",
    leaseExpiration: "2045/06/22",
  },
  {
    lastName: "Garcia",
    givenName: "David",
    yearOfBirth: 1988,
    yearOfDeath: 2080,
    intermentType: "Cremation",
    plotNo: "J05",
    leaseExpiration: "2046/03/14",
  },
  {
    lastName: "Martinez",
    givenName: "Olivia",
    yearOfBirth: 1991,
    yearOfDeath: 2080,
    intermentType: "Burial",
    plotNo: "K13",
    leaseExpiration: "2049/08/08",
  },
];

export default function DataTablePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);
  const [isClient, setIsClient] = useState(false);

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

  return (
    <div className="flex justify-center items-center relative w-full overflow-hidden py-20">
      <div
        className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div className="lg:shadow-xl rounded-xl overflow-hidden w-[90vw] xl:w-[80vw] 3xl:w-[60vw]">
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

        <div className="h-[33rem] overflow-y-scroll bg-transparent lg:bg-white">
          {isClient ? (
            <>
              <div className=" w-full table-fixed hidden lg:table">
                <thead className="bg-secondary/50 text-paragraph sticky top-0 backdrop-blur-xl">
                  <tr>
                    <th className="py-2 text-center">LAST NAME</th>
                    <th className="py-2 text-center">GIVEN NAME</th>
                    <th className="py-2 text-center">YEAR OF BIRTH</th>
                    <th className="py-2 text-center">YEAR OF DEATH</th>
                    <th className="py-2 text-center">INTERMENT TYPE</th>
                    <th className="py-2 text-center">PLOT NO.</th>
                    <th className="py-2 text-center">LEASE EXPIRATION</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 text-center font-semibold">
                        {item.lastName}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.givenName}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.yearOfBirth}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.yearOfDeath}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.intermentType}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.plotNo}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.leaseExpiration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
              <div className="flex flex-col py-4 shadow-xl lg:hidden">
                {filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 mb-4 border border-gray-300 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex  mb-2">
                      <span className="font-medium">LAST NAME:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.lastName}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">GIVEN NAME:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.givenName}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">YEAR OF BIRTH:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.yearOfBirth}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">YEAR OF DEATH:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.yearOfDeath}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">INTERMENT TYPE:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.intermentType}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">PLOT NO.:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.plotNo}
                      </span>
                    </div>
                    <div className="flex ">
                      <span className="font-medium">
                        LEASE EXPIRATION:&nbsp;
                      </span>
                      <span className="text-primary font-display font-bold ">
                        {item.leaseExpiration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
