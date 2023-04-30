"use client";

import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./study.module.css";
import Header from "@/components/Header";
import { fetcher } from "@/lib/helpers";

export default function Study({ params }) {
  const { id } = params;
  const { data: study, mutate } = useSWR(`/api/study?id=${id}`, fetcher);

  const handleSubmit = async (noiseLevel, crowdLevel) => {
    const body = {
      noiseLevel,
      crowdLevel,
    };
    const data = await fetch(`/api/study?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await data.json();
    if (res.error) {
      toast.error(res.error);
      return;
    }
    toast.success("Successfully submitted!");
    mutate({
      ...study,
      noise_level: res.noise_level,
      crowd_level: res.crowd_level,
    });
  };

  return (
    <>
      <Header />
      <div className={styles.studyContainer}>
        {study && <div>My Study Area: {study.name}</div>}
        {/* TODO: create form */}
        <button onClick={() => handleSubmit(3, 3)}>Submit</button>
        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
}
