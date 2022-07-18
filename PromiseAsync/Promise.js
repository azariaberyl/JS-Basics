/* Construct promise */
const promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your data is ready");
      reject("Your data rejected");
    }, 3000);
  });

/* Consume promise */
const data = promise()
  .then((resolve) => resolve)
  .catch((rejected) => rejected)
  .finally(() => {
    console.log("Promise is done");
  });

console.log(data);
const load = setInterval(() => {
  console.log(data);
}, 1000);
