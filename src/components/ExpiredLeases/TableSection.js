"use client";
import { useState, useEffect } from "react";

const dummyData = [
  {
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    age: 61,
    startDate: "2011/04/25",
    salary: "$320,800",
  },
  {
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    age: 27,
    startDate: "2011/01/25",
    salary: "$112,000",
  },
  // Add more data entries below
  {
    name: "Jane Doe",
    position: "Software Engineer",
    office: "San Francisco",
    age: 34,
    startDate: "2015/07/20",
    salary: "$150,000",
  },
  {
    name: "John Smith",
    position: "Project Manager",
    office: "London",
    age: 40,
    startDate: "2010/05/15",
    salary: "$200,000",
  },
  {
    name: "Emily Brown",
    position: "Data Analyst",
    office: "Toronto",
    age: 29,
    startDate: "2018/02/10",
    salary: "$120,000",
  },
  {
    name: "Michael Johnson",
    position: "Marketing Director",
    office: "Chicago",
    age: 45,
    startDate: "2008/09/30",
    salary: "$250,000",
  },
  {
    name: "Sarah Wilson",
    position: "Graphic Designer",
    office: "Los Angeles",
    age: 32,
    startDate: "2013/11/18",
    salary: "$110,000",
  },
  {
    name: "Kevin Lee",
    position: "Sales Manager",
    office: "Singapore",
    age: 38,
    startDate: "2009/12/05",
    salary: "$180,000",
  },
  {
    name: "Megan Miller",
    position: "HR Specialist",
    office: "Sydney",
    age: 31,
    startDate: "2014/06/22",
    salary: "$130,000",
  },
  {
    name: "David Garcia",
    position: "Product Owner",
    office: "Madrid",
    age: 36,
    startDate: "2012/03/14",
    salary: "$160,000",
  },
  {
    name: "Olivia Martinez",
    position: "Financial Analyst",
    office: "Mexico City",
    age: 33,
    startDate: "2016/08/08",
    salary: "$140,000",
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
                        {item.name}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.position}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.office}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.age}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.startDate}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.salary}
                      </td>
                      <td className="py-3 text-center font-semibold">
                        {item.salary}
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
                        {item.name}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">GIVEN NAME:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.position}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">YEAR OF BIRTH:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.office}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">YEAR OF DEATH:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.age}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">INTERMENT TYPE:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.startDate}
                      </span>
                    </div>
                    <div className="flex  mb-2">
                      <span className="font-medium">PLOT NO.:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.salary}
                      </span>
                    </div>
                    <div className="flex ">
                      <span className="font-medium">
                        LEASE EXPIRATION:&nbsp;
                      </span>
                      <span className="text-primary font-display font-bold ">
                        {item.salary}
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
