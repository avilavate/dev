let p = new Promise((resolve, res) => {
  resolve(Promise.reject(new Error("This was rejected promise")));
});
