import "./App.css";
import React, { useState } from "react";
function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBMI = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0 || weight === "" || height === "") {
      alert("invalid inputs");
    } else {
      let BMI = weight / (height / 100) ** 2;
      setBmi(BMI.toFixed(2));

      if (BMI < 18.5) {
        setMessage("You're underweight");
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        setMessage("You're Healthy");
      } else if (BMI >= 25 && BMI <= 29.9) {
        setMessage("You're overweight");
      } else {
        setMessage("You're obese");
      }
    }
  };

  
  const reset = () =>{
    setHeight("");
    setWeight("");
    setMessage("");
    setBmi("");
  } 

  return (
    <div className="container">
      <div className="App">
        <form onSubmit={calcBMI}>
          <h3>BMI Calculator</h3>
          <div className="form-control">
            <label htmlFor="Height">
              Height <span>(cm)</span>
            </label>
            <br />
            <input
              type="number"
              name="height"
              placeholder="Height"
              id="height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Weight">
              Weight <span>(Kg)</span>
            </label>
            <br />
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              id="weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="form-control-button">
              <button type="submit"> Calculate BMI</button>
              <br />
              <button type="button" onClick={()=>reset()}>Reset</button>
            </div>
          </div>
        </form>
        <h3>Your BMI is : {bmi} </h3>
        {message ? <p className="message">{message}</p>: ''}
      </div>
    </div>
  );
}

export default App;
