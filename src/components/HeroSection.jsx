import { FiSearch } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="relative w-full sm:w-[60vw] h-[20vh] flex justify-center items-center mx-auto px-2 sm:px-0">
      <form className="absolute flex justify-center items-center w-full sm:w-auto bg-white p-3 rounded-full shadow-md max-w-full">
        <label htmlFor="search" className="sr-only">Search for Assets</label>
        <input
          type="search"
          placeholder="Search for Assets.."
          id="search"
          name="search"
          className="w-full sm:w-[40vw] px-2 sm:px-5 py-2 sm:py-3 text-base sm:text-lg outline-none border-none bg-transparent placeholder-gray-500 text-gray-700 focus:ring-0"
        />
        <button type="submit" aria-label="Search" className="text-xl sm:text-3xl text-gray-400 hover:text-gray-700 transition-colors duration-300 ml-2 sm:ml-4">
          <FiSearch />
        </button>
      </form>
    </div>
  );
}

export default HeroSection;
