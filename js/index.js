"use strict";

function createList(array, parent = document.body) {
  let ul = document.createElement("ul");
  array.map((value) => {
    const li = document.createElement("li");
    if (Array.isArray(value)) {
      createList(value, li);
      ul.append(li);
    } else {
      li.textContent = value;
      ul.append(li);
    }
  });
  parent.append(ul);
}

function countdown() {
  let div = document.querySelector("div");
  div.textContent = `${sec} sec to clear window`;
  sec--;
  if (sec < 0) {
    document.body.innerHTML = "";
    clearTimeout(timer);
    console.log("Clear");
  } else {
    timer = setTimeout(countdown, 1000);
  }
}

let timer;
let sec = 3;
const arr = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];

createList(arr);
countdown();
