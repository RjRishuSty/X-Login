import React, { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [checkUser, setChecUser] = useState(false);
  const [error, setError] = useState("");
  const ChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.username === "user" && formData.password === "password") {
      setChecUser(true);
      setError("Welcome, user");
    } else {
      setChecUser(false);
      setError("Invalid username or password");
    }
  };
  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  },[])
  return (
    <div className="App">
      <h2>Login Page</h2>
      <p className={checkUser ? "messageSucc" : "messageError"}>
        {error}
      </p>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          onChange={ChangeHandler}
          ref={inputRef}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
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
