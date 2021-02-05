
import { FaStar } from 'react-icons/fa';
import Star from './Star';
import StarRating from "./StarRating";
import { useState, useEffect } from "react";


import './App.css';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then(res => res.json())
      .then(data => {
        console.log("data obtained", data, Array.isArray(data));
        setUserData(data);
      })
  }, []);

  console.log("CURRENT DATA IS", userData);
  console.log("CURRENT DATA SLICE 3 IS", userData.slice(3));
  return (
    <>
      <FaStar color="red" />
      <Star selected />
      <Star selected="false" />
      <Star selected={false} />
      <Star />
      <Star color />
      <Star color="hi" />
      <Star color={1 + 2} />
      <div>
        <StarRating />
      </div>
      <div>
        <StarRating numStars="10" />
      </div>
      <div>wah la
        <StarRating yee="wah" numStars="12" hm="ha" />
      </div>
      <ul>
        {userData.slice(0, 3).map((e, i) =>
          <li key={i}>

          {e.url}
          <img src={e.thumbnailUrl} />
        </li>
        )}
      </ul>
    </>
  );

  // return (
  //   <>
  //     <div>1</div>
  //     <div>2</div>
  //     <div>3</div>
  //   </>
  // );

  // return (
  //   [
  //     <div>1</div>,
  //     <div>2</div>,
  //     <div>3</div>
  //   ]
  // );

  // return (
  //   <>
  //     <FaStar color="red" />
  //     <FaStar color="red" />
  //     <FaStar color="red" />
  //   </>
  // );

  // (
  //   [
  //     <FaStar color="red" />,
  //     <FaStar color="red" />,
  //     <FaStar color="red" />
  //   ]
  // );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
