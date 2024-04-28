"use client";

import { useState } from "react";

export default function Lesson({ title, points }) {
  const [likeState, setLikeState] = useState("unset");
  const setLike = () => setLikeState("Liked");
  return (
    <div>
      <h3>{title}</h3>
      <button type="button" onClick={setLike}>
        {likeState === "unset" ? "No Like" : likeState}
      </button>

      {points.map((point) => {
        return <p key={point}> {point}</p>;
      })}
    </div>
  );
}
