import Image from "next/image";
import styles from "./page.module.css";
import nextJsCourse from "../../course.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>{nextJsCourse.title}</h2>
      <br></br>

      <ul>
        {nextJsCourse.lessons.map((lesson) => {
          return (
            <li key={lesson.id}>
              <h3>{lesson.title}</h3>

              {lesson.points.map((point) => {
                return <p key={lesson.point}> {point}</p>;
              })}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
