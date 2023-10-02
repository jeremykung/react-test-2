import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </>
  );
};

export default ErrorExample;
