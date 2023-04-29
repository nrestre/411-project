"use client";

import { useMemo } from "react";
import { useTable } from "react-table";

import styles from "./List.module.css";
import Table from "@/components/Table";
import Styles from "@/components/Styles";

export default function List({ locations }) {
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

  const data = useMemo(
    () =>
      locations.map((location) => ({
        name: location.name,
        distance: 0,
        noiseLevel: location.noise_level,
        crowdLevel: location.crowd_level,
      })),
    [locations]
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
