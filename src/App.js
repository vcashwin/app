import * as React from "react";
import { TbSun, TbMoonStars } from "react-icons/tb";
import WorkHistory from "./components/work-history";
import DisplayPicture from "./pfp.jpg";

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((dm) => !dm);
  };
  return (
    <div className="cursor-pointer mt-1 p-2 rounded-lg bg-[#F8F9FA] dark:bg-[#1F2225]">
      {isDarkMode ? (
        <TbSun className="w-6 h-6 stroke-yellow-500" onClick={handleClick} />
      ) : (
        <TbMoonStars className="w-6 h-6 stroke-sky-500" onClick={handleClick} />
      )}
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 font-sohne min-h-screen p-6 dark:bg-[#1A1B1E] dark:text-[#C1C2C5]">
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-4">
        <img
          src={DisplayPicture}
          className="mb-4 lg:mr-4 lg:mb-0 w-32 h-32 rounded-full object-cover"
          alt="Ashwin V C"
        />
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <div className="flex items-center font-extrabold text-3xl mb-4 justify-center lg:justify-start">
            <p className="mr-4">I am, Ashwin V C</p>
            <DarkModeButton />
          </div>
          <p className="mb-6">
            A software engineer at Microsoft, where I lead the development of
            modern web applications using React, Tailwind and other latest tech.
            I am an enthusiast about Tech and Finance, tinkering with my ideas
            whilst striving to achieve greatness in these fields.
          </p>
          <p className="">
            Currently building
            <span className="font-sohne-bold text-md ml-1">
              Assemble Growth Inc.
            </span>
          </p>
        </div>
      </div>
      <WorkHistory />
    </div>
  );
}

export default App;
