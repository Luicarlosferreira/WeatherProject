import { useState } from "react";
import { Container } from "./styles";
import { MaterialUISwitch } from "../../components/switch/index";
import axios from "axios";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [degrees, setDegrees] = useState(null);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResult] = useState(false);
  const API_KEY = "22b7e46af41d6ed41828fa2c98c4b5ae";

  const fetchData = async () => {
    if (query === "") {
      alert("Campo Vazio! Por favor, indique a localização!");
    }
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&lang=pt_br&appid=${API_KEY}&units=metric`
      );
      const data = await res.data;

      setLocation(data.name);
      setCountry(data.sys.country);
      setDescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setDegrees(data.main.temp);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setQuery("");
      setResult(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [checked, setChecked] = useState(null);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {!checked ? (
        <Container>
          <div className="container">
            <MaterialUISwitch
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            Consulte a temperatura
            <div className="weather_container">
              <input
                type="text"
                placeholder="Please enter location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button onClick={fetchData}>Search</button>
            </div>
            <div className={result ? "result_weather" : "result_weather_false"}>
              <section>
                <h2 className="place_result">
                  {location} ({country})
                </h2>
                <span className="degrees">
                  Temperatura: {Math.round(degrees)} °C
                </span>
                <span>Humidade: {humidity}%</span>

                <span className="wind">Vento: {wind} km/h</span>
              </section>
              <div className="icon_description">
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt="weather icon"
                />
                <p>{description}</p>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="container_active">
            <MaterialUISwitch
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            Consulte a temperatura
            <div className="weather_container">
              <input
                type="text"
                placeholder="Please enter location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button onClick={fetchData}>Search</button>
            </div>
            <div className={result ? "result_weather" : "result_weather_false"}>
              <section className="section_active">
                <h2 className="place_result">
                  {location} ({country})
                </h2>
                <span className="degrees">
                  Temperatura: {Math.round(degrees)} °C
                </span>
                <span>Humidade: {humidity}%</span>

                <span className="wind">Vento: {wind} km/h</span>
              </section>
              <div className="icon_description">
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt="weather icon"
                />
                <p>{description}</p>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
