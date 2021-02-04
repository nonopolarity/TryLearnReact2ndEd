import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, color = null, selectThisRating }) {
    console.log(`selected ${selected}, color ${color}`);

  return <FaStar color={selected ? "red" : "grey"} onMouseOver={selectThisRating} />;
}

export { Star };
// export default Star;