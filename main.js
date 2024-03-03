"use strict";
// Variable

let calcBtn = document.querySelector(".btn-calc");
let resetBtn = document.querySelector(".btn-reset");
let inputTotal;
let subjectNo;

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputTotal = document.querySelector("#input").value;
  subjectNo = document.querySelector("#num").value;

  let avg = inputTotal
    .trim()
    .split(",")
    .slice()
    .sort((a, b) => b - a);

  for (let i = 0; i < avg.length; i++) {
    subjectNo = Number(subjectNo);
    if (subjectNo === 0) {
      alert("Number of subject can't be empty, put in a value");
    }

    if (isNaN(subjectNo)) {
      alert("Opps! use only numbers");
    }

    if (inputTotal.includes(".")) {
      alert("Opps! use only comma(,) to seperate totals");
      break;
    }
    if (inputTotal === "") {
      alert("Totals can't be empty, put in a value");
    }
    if (inputTotal.includes(",") && !inputTotal.includes(".")) {
      let tbody = document.querySelector("main tbody");
      let tr = document.createElement("tr");
      tbody.append(tr);
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      // elem = pos(elem);

      td1.textContent = i + 1;
      td2.textContent = (avg[i] / subjectNo).toFixed(1);
      td3.textContent = avg[i];
    }
  }
  // .map((elem, idx, arr) => {
  //   try {
  //     subjectNo = Number(subjectNo);
  //     if (inputTotal.includes(".")) {
  //       throw new Error("Opps! use only comma(,) to seperate totals");
  //     } else if (inputTotal === "") {
  //       throw new Error(
  //         "Totals and number of subjects can't be empty, put in a value"
  //       );
  //     } else if (isNaN(subjectNo)) {
  //       throw new Error("Opps! use only numbers");
  //     } else if (inputTotal.includes(",") && !inputTotal.includes(".")) {
  //       let tbody = document.querySelector("main tbody");
  //       let tr = document.createElement("tr");
  //       tbody.append(tr);
  //       let td1 = document.createElement("td");
  //       let td2 = document.createElement("td");
  //       let td3 = document.createElement("td");
  //       tr.append(td1);
  //       tr.append(td2);
  //       tr.append(td3);
  //       // elem = pos(elem);

  //       td1.textContent = idx + 1;
  //       td2.textContent = (elem / subjectNo).toFixed(1);
  //       td3.textContent = arr[idx];
  //     }
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // })
  // .join(" ");
  // avgs.join(",");
});

// function pos(arr){

// }
resetBtn.addEventListener("click", () => {
  document.querySelector("#num").value = "";
  document.querySelector("#input").value = "";

  let tbody = document.querySelector("main tbody");
  let tr = document.createElement("tr");
  tbody.remove(tr);
});

// Update Time
let updateTime = document.querySelector("time");
updateTime.textContent = new Date().getFullYear();
