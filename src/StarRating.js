import { useState } from "react";
import Star from "./Star";

export default function StarRating({ numStars = 5 }) {
  console.log(`numStars ${numStars}`);

  const [numSelectedStars, setNumSelectedStars] = useState(3);

  return (
    <>
      {Array.from({ length: numStars }).map((e, i) =>
      <Star
        key={i}
        selected={i < numSelectedStars}
        handleSelect={() => setNumSelectedStars(i + 1)}
      />)}
      <p>rating {numSelectedStars}</p>
    </>
  );

}

export { StarRating };
// export default Star;