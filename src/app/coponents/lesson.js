"use client";

import { useState } from "react";
import styles from "@/app/coponents/lesson.module.css";

export default function Lesson({ title, points }) {
  const [likeState, setLikeState] = useState("unset");
  const setLike = () => setLikeState("Liked");
  return (
    <div className={styles.layout}>
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.button} type="button" onClick={setLike}>
        {likeState === "unset" ? "No Like" : likeState}
      </button>

      {points.map((point) => {
        return (
          <p key={point} className={styles.text}>
            {point}
          </p>
        );
      })}
    </div>
  );
}
