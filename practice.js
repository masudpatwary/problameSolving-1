//**১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */

const name = "masud";
let = number = 123456789;

//**২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */

const student = {
  name: "rakibul islam",
  age: 25,
  address: "chandpur",
  phone_number: "01777111073",
};
console.log(
  `Hello ${name} how are you today ?, Masud tomar kupon number is ${number} my student name is ${student.name} her age is ${student.age} her address is ${student.address} and her contact number is ${student.phone_number}`
);

//**৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */

const arr = [10, 20, 30, 40, 50, 60];

const sumOfArry = arr.map((x) => x / 5);
console.log(sumOfArry);

//**৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */

const multiplyOfArry = (x, y) => {
  const multi1 = x + 2;
  const multi2 = y + 2;
  const multifly = multi1 * multi2;
  return multifly;
};

const result = multiplyOfArry(10, 20);
console.log(result);

//**৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const threeMultiply = (x, y, z) => {
  const sum = x * y * z;
  return sum;
};

const threeMultiplyResult = threeMultiply(10, 12, 52);
console.log(threeMultiplyResult);

//**৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।*/

const sumMultiply = (x, y) => {
  const sum1 = x + 2;
  const sum2 = y + 2;
  const totalMutiplySum = sum1 * sum2;
  return totalMutiplySum;
};

const totalResult = sumMultiply(20, 40);
console.log(totalResult);

//**৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।/*

//* ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?*/

//**৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const arr2 = [5, 20, 52, 40, 35, 60, 37, 11, 59];
const arrToMultiply = arr2.map((x) => x * 5);
console.log(arrToMultiply);

//**৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const filterOdd = arr2.filter((x) => x % 2 == 1);
console.log(filterOdd);

//**৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */

const product = [
  { name: "samsung s22 ultra", color: "black", price: 67200 },
  { name: "iphone 15 pro max", color: "silver", price: 122000 },
  { name: "xiomi", color: "blue", price: 22000 },
  { name: "samsung s22 ultra battery", color: "black", price: 5000 },
];

const findPrice = product.find((x) => x.price == "5000");
const price = findPrice.price;
console.log(price);

//**৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। */

//* */ javascript arraw is afunction, javascript er map diye loop caliye arry er element khuje ber kora jay, for each holo javascript er arek ti looop ja map er moto ba for loop er moto kaj kore, but for each kono kichu return kore na, ar filter holo kono ekta arry theke kono kichu khuje ber kore anar jonno use kora hoy, find diye o filter er moto kono aarry ke khuje ber kore ana jay, but find use korle just ekta value dey. se first e jei value ta khuje pay deta e dey*//

//**৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

const products = { model: "samsung s22 ultra", color: "black", Pprice: 67200 };
const arry = [56, 65, 35, 89, 35, 5, 65];

const { model, color, Pprice } = products;
console.log(model, color, Pprice);

const [first, second] = [20, 23];
console.log(first);

//**৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে */

function getArr() {
  return ["Alim", "Halim"];
}

const [baba, kaka] = getArr();
const babarNamePawaGeche = baba + " " + kaka;
console.log(`${babarNamePawaGeche}`);

//**১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। */

const sumTotal = (a, b, c = 7) => a + b + c;
console.log(sumTotal(1, 2));

//**[অপশনাল] ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const people = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log(people.address.geo.lng);

//**১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */

console.log(people.address.geo?.lng);
