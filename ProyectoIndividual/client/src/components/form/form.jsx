import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, postActivity } from "../../redux/actions";
import "./form.css";

export default function Form() {
  function validate(input) {
    const errors = {};
    if (!input.name) {
      errors.name = "You must select an activity";
    } else if (!input.season) {
      errors.season = "You must put a season";
    } else if (!input.duration) {
      errors.duration = "You must put a duration";
    } else if (!input.difficulty) {
      errors.difficulty = "You must put a difficulty";
    }
    return errors;
  }
  const dispatch = useDispatch();
  const countriesFounded = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const handleChange = (event) => {
    // setInput({
    //   ...input,
    //   [event.target.name]: event.target.value,
    // });
    // setErrors(
    //   validate({
    //     ...input,
    //     [event.target.name]: event.target.value,
    //   })
    // );
    const updatedInput = {
      ...input,
      [event.target.name]: event.target.value,
    };
    setInput(updatedInput);
    const updatedErrors = validate(updatedInput);
    setErrors(updatedErrors);
  };

  const handleChecked = (e) => {
    // if (e.target.checked) {
    //   setInput({
    //     ...input,
    //     difficulty: e.target.value,
    //   });
    // }
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
    const updatedInput = {
      ...input,
      difficulty: e.target.value,
    };

    setInput(updatedInput);

    const updatedErrors = validate(updatedInput);
    setErrors(updatedErrors);
  };

  const handleActivitySelect = (e) => {
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  function handleSelect(e) {
    const selectedCountry = e.target.value;
    if (
      selectedCountries.length < 3 &&
      !input.countries.includes(selectedCountry)
    ) {
      setSelectedCountries([...selectedCountries, selectedCountry]);
      setInput({
        ...input,
        countries: [...input.countries, selectedCountry],
      });
    }
  }

  function handleSeason(e) {
    const selectedSeason = e.target.value;
    setInput({
      ...input,
      season: selectedSeason,
    });
    const updatedErrors = validate({
      ...input,
      season: selectedSeason,
    });
    setErrors(updatedErrors);
    // setErrors(
    //   validate({
    //     ...input,
    //     season: selectedSeason,
    //   })
    // );
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Soy el input", input);
    dispatch(postActivity(input));
    alert("Actividad creada");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  }

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  function handleDelete(selectedCountry) {
    const updatedCountries = input.countries.filter(
      (c) => c !== selectedCountry
    );
    setSelectedCountries(updatedCountries);
    setInput({
      ...input,
      countries: updatedCountries,
    });
  }

  return (
    <div>
      <Link to="/home">
        <button className="back">Volver</button>
      </Link>

      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div>
          <label className="label">Name</label>
          <select name="select" onChange={(e) => handleActivitySelect(e)}>
            <option value="Select Activity Name">Tourist Activity</option>
            <option value="Adventure Turism">Turism</option>
            <option value="Art gallery tours">Art gallery tours</option>
            <option value="Basketball">Basketball</option>
            <option value="Boxing">Boxing</option>
            <option value="City walking tours">City walking tours</option>
            <option value="Climbing">Climbing</option>
            <option value="Cricket">Cricket</option>
            <option value="Cycling tours">Cycling tours</option>
            <option value="Farm visits ">Farm visits</option>
            <option value="Fishing">Fishing</option>
            <option value="Football">American Football</option>
            <option value="Music festivals">Music festivals</option>
            <option value="Museum visits">Museum visits</option>
            <option value="Ping Pong">Ping Pong</option>
            <option value="Racing">Racing</option>
            <option value="Rugby">Rugby</option>
            <option value="Snowboard">Snowboard</option>
            <option value="Soccer">Soccer</option>
            <option value="Swimming">Swimming</option>
            <option value="Tennis">Tennis</option>
            <option value="Volley">Volley</option>
            <option value="Waterpolo">Waterpolo</option>
          </select>
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label className="label">Season</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Spring"
                name="Spring"
                onChange={(e) => handleSeason(e)}
              />
              Spring
            </label>
            <label>
              <input
                type="checkbox"
                value="Summer"
                name="Summer"
                onChange={(e) => handleSeason(e)}
              />
              Summer
            </label>
            <label>
              <input
                type="checkbox"
                value="Autumn"
                name="Autumn"
                onChange={(e) => handleSeason(e)}
              />
              Autumn
            </label>
            <label>
              <input
                type="checkbox"
                value="Winter"
                name="Winter"
                onChange={(e) => handleSeason(e)}
              />
              Winter
            </label>
            {errors.season && <p>{errors.season}</p>}
          </div>
        </div>

        <div>
          <label className="label">Duration</label>
          <input
            placeholder={"Put the duration"}
            type="text"
            value={input.duration}
            name="duration"
            onChange={handleChange}
            min="0"
            max="600"
          />
          {errors.duration && <p>{errors.duration}</p>}
        </div>

        <div>
          <label className="label">Difficulty</label>
          <div>
            <label>
              <input
                type="radio"
                value="1"
                name="difficulty"
                onChange={(e) => handleChecked(e)}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="difficulty"
                onChange={(e) => handleChecked(e)}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                value="3"
                name="difficulty"
                onChange={(e) => handleChecked(e)}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                value="4"
                name="difficulty"
                onChange={(e) => handleChecked(e)}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                value="5"
                name="difficulty"
                onChange={(e) => handleChecked(e)}
              />
              5
            </label>
            {errors.difficulty && <p>{errors.difficulty}</p>}
          </div>
        </div>

        <div>
          <label className="label">Countries</label>
          <select onChange={(e) => handleSelect(e)} className="selectCountry">
            <option disabled selected>
              Choice country
            </option>
            {countriesFounded.map((c) => (
              <option value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          {selectedCountries.map((c) => (
            <div key={c}>
              <p className="countrySelected">{c}</p>
              <p
                onClick={() => {
                  handleDelete(c);
                }}
                className="x"
              >
                X
              </p>
            </div>
          ))}
        </div>
        {Object.keys(errors).length || !input.countries.length ? (
          <>
            <br />
            <button disabled className="buttonCreate">
              CREATE YOUR ACTIVITY
            </button>
          </>
        ) : (
          <>
            <br />
            <button className="buttonCreate">CREATE YOUR ACTIVITY</button>
          </>
        )}
      </form>
    </div>
  );
}
