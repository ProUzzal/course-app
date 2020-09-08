import React, { useState, useEffect } from "react";
import "./App.css";
import Course from "./Component/Course./Course";
import data from "./data/data.json";
import Cart from "./Component/Cart/Cart";
function App() {
  const [cart, setCart] = useState([]);

  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    setCourseData(data);
  }, []);
  const enrollHandler = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="App">
      {/* <img src="logo.png" alt=""/> */}
      <h1 className='app-head'>Welcome to my Course</h1>
      <div className='d-flex' >
        <div>
          {courseData.map((courses) => (
            <Course
              course={courses}
              eventHandler={enrollHandler}
              id={courses.id}
            ></Course>
          ))}
        </div>

        <div>
          <Cart courseNum={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
