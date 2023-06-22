import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./Portfolioitem";

function Portfolio() {
  return (
    <div className="flex-col flex md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map(({ id, title, imgUrl, stack, link }) => (
          <PortfolioItem
            key={id}
            imgUrl={imgUrl}
            title={title}
            stack={stack}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
