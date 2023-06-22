import React, { useState, useEffect } from "react";
function WeatherFetch() {
  const key = "eef1a2b947b9aca3dd7f9c83ce142d53";
  const [feels_like, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [iconID, setIconID] = useState("");
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=eef1a2b947b9aca3dd7f9c83ce142d53"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);
      });
  }, []);
  return (
    <>
      <h1 className="text-lg text-orange-700">Weather in Stockholm, Sweden:</h1>
      <h3 className="text-sm text-orange-400">
        Main Temperature : {mainTemp} Degrees Celsius
      </h3>
      <h3 className="text-sm text-orange-400">
        Feels like: {feels_like} Degrees Celsius
      </h3>
      <h3 className="text-sm text-orange-400">Weather Parameter: {main}</h3>
      <h3 className="text-sm text-orange-400">Description : {description}</h3>
    </>
  );
}
export default WeatherFetch;
