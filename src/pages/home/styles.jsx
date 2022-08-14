import styled from "styled-components";

export const Container = styled.section`
  .container {
    background-color: #f1f1f1;
    max-width: 500px;
    padding: 2em;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    gap: 20px;
    transition: all 0.2s linear;
  }
  .weather_container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .weather_container input {
    padding: 10px;
    border: 1px solid transparent;
    outline: none;
    width: 100%;
    transition: all 0.2s linear;
  }
  .weather_container input:focus {
    border: 1px solid #a66cff;
  }
  .weather_container button {
    padding: 10px 25px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #a66cff;
    color: #f7f7f7;
    transition: all 0.2s linear;
    font-weight: 400;
    letter-spacing: 2px;
  }
  .weather_container button:hover {
    background-color: #9a5afc;
    color: #fdfbfb;
  }

  .result_weather {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1px;
  }
  .icon_description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .result_weather_false {
    display: none;
    align-items: center;
    gap: 3em;
  }
  .result_weather section {
    display: flex;
    flex-flow: column wrap;
  }
  .result_weather section h2 {
    letter-spacing: 2px;
  }

  /* dark modo */
  .container_active {
    background-color: black;
    max-width: 500px;
    padding: 2em;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    gap: 20px;
    transition: all 0.2s linear;
    color: #f1f1f1;
  }
`;
