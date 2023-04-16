import React from "react";
import socmed from "../data/socmed";
import Socmed from "./Socmed";

function Footer() {
  return (
    <div className="py-5 text-center">
      <Socmed />
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Renato Mission. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
