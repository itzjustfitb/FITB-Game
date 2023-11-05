let selection1 = document.getElementById("selection1");
let slider1 = document.getElementById("slider1");

let selection2 = document.getElementById("selection2");
let slider2 = document.getElementById("slider2");

let selection3 = document.getElementById("selection3");
let slider3 = document.getElementById("slider3");

let question_table = document.getElementById("question_table");
let question_container = document.getElementById("question_container");
let question_section = document.getElementById("question_section");

selection1.addEventListener("click", () => {
  question_section.classList.toggle("for_selection1");
  question_section.classList.remove("for_selection2");
  question_section.classList.remove("for_selection3");
});

selection2.addEventListener("click", () => {
  question_section.classList.toggle("for_selection2");
  question_section.classList.remove("for_selection1");
  question_section.classList.remove("for_selection3");
});
selection3.addEventListener("click", () => {
  question_section.classList.toggle("for_selection3");
  question_section.classList.remove("for_selection2");
  question_section.classList.remove("for_selection1");
});
