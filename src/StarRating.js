import { useState } from "react";
import Star from "./Star";

export default function StarRating({ numStars = 5 }) {
    console.log(`numStars ${numStars}`);

    const [numSelectedStars, setNumSelectedStars] = useState(3);

  return Array.from({length: numStars}).map(
      (e, i) => <Star key={i} selected={i < numSelectedStars}
      handleMouseOver={() => setNumSelectedStars(i + 1)} />
  );
}

export { StarRating };
// export default Star;