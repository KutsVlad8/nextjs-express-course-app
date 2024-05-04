import Image from "next/image";
import styles from "./page.module.css";
import nextJsCourse from "../../course.json";
import Lesson from "./coponents/lesson.js";
import Shape from "./coponents/shape";

import dynamic from "next/dynamic";
const ClientComponent = dynamic(() => import("./coponents/someClien.js"), {
  ssr: false,
});

// const Lesson = dynamic(() => import("./lesson.js"), {
//   ssr: false,
// });

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
      <h1>React</h1>
      <ClientComponent />

      <ul className={styles.list}>
        {courses.lessons.map((lesson) => {
          return (
            <li key={lesson.id} className={styles.list_item}>
              <Lesson title={lesson.title} points={lesson.points} />
            </li>
          );
        })}
      </ul>

      <Shape />
    </main>
  );
}
