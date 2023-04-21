"use client";

import React, { useState, useEffect } from "react";

export default function List() {
  const [data, setData] = useState([]);

  /*useEffect(() => {
        // Fetch data from the database
       fetchLocations()
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);*/

  return (
    <div>
      {/* Render the list using the data */}
      {data.map((item) => (
        <div key={item.id}>
          {/* Render list item */}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
