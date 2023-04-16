import React, { useEffect, useState } from "react";
import meImg from "/assets/me.jpeg";
import Socmed from "./Socmed";

const Hero = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center h-auto w-auto">
        <div className="grid items-center justify-items-center">
          <div className="grid items-center justify-items-center text-center mt-36 mb-16 md:mt-28 md:mb-12">
            <div className="flex flex-row-reverse mb-6">
              <div>
                <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="relative p-2 z-10 bg-slate-800 text-white dark:bg-slate-600 text-lg rounded-full"
                >
                  {theme === "dark" ? moon : sun}
                </button>
              </div>
              <img
                src={meImg}
                alt="Renato Mission"
                className="relative w-full h-56 rounded-full filter drop-shadow-xl ml-7"
              />
            </div>

            <h1 className="portfolio-h1 text-black dark:text-white">
              Renato Mission
            </h1>
            <p className="portfolio-title dark:text-white">
              Software Engineer & Web Developer
            </p>
            <p className="portfolio-p max-w-6xl mt-6 dark:text-white">
              Hello! I'm Renato, a developer based in Philippines. Proficient in
              React, NodeJS, TypeScript, MongoDB, and GraphQL.
            </p>
            <p className="portfolio-p dark:text-white">
              Feel free to get in touch with me. 👈
            </p>
            <Socmed />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
