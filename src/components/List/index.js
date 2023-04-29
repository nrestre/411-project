import { useMemo } from "react";
import { useTable } from "react-table";

export default function List({ locations }) {
  const keys = Object.keys(locations[0])
  const columns = useMemo(
    () =>
      Object.keys(locations)
        .slice(1)
        .map((key) => ({
          Header: key,
          accessor: key,
        })),
    [locations]
  );

  const data = useMemo(
    () => locations.map((location) => Object.values(location).slice(1)),
    [locations]
  );

  return (
    <div>
      <h1>Study Location List</h1>
      {locations.map((location) => (
        <div key={location.id}>
          <p>{location.name}</p>
        </div>
      ))}
    </div>
  );
}
