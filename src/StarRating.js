import Star from "./Star";

export default function StarRating({  }) {
    console.log(`selected ${selected}, color ${color}`);

  return <FaStar color={selected ? "red" : "grey"} />;
}

export { Star };
// export default Star;