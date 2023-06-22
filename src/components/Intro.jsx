import React from "react";

function Intro() {
  return (
    <div className="pt-20 flex items-center justify-center flex-col text-center  pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-black">
        <a href="#test" className="uppercase">
          Björn Edlund
        </a>
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        UX/UI designer & React Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Multitalented and experienced designer and entrepreneur, with a
        dedication to quality in any undertaking. A solid track record of
        project management, sales (b2b & b2c), procurement and account
        management as well as many years of work with information, graphic,
        industrial and interior design. <br /> <br />A broad experience of the
        private as well as the public sector. Passionate about innovation and
        unorthodox problem solving, while promoting standards and accessibility.
        Combining strategical thinking and hands-on operations with the
        nitty-gritty to achieve delivery excellence.
      </p>
    </div>
  );
}
export default Intro;
