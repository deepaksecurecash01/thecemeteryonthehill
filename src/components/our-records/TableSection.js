"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setBiographyData } from "@/redux/slice";
import { useDispatch } from "react-redux";

export default function DataTablePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const res = await fetch("/api/person"); // Fetch data from your API
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setFilteredData(data);
        setPersons(data); // Set person data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPersons(); // Call the fetch function
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") {
      setFilteredData(persons);
    } else {
      const filtered = persons.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  };

  const handleNameClick = (item) => {
    router.push(`/biography/${item.Biography}`, {
      query: { data: encodeURIComponent(JSON.stringify(item)) },
    });
  };

  return (
    <div className="lg:shadow-xl rounded-xl overflow-hidden ">
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
        {isClient && !loading ? (
          <>
            <div className=" w-full table-fixed hidden xl:table">
              <thead className="bg-secondary/50 text-paragraph sticky top-0 backdrop-blur-xl">
                <tr>
                  <th className="py-2 text-center font-normal">LAST NAME</th>
                  <th className="py-2 text-center font-normal">GIVEN NAME</th>
                  <th className="py-2 text-center font-normal">MAIDEN NAME</th>
                  <th className="py-2 text-center font-normal">BIRTH DATE</th>
                  <th className="py-2 text-center font-normal">DEATH DATE</th>
                  <th className="py-2 text-center font-normal">
                    INTERMENT TYPE
                  </th>
                  <th className="py-2 text-center font-normal">PLOT NO.</th>
                  <th className="py-2 text-center font-normal">BIOGRAPHY</th>
                </tr>
              </thead>
              <tbody>
                {filteredData
                  .sort((a, b) => a.LastName.localeCompare(b.LastName)) // Sort by LastName
                  .map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-3 text-center ">{item.LastName}</td>
                        <td className="py-3 text-center ">{item.FirstName}</td>
                        <td className="py-3 text-center ">
                          {item.MaidenName ? (
                            item.MaidenName
                          ) : (
                            <span className="text-paragraph/50">
                              Not Applicable
                            </span>
                          )}
                        </td>
                        <td className="py-3 text-center ">
                          {item.BirthDate ? (
                            item.BirthDate
                          ) : (
                            <span className="text-paragraph/50">
                              Not Available
                            </span>
                          )}
                        </td>
                        <td className="py-3 text-center ">
                          {item.DeathDate ? (
                            item.DeathDate
                          ) : (
                            <span className="text-paragraph/50">
                              Not Available
                            </span>
                          )}
                        </td>

                        <td className="py-3 text-center ">{item.Internment}</td>
                        <td className="py-3 text-center ">
                          {item.InternmentNumber}
                        </td>
                        <td className="py-3 flex justify-center items-center">
                          <button
                            type="button"
                            onClick={() => handleNameClick(item)}
                            className={`bg-primary text-white rounded-lg border-2 cursor-pointer border-primary px-6 flex justify-center items-center  ${
                              !item.ShowBiography && "hidden"
                            }`}
                          >
                            See More
                          </button>
                          {!item.ShowBiography && "Coming Soon"}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </div>
            <div className="flex flex-col py-4 shadow-xl xl:hidden">
              {filteredData
                .sort((a, b) => a.LastName.localeCompare(b.LastName)) // Sort by LastName
                .map((item, index) => (
                  <div
                    key={index}
                    className="p-4 mb-4 border border-gray-300 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex mb-2">
                      <span className="">LAST NAME:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        <button onClick={() => handleNameClick(item)}>
                          {item.LastName}
                        </button>
                      </span>
                    </div>
                    <div className="flex mb-2">
                      <span className="">GIVEN NAME:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        <button onClick={() => handleNameClick(item)}>
                          {item.FirstName}
                        </button>
                      </span>
                    </div>
                    <div className="flex mb-2">
                      <span className="">MAIDEN NAME:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.MaidenName ? (
                          item.MaidenName
                        ) : (
                          <span className="text-paragraph/50">
                            Not Applicable
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex mb-2">
                      <span className="">BIRTH DATE:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.BirthDate ? (
                          item.BirthDate
                        ) : (
                          <span className="text-paragraph/50">
                            Not Available
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex mb-2">
                      <span className="">DEATH DATE:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.DeathDate ? (
                          item.DeathDate
                        ) : (
                          <span className="text-paragraph/50">
                            Not Available
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex mb-2">
                      <span className="">INTERMENT TYPE:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.Internment}
                      </span>
                    </div>
                    <div className="flex mb-2">
                      <span className="">PLOT NO.:&nbsp;</span>
                      <span className="text-primary font-display font-bold ">
                        {item.InternmentNumber}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="">BIOGRAPHY:&nbsp;</span>
                      <span className="flex justify-center items-center">
                        <button
                          type="button"
                          onClick={() => handleNameClick(item)}
                          className={`bg-primary text-white   rounded-lg border-2 cursor-pointer border-primary px-6 flex justify-center items-center  ${
                            !item.BiographyData && "hidden"
                          }`}
                        >
                          See More
                        </button>
                        {!item.BiographyData && "Coming Soon"}{" "}
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
