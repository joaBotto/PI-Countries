import { useDispatch } from "react-redux";
import { ASCENDING, LOWER, HIGHEST, DESCENDING } from "../../redux/order";
import {
  filterByActivity,
  filterByContinent,
  filterByPopulation,
  sort,
} from "../../redux/actions";
import "./order.css";
export default function Order() {
  const dispatch = useDispatch();

  function onSelectChange(event) {
    dispatch(sort(event.target.value));
  }

  function handleFilterContinent(event) {
    dispatch(filterByContinent(event.target.value));
  }

  function handleFilterActivity(event) {
    dispatch(filterByActivity(event.target.value));
  }

  function handleFilterPopulation(event) {
    dispatch(filterByPopulation(event.target.value));
  }

  return (
    <div>
      <select
        name="select"
        onChange={onSelectChange}
        className="select-alphabetic"
      >
        <option value={ASCENDING}>Ascending</option>
        <option value={DESCENDING}>Descending</option>
      </select>
      <select
        className="select-alphabetic"
        name="select"
        onChange={handleFilterPopulation}
      >
        <option value="Select population amount order">Population order</option>
        <option value={HIGHEST}>Highest</option>
        <option value={LOWER}>Lowest</option>
      </select>
      <select
        name="select"
        onChange={handleFilterContinent}
        className="select-alphabetic"
      >
        <option value="Select continent order">Continent order</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select
        name="select"
        onChange={handleFilterActivity}
        className="select-alphabetic"
      >
        <option value="Select Activity Name">Tourist Activity</option>
        <option value="Adventure Turism">Turism</option>
        <option value="Art gallery tours">Art gallery tours</option>
        <option value="Bádminton">Bádminton</option>
        <option value="Basketball">Basketball</option>
        <option value="Boxing">Boxing</option>
        <option value="City walking tours">City walking tours</option>
        <option value="Climbing">Climbing</option>
        <option value="Cricket">Cricket</option>
        <option value="Cycling tours">Cycling tours</option>
        <option value="Farm visits ">Farm visits</option>
        <option value="Fishing">Fishing</option>
        <option value="Football">American Football</option>
        <option value="Gastronomic Tour">Gastronomic Tour</option>
        <option value="Golf">Golfing </option>
        <option value="Hiking">Hiking</option>
        <option value="Hockey">Hockey</option>
        <option value="Horse Riding">Horse Riding</option>
        <option value="Kayaking">Kayaking</option>
        <option value="Marathons">Marathons</option>
        <option value="Martial Arts">Martial Arts</option>
        <option value="Music festivals">Music festivals</option>
        <option value="Museum visits">Museum visits</option>
        <option value="Ping Pong">Ping Pong</option>
        <option value="Racing">Racing</option>
        <option value="Rugby">Rugby</option>
        <option value="Scuba and snorkel diving">Scuba diving</option>
        <option value="Skating">Skating</option>
        <option value="Skydiving">Skydiving</option>
        <option value="Snowboard">Snowboard</option>
        <option value="Soccer">Soccer</option>
        <option value="Sport Competition">Sport Competition</option>
        <option value="Swimming">Swimming</option>
        <option value="Tennis">Tennis</option>
        <option value="Theme parks">Theme parks</option>
        <option value="Triathlons">Triathlons</option>
        <option value="Volley">Volley</option>
        <option value="Waterpolo">Waterpolo</option>
        <option value="Wildlife watching">Wildlife watching</option>
        <option value="Wine tasting ">Wine tasting</option>
        <option value="Yoga retreats">Yoga retreats</option>
      </select>
    </div>
  );
}
