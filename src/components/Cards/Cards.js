import React from "react";

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((character) => {
      let { id, name, image, location, status } = character;
      return (
        <li key={id} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={image} alt="" />
            <h3 className="mt-6 text-gray-900 text-lg font-medium">
              {name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Location</dt>
              <dd className="text-gray-500 text-sm font-medium">{location.name}</dd>
              <dt className="sr-only">Status</dt>
              <dd className="mt-3">
                  {(() => {
                      if(status === 'Dead') {
                        return (
                            <span className="px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                                {status}
                            </span>
                        );
                      } else if (status === "Alive") {
                        return (
                            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                {status}
                            </span>
                        );
                      } else {
                        return (
                            <span className="px-2 py-1 text-gray-800 text-xs font-medium bg-gray-100 rounded-full">
                                {status}
                            </span>
                        );
                      }
                  })()}
              </dd>
            </dl>
          </div>
        </li>
      );
    });
  } else {
    display = "Results Not Found";
  }
  return <>{display}</>;
};

export default Cards;
