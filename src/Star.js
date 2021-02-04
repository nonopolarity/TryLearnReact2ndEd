import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, color = null, handleMouseOver = () => {} }) {
    console.log(`selected ${selected}, color ${color}`);

  return <FaStar color={selected ? "red" : "grey"} onMouseOver={handleMouseOver} />;
}

export { Star };
// export default Star;