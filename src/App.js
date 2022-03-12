import "./styles.css";
import { getData } from "./Http/Api";
import { useState } from "react";

export default function App() {
  const [apiData, setApiData] = useState();
  const [inputValue, setInputValue] = useState();
  const getDataa = async (payload) => {
    try {
      const { data } = await getData.get("/comments", {
        params: { id: payload }
      });
      console.log(data);

      setApiData(data);
    } catch (error) {
      console.log(Error, "ahaa");
    }
  };
  return (
    <div className="App">
      <h2>Hit the button and get data</h2>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => getDataa(inputValue)}>SHOW DATA</button>

      {/* <div>{apiData}</div> */}
    </div>
  );
}
