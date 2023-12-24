import React, { useState } from "react";

export const NonWorker = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(0);

  const getAnswer = () => {
    let sum = 0;
    for (let i = 0; i < 500000000; i++) {
      sum += i;
    }
    console.log(sum);
    setAnswer((prev) => prev + 100);
  };

  return (
    <div className="box-wrap">
      <div className="text-wrap">count : {count}</div>
      <div className="text-wrap">answer : {answer}</div>
      <button
        className="custom-button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        count + 1
      </button>
      <button className="custom-button" onClick={getAnswer}>
        answer + 100
      </button>
    </div>
  );
};
