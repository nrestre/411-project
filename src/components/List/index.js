"use client";

import { useMemo } from "react";
import { useTable } from "react-table";

import styles from "./List.module.css";
import Table from "@/components/Table";
import Styles from "@/components/Styles";
import { HaversineDistanceInMiles } from "@/lib/helpers";

export default function List({ locations, pos }) {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Distance",
        accessor: "distance",
      },
      {
        Header: "Noise Level",
        accessor: "noiseLevel",
      },
      {
        Header: "Crowd Level",
        accessor: "crowdLevel",
      },
    ],
    []
  );

  console.log(locations, pos);

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
          name: location.name,
          distance: distance ? distance : "...",
          noiseLevel: location.noise_level,
          crowdLevel: location.crowd_level,
        };
      }),
    [locations, pos]
  );

  return (
    <div className={styles.listContainer}>
      <h1>Study Location List</h1>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </div>
  );
}
