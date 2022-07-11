//Q1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
console.log(
  "Q1 1. Given the array, implement a function for generating a new array which doubles the quantity and price in each object"
);
let newArr = [];
itemsObject.forEach(function (ele) {
  newQua = ele.quantity * 2;
  newPrice = ele.price * 2;
  newArr.push({ quantity: newQua, price: newPrice });
});
console.log(newArr);

console.log(
  "Q1 2. Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only"
);
let newArr2 = [];
itemsObject.forEach(function (ele) {
  if (ele.price > 300 && ele.quantity > 2) {
    newArr2.push(ele);
  }
});
console.log(newArr2);

console.log(
  "Q1 3.Given the array, implement a function to calculate the total value of the items "
);
let count = 0;
itemsObject.forEach(function (ele) {
  count += ele.quantity * ele.price;
});
console.log(count);

//Q2
console.log(
  "Q2 Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase."
);
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

let splitString = string.split(/[^a-z0-9]/gi);
let emstring = "";
splitString.forEach(function (ele) {
  if (ele != "") {
    emstring += " " + ele;
  }
});
console.log(emstring);

//Q3
console.log(
  "Q3 Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge"
);
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
  { uuid: 4, name: "test4" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

let ar3 = [];
first.forEach(function (ele) {
  var obj = second.find((ele2) => ele2.uuid == ele.uuid);
  if (obj != undefined) {
    ar3.push(Object.assign(obj, ele));
  } else {
    ar3.push({ uuid: ele.uuid, role: null, name: ele.name });
  }
});

second.forEach(function (ele) {
  var obj2 = first.find((ele2) => ele2.uuid == ele.uuid);
  if (obj2 == undefined) {
    ar3.push({ uuid: ele.uuid, role: ele.role, name: null });
  }
});
ar3 = ar3.sort((a, b) => a.uuid - b.uuid);
console.log(ar3);
