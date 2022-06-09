console.log("Main is loaded");

const person = [
  {
    firstname: " Haris",
    lastname: "Mahmood",
    age: 17,
    residence: "Ypenburg",
  },
  {
    firstname: " John",
    lastname: "van Broek",
    age: 37,
    residence: "Den Haag",
  },
  {
    firstname: " Jan",
    lastname: "Ossblok",
    age: 45,
    residence: "Limburg",
  },
  {
    firstname: " Timo",
    lastname: "Bijl",
    age: 23,
    residence: "Zoetermeer",
  },
  {
    firstname: " Bennie",
    lastname: "Lekker",
    age: 34,
    residence: "Rotterdam",
  },
];

for (let i = 0; i < person.length; i++) {
  const all = person[i];
  console.log(all);
}
