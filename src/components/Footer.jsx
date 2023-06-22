import React from "react";
import WeatherFetch from "./WeatherFetch";

function Footer() {
  return (
    <>
      <div className="py-5 text-center">
        {/* Social Icons */}
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()} Björn Edlund. All rights reserved.
        </p>
      </div>
      <div className="py-5 text-center text-sm text-orange-700">
        <WeatherFetch />
      </div>
    </>
  );
}

export default Footer;
