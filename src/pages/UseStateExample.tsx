import React, { Dispatch, useState } from "react";

type TCounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-3xl">{counter}</h1>
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
      <button onClick={handleAsyncIncrement} className="btn btn-secondary">
        Async Increment
      </button>
      <button onClick={() => setCounter(0)} className="btn btn-accent">
        Reset
      </button>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            className="border-2"
            name="name"
            id="name"
          />
          <input
            onChange={handleChange}
            type="text"
            className="border-2"
            name="email"
            id="email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UseStateExample;
