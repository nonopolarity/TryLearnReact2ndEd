import { useState } from "react";
import Star from "./Star";

export default function StarRating({ numStars = 5 }) {
    console.log(`numStars ${numStars}`);

    const [numSelectedStars] = useState(3);

  return Array.from({length: numStars}).map((e, i) => <Star selected={i < numSelectedStars} />);
}

export { StarRating };
// export default Star;