import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState();
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = () => {
      const url = `https://restcountries.com/v3.1/name/${name}`;

      axios
        .get(url)
        .then((res) => setCountry(res.data))
        .catch((err) => console.log(err));
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`
  }, [name]);

  return (
    <section className="p-8 md:py-0 max-w-7xl mx-auto select-none">
      {country?.map((item) => (
        <div
          key={item.population}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
        >
          <article>
            <img src={item.flags.svg} alt={item.name.common} />
          </article>

          <article>
            <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
              {item.name.official}
            </h1>
            <ul className="mt-4 flex flex-col item-start justify-start gap-2 text-slate-700 dark:text-gray-400">
              <li>Capital: {item.capital}</li>
              <li>Population: {item.population}</li>
              <li>Region: {item.region}</li>
              <li>Subregion: {item.subregion}</li>
            </ul>

            {item.borders && (
              <>
                <h3 className="text-gray-900 font-bold text-lg my-3 dark:text-white">Borders: </h3>
                <ul className="flex flex-wrap items-start justify-start gap-2">
                  {item.borders.map((border, index) => (
                    <li key={index} className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-violet-600 dark:text-white text-gray-700">{border}</li>
                  ))}
                </ul>
              </>
            )}
            <Link to="/" className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-violet-600 dark:hover:bg-violet-500 dark:text-white">&larr; Back</Link>
          </article>
        </div>
      ))}
    </section>
  );
};

export default SingleCountry;
