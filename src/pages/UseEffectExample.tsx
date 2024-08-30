import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState({ name: " ", email: " " });

  useEffect(() => {
    console.log("Render");
  }, [user.name, user.email]);

  return (
    <div>
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        className="border border-red-500"
        type="text"
        name="name"
        id="name"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        className="border border-red-500"
        type="text"
        name="email"
        id="email"
      />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Render");
      setCount((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <h1 className="border-2 p-16">{count}</h1>;
};

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);
  return <div className="border border-red-500 p-10">Todo</div>;
};

export default UseEffectExample;
