import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, color = null }) {
    console.log(`selected ${selected}, color ${color}`);

  return <FaStar color={selected ? "red" : "grey"} />;
}

export { Star };
// export default Star;