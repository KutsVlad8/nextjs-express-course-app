import Image from "next/image";
import styles from "./page.module.css";
import nextJsCourse from "../../course.json";
import Lesson from "./lesson.js";

async function getAllCourses() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(nextJsCourse), 1000);
  });
}

export default async function Home() {
  const courses = await getAllCourses();

  return (
    <main className={styles.main}>
      <h2>{courses.title}</h2>
      <br></br>

      <ul>
        {courses.lessons.map((lesson) => {
          return (
            <li key={lesson.id}>
              <Lesson title={lesson.title} points={lesson.points} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
