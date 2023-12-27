// odd to even

const oddNum = [1, 3, 5, 7, 9];

const evenNum = oddNum.map((x) => x + 1);
console.log(evenNum);

// filter vivision with 10
const numbers = [33, 50, 79, 78, 90, 101, 30];

const divisibleFilter = numbers.filter((x) => x % 2 == 0);
console.log(divisibleFilter);

// Find the divisible

const divisibleFind = numbers.find((x) => x % 2 == 0);
console.log(divisibleFind);

//calculate the reduce

const num = [1, 9, 17, 22];
const reduceResult = num.reduce((previous, current) => previous + current, 0);
console.log(reduceResult);

const reduce = numbers.reduce((previous, current) => previous + current, 0);
console.log(reduce);

// reduce 2

const people = [
  { name: "Mina", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Tina", age: 22 },
];

const ageReduce = people.map((x) => x.age);
const reduceAge = ageReduce.reduce(
  (previous, current) => previous + current,
  0
);
console.log(reduceAge);

//**Access object value */

const student = {
  name: "Masud",
  age: "25",
};

console.log(student.age);

//**Access the Object Value number tow */

const data = {
  location: [
    {
      latitude: "34.5, 37.8",
      longitude: "98.77, 58.7",
      city: "hydrabad",
      country: "indonesia",
    },
  ],
};

console.log(data.location[0].city);
