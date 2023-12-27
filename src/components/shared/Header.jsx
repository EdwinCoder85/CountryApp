import moon from './../../assets/sun.svg'
import sun from './../../assets/moon.svg'

const Header = ({ handleChangeTheme, theme }) => {

  return (
    <>
      <header className="bg-white dark:bg-gray-800 text-gray-800 shadow dark:text-violet-400 sticky top-0 left-0 w-full z-10 select-none">
        <nav className="container mx-auto p-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-400 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-violet-600 dark:via-purple-500 dark:to-indigo-400">Where in the world!</h1>
          </div>
          <div
            onClick={handleChangeTheme}
            className="right flex items-center cursor-pointer"
          >
            {theme === "light" ? (
              <>
                <i className="bx bxs-moon bx-md mr-1 text-blue-600 animate-bounce-slow bg-clip-text text-transparent bg-gradient-to-t from-blue-700 to-blue-500"></i><span className="font-semibold">Dark Mode</span>
              </>
            ) : (
              <>
                <i className="bx bxs-sun mr-1 bx-md duration-0 animate-spin-slow text-yellow-500"></i><span className="font-semibold">Light Mode</span>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
