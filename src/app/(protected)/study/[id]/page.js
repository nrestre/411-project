import db from "@/lib/db";
import Header from "@/components/Header";

import styles from "./study.module.css";

export default function Study({ params }) {
  const { id } = params;
  return (
    <>
      <Header />
      <div className={styles.studyContainer}>
        <div>My Study Area: {id}</div>
      </div>
    </>
  );
}

export async function updateMetrics(id, crowdLevel, noiseLevel) {
  const location = await db.study.findUnique({
    where: {
      id,
    },
  });
  const updatedLocation = await db.study.update({
    where: {
      id,
    },
    data: {
      crowd_level: (location.crowd_level + crowdLevel) / 2,
      noise_level: (location.noise_level + noiseLevel) / 2,
    },
  });
  return updatedLocation;
}
