const users = [
  {
    id: "1",
    name: "Budi",
    score: "90",
  },
  {
    id: "2",
    name: "Bagong",
    score: "100",
  },
  {
    id: "3",
    name: "Jane",
    score: "70",
  },
  {
    id: "4",
    name: "John",
    score: "70",
  },
];

async function fetchBestStudent(status = true) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      status ? resolve(users) : reject("Permintaan gagal");
    }, 2000);
  });

  const data = await promise;
  let bestStudent = data[0];
  data.forEach((element) => {
    element.score > bestStudent ? (bestStudent = element) : null;
  });
  console.log(bestStudent);
}

function menu() {
  console.log("The best student is: \n");
}

const best = fetchBestStudent();
menu();
