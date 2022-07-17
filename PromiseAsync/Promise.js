/* Construct promise */
const promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your data is ready");
      reject("Your data rejected");
    }, 3000);
  });

/* Consume promise */
const data = promise().then((resolve) => resolve);
promise().catch((rejected) => console.log(rejected));

/* Finally */
promise().finally(() => console.log("Promise is done"));

console.log(data);
setTimeout(() => {
  console.log(data);
}, 4000);
