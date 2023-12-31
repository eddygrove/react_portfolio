import React from "react";

function PortfolioItem({ id, title, imgUrl, stack, link }) {
  return (
    <a
      key={id}
      href={link}
      target="_blank"
      rel="noopener norefferer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden "
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-contain cursor-pointer p-3"
      />

      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold dark:text-white border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;

// ********
