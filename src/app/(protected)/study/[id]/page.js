"use client";

import useSWR from "swr";

import styles from "./study.module.css";
import Header from "@/components/Header";
import { fetcher } from "@/lib/helpers";

export default function Study({ params }) {
  const { id } = params;
  const { data: study } = useSWR(`/api/study?id=${id}`, fetcher);

  return (
    <>
      <Header />
      <div className={styles.studyContainer}>
        {study && <div>My Study Area: {study.name}</div>}
      </div>
    </>
  );
}
