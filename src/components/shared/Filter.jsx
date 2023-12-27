const Filter = ({
  handleFilterByName,
  handleFilterByRegion,
  handleFilterByLanguage,
  selectName,
  selectRegion,
  selectLanguage,
  setSelectName,
  setSelectRegion,
  setSelectLanguage
}) => {

  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];

  const languages = [
    {
      name: "Arabic",
    },
    {
      name: "Bengali",
    },
    {
      name: "Chinese",
    },
    {
      name: "English",
    },
    {
      name: "French",
    },
    {
      name: "German",
    },
    {
      name: "Greek",
    },
    {
      name: "Hebrew",
    },
    {
      name: "Hindi",
    },
    {
      name: "Italian",
    },
    {
      name: "Korean",
    },
    {
      name: "Japanese",
    },
    {
      name: "Portuguese",
    },
    {
      name: "Russian",
    },
    {
      name: "Spanish",
    },
    {
      name: "Swedish",
    },
    {
      name: "Turkish",
    },
    {
      name: "Vietnamese",
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
      <form
        onSubmit={handleFilterByName}
        autoComplete="off"
        className="max-w-4xl md:flex-1 relative"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country"
          value={selectName}
          onChange={(e) => setSelectName(e.target.value)}
          required
          className="  placeholder-black w-full font-semibold shadow-sm rounded outline-none dark:text-violet-400 dark:placeholder-violet-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200 pl-10 pr-4 py-3"
        />
        <div className="absolute left-0 top-2.5 ml-2.5">
          <i className="bx bx-search-alt-2 text-2xl font-semibold dark:text-violet-400"></i>
        </div>
      </form>

      <form onSubmit={handleFilterByRegion}>
        <select
          name="filter-by-region"
          id="filter-by-region"
          className="w-52 py-3 px-4 outline-none font-semibold shadow rounded dark:text-violet-400 dark:bg-gray-800 dark:focus:bg-gray-700"
          value={selectRegion}
          onChange={(e) => setSelectRegion(e.target.value)}
        >
          <option value="allRegions">Filter by Region</option>
          {regions.map((region, index) => (
            <option key={index} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </form>

      <form onSubmit={handleFilterByLanguage}>
        <select
          name="filter-by-language"
          id="filter-by-language"
          className="w-52 py-3 px-4 outline-none font-semibold shadow rounded dark:text-violet-400 dark:bg-gray-800 dark:focus:bg-gray-700"
          value={selectLanguage}
          onChange={(e) => setSelectLanguage(e.target.value)}
        >
          {" "}
          <option value="allLanguages">Filter by Language</option>
          {languages.map((language, index) => (
            <option key={index} value={language.name}>
              {language.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Filter;
