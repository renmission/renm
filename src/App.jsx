import React, { useEffect, useState } from "react";
import {
  Contact,
  Footer,
  Hero,
  Portfolio,
  Timeline,
} from "./components";
import Stack from "./components/Stack";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-800 dark:text-white">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Hero />
          <Portfolio />
          <Timeline />
          <Stack />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
