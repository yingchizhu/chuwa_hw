const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// Q1
function head(arr) {
  let ar = "<tr>";

  arr.forEach(function (ele) {
    ar += "<th>" + ele + "</th>";
  });
  ar += "</tr>";
  return ar;
}
function table(arr) {
  let ar3 = [];
  arr.forEach(function (ele) {
    let ar1 = "<tr>";
    let ar2 = "";
    for (const [key, value] of Object.entries(ele)) {
      ar2 += "<th>" + value + "</th>";
    }
    ar1 += ar2 + "</tr>";
    ar3.push(ar1);
  });
  return ar3.join();
}
let tblfor =
  "<table>" +
  head(tableInfo.tableHeader) +
  table(tableInfo.tableContent) +
  "</table>";
var div = document.createElement("div");
div.innerHTML = tblfor;

document.body.append(div);

//Q2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let ordered = "<ol>";
let unorder = "<ul>";
let ar4 = "";
list.map(function (ele) {
  ar4 += "<li>" + ele + "</li>";
});
ordered += ar4 + "</ol>";
unorder += ar4 + "</ul>";

var div2 = document.createElement("div");
div2.innerHTML = ordered + unorder;

document.body.append(div2);
//Q3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
let ar5 = "<select class ='btn'> Dropdown";
arr = [];
dropDownList.forEach(function (ele) {
  arr.push(ele.content);
});
arr.map(function (ele) {
  ar5 += "<option>" + ele + "</option>";
});
ar5 += "</select>";

var div3 = document.createElement("div");
div3.innerHTML = ar5;

document.body.append(div3);
