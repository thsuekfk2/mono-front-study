import React, { useState } from "react";

const url = new URL("../utils/worker.js", import.meta.url);
const worker = new Worker(url);

export const WebWorker = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(0);

  const getAnswer = () => {
    worker.postMessage("start");
    worker.onmessage = (event) => setAnswer((prev) => prev + event.data);
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
