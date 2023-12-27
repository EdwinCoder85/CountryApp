import { Circles } from "react-loader-spinner";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import Filter from "./shared/Filter";
import Article from "./Article";

const Countries = () => {
  const [selectName, setSelectName] = useState("");
  const [selectLanguage, setSelectLanguage] = useState("allLanguages");
  const [selectRegion, setSelectRegion] = useState("allRegions");

  const url = "https://restcountries.com/v3.1/all";
  const urlName = `https://restcountries.com/v3.1/name/${selectName}`;
  const urlRegion = `https://restcountries.com/v3.1/region/${selectRegion}`;
  const urlLanguage = `https://restcountries.com/v3.1/lang/${selectLanguage}`;

  const [
    countries,
    getCountries,
    filterByName,
    filterByRegion,
    filterByLanguage,
  ] = useFetch(url, urlName, urlRegion, urlLanguage);

  useEffect(() => {
    document.title = `Showing All Countries`;
  }, []);

  useEffect(() => {
    if (selectLanguage === "allLanguages") {
      getCountries();
    } else {
      filterByLanguage(selectLanguage);
    }
  }, [selectLanguage]);

  useEffect(() => {
    if (selectRegion === "allRegions") {
      getCountries();
    } else {
      filterByRegion(selectRegion);
    }
  }, [selectRegion]);

  useEffect(() => {
    if (selectName !== "") {
      filterByName(selectName);
    } else {
      getCountries();
    }
  }, [selectName]);

  const handleFilterByName = (e) => {
    e.preventDefault();
    filterByName();
  };

  const handleFilterByLanguage = (e) => {
    e.preventDefault();
    filterByLanguage();
  };

  const handleFilterByRegion = (e) => {
    e.preventDefault();
    filterByRegion();
  };

  return (
    <>
      {!countries ? (
        <div className="flex items-center justify-center h-screen">
          <Circles
            height="100"
            width="100"
            color="#7D3C98"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <section className="container mx-auto p-8 select-none">
          <Filter
            handleFilterByName={handleFilterByName}
            handleFilterByRegion={handleFilterByRegion}
            handleFilterByLanguage={handleFilterByLanguage}
            selectName={selectName}
            selectRegion={selectRegion}
            selectLanguage={selectLanguage}
            setSelectName={setSelectName}
            setSelectRegion={setSelectRegion}
            setSelectLanguage={setSelectLanguage}
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {countries?.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Countries;
