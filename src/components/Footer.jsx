import React from "react";
import Title from "./Title";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-sm py-6 px-4 md:px-8 mt-14">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

        {/* LEFT */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          <span>Built by</span>

          <a
            href="https://github.com/SujalBajracharya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-white hover:fill-orange-400 transition"
              viewBox="0 0 24 24"
            >
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.1 2.8.9.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.3-3.3 4.3 4.3 0 0 1 .1-3.3s1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C16.7 5.7 17.7 6 17.7 6a4.3 4.3 0 0 1 .1 3.3 4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.6-5.5 6 .4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
            </svg>
          </a>

          <a
            href="https://github.com/SujalBajracharya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-semibold"
          >
            SujalBajracharya
          </a>
        </div>

        {/* CENTER */}
        <div className="text-white text-base font-medium">
          <Title />
        </div>

        {/* RIGHT */}
        <div className="break-all">
          <a
            href="mailto:sujal.bajracharya55@gmail.com"
            className="text-blue-400 hover:underline"
          >
            sujal.bajracharya55@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;