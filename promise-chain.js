let myP = Promise.resolve(42);

myP
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data);
    throw new Error("the 2nd then resolution failed");
  })
  .then(
    (data) => {
      console.log("resolution: ", data);
    },
    (data) => {
      console.log("reujection: ", data);
    }
  )
  .then(
    (data) => {
      console.log("resolution-1: ", data);
    },
    (data) => {
      console.log("rejection-1: ", data);
    }
  );
console.log("end");
