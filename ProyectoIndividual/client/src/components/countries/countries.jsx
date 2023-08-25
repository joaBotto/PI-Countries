import { Link } from "react-router-dom";

const Countries = ({ id, name, image, continent, population }) => {
  return (
    <div>
      <Link to={`/id/${id}`}>
        <h1>{name}</h1>
        <h1>{continent}</h1>
        <img src={image} alt={name + "image"} />
        <h4>{population.toLocaleString("es-ES")}</h4>
      </Link>
    </div>
  );
};

export default Countries;
