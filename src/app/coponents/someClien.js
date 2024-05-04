"use client";

import styles from "@/app/coponents/someClien.module.css";

export default function SomeClien() {
  console.log("client component");
  return <p className={styles.text}>clien component</p>;
}
