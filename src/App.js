
import { FaStar } from 'react-icons/fa';
import Star  from './Star';
import StarRating from "./StarRating";


import './App.css';

function App() {

  return (
    <>
      <FaStar color="red" />
      <Star selected />
      <Star selected="false" />
      <Star selected={false} />
      <Star />
      <Star color />
      <Star color="hi" />
      <Star color={1+2} />
      <div>
        <StarRating />
      </div>
      <div>
        <StarRating numStars="10" />
      </div>
      <div>wah la
        <StarRating numStars="12" />
      </div>
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
