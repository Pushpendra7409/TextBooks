// import React from 'react'
import list from "../../public/list.json";
import Cards from "./Cards"
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container z-100 mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are Delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p>
            The Textbooks app is a comprehensive digital learning platform
            tailored to enhance the educational experience for students. It
            offers a vast library of e-textbooks across various subjects, making
            learning accessible and affordable. With interactive learning tools
            such as videos, quizzes, and games, the app fosters engagement and
            improves retention. Its adaptive technology personalizes the
            learning journey, catering to individual styles and paces. Users can
            download content for offline access, ensuring learning continues
            even without internet connectivity. Additionally, the app features
            real-time progress tracking, allowing teachers and parents to
            monitor student performance effectively.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
           {list.map((item) => (
            <Cards key={item.id} item={item} />
           ))}
        </div>
      </div>
    </>
  );
}

export default Course;
