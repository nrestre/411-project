"use client";

import { useMemo } from "react";

import styles from "./List.module.css";
import Styles from "./styles";
import Table from "@/components/Table";
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