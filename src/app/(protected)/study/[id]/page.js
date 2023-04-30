"use client";

import { useState } from "react";
import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Slider } from "@mui/material";
import Link from "next/link";

import styles from "./study.module.css";
import Header from "@/components/Header";
import { fetcher } from "@/lib/helpers";

export default function Study({ params }) {
  const { id } = params;
  const { data: study, mutate } = useSWR(`/api/study?id=${id}`, fetcher);
  const [noiseLevel, setNoiseLevel] = useState(3);
  const [crowdLevel, setCrowdLevel] = useState(3);

  const handleSubmit = async (noiseLevel, crowdLevel) => {
    const toastID = toast.loading("Updating Location...");
    const body = { noiseLevel, crowdLevel };
    const data = await fetch(`/api/study?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await data.json();
    if (res.error) {
      toast.update(toastID, {
        render: res.error,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      return;
    }
    toast.update(toastID, {
      render: " 🎉 Location Updated!",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
    mutate({
      ...study,
      noise_level: res.noise_level,
      crowd_level: res.crowd_level,
    });
  };

  const noiseMarks = [
    { value: 1, label: "🔕" },
    { value: 2, label: "💤" },
    { value: 3, label: "💬" },
    { value: 4, label: "🗣" },
    { value: 5, label: "💥" },
  ];

  const crowdMarks = [
    { value: 1, label: "💀" },
    { value: 3, label: "👤" },
    { value: 5, label: "👥" },
  ];

  return (
    <div className={styles.studyContainer}>
      <Header />
      {study && (
        <div className={styles.inputBox}>
          <h2>Update Location</h2>
          <h3>{study.name}</h3>
          <div style={{ display: "flex" }}>
            <label className={styles.label} htmlFor="noiseLevel">
              Noise Level:
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Noise Level"
                value={noiseLevel}
                marks={noiseMarks}
                min={1}
                max={5}
                valueLabelDisplay="auto"
                onChange={(e, value) => {
                  setNoiseLevel(value);
                }}
              />
            </Box>
          </div>
          <div style={{ display: "flex" }}>
            <label className={styles.label} htmlFor="crowdLevel">
              Crowd Level:
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Crowd Level"
                value={crowdLevel}
                marks={crowdMarks}
                min={1}
                max={5}
                valueLabelDisplay="auto"
                onChange={(e, value) => {
                  setCrowdLevel(value);
                }}
              />
            </Box>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.saveButton}
              onClick={() => {
                handleSubmit(noiseLevel, crowdLevel);
              }}
            >
              Save
            </button>
            <Link href={`/dashboard`}>
              <button className={styles.saveButton}>Back</button>
            </Link>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-center" />
    </div>
  );
}
