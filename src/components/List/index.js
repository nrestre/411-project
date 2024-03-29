"use client";

import { useMemo } from "react";

import styles from "./List.module.css";
import Styles from "./styles";
import Table from "@/components/Table";
import { HaversineDistanceInMiles } from "@/lib/helpers";

export default function List({ locations, pos, changeHighlight }) {
  const columns = useMemo(
    () => [
      {
        Header: "Location",
        accessor: "name",
      },
      {
        Header: "Distance (mi)",
        accessor: "distance",
      },
      {
        Header: "Noise / 5",
        accessor: "noiseLevel",
      },
      {
        Header: "Crowd / 5",
        accessor: "crowdLevel",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      locations?.map((location) => {
        const distance = HaversineDistanceInMiles(
          pos?.lat,
          pos?.lng,
          location.lat,
          location.long
        );
        return {
          id: location.id,
          name: location.name,
          distance: distance ? distance : "...",
          noiseLevel: +location.noise_level.toFixed(1),
          crowdLevel: +location.crowd_level.toFixed(1),
        };
      }),
    [locations, pos]
  );

  return (
    <div className={styles.listContainer}>
      <h1>Study Location List</h1>
      <Styles>
        <Table columns={columns} data={data} onHover={changeHighlight} />
      </Styles>
    </div>
  );
}
