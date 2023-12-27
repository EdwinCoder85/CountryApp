import { Link } from "react-router-dom";

const Article = ({ flags, name, population, region, capital }) => {
  return (
    <>
      <Link to={`${name.common}`}>
        <article className="bg-white hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-md shadow-slate-900/50 dark:shadow-indigo-900 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl overflow-hidden">
          <img src={flags.svg} alt="" className="md:h-72 w-full object-cover" />
          <div className="p-6">
            <h2 className="font-bold text-xl text-gray-900 dark:text-violet-400 mb-2">
              {name.common}
            </h2>
            <ul className="flex flex-col items-start justify-start gap-2 dark:text-slate-200">
              <li><span className="font-medium">Population:</span> {population}</li>
              <li><span className="font-medium">Region:</span> {region}</li>
              <li><span className="font-medium">Capital:</span> {capital}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Article;
