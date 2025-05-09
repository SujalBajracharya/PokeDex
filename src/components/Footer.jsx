import React from "react";
import Title from "./Title";

const Footer = () => {
  return (
    <>
      <footer className="w-screen bg-gray-900 text-gray-300 text-sm py-4 px-6 mt-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <div className="flex">
            Built by{" "}
            <a
              href="https://github.com/SujalBajracharya"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white hover:fill-orange-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.1 2.8.9.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.3-3.3 4.3 4.3 0 0 1 .1-3.3s1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C16.7 5.7 17.7 6 17.7 6a4.3 4.3 0 0 1 .1 3.3 4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.6-5.5 6 .4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
              </svg>
            </a>
            <span className="text-white font-semibold">
              <a
                href="https://github.com/SujalBajracharya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                SujalBajracharya
              </a>
            </span>
          </div>
          <div>
            <Title />
          </div>
          <div>
            <a href="mailto:sujal.bajracharya55@gmail.com">
              sujal.bajracharya55@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
