import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [mes, setMes] = useState(false);
  const [error, setError] = useState("");
  const ChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.username === "user" && formData.password === "password") {
      setMes(true);
      setError("Welcome User");
    } else {
      setMes(false);
      setError("Invalid Password and username");
    }
  };
  return (
    <div className="App">
      <h2>Login Page</h2>
      <p>{error ? error : ""}</p>
      <form onSubmit={submitHandler}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          onChange={ChangeHandler}
        />
        <br />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          required
          onChange={ChangeHandler}
        />
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
