import React, { useEffect, useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const ITEMS_PER_PAGE = 3;

  const displayedData = items.slice(0, visible * ITEMS_PER_PAGE);

  useEffect(() => {
    setItems(portfolio);
  }, []);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedData.map((project, i) => (
            <PortfolioItem
              key={i}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
        {displayedData.length < items.length && (
          <button
            type="button"
            onClick={loadMore}
            className="text-center items-center mt-16 mx-auto px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 filter drop-shadow-lg transition-all hover:stroke-white hover:scale-105"
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default Portfolio;
