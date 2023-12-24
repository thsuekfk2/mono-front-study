onmessage = (event) => {
  if (event.data === "start") {
    let sum = 0;
    for (let i = 0; i < 500000000; i++) {
      sum += i;
    }
    console.log(sum);
    postMessage(100);
  }
};
