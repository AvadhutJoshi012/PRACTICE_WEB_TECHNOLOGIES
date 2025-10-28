let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " Apna College";

let divs = document.querySelectorAll(".box");

let i = 1;
for (div of divs) {
  div.innerText = `New Values are ${i}`;
  i++;
}

// divs[0].innerText = "New Values 01";
// divs[1].innerText = "New Values 02";
// divs[2].innerText = "New Values 03";
