let first_row_btn = document.getElementById("first_row_btn");
let second_row_btn = document.getElementById("second_row_btn");
let third_row_btn = document.getElementById("third_row_btn");
let add_balance_section = document.getElementsByClassName(
  "add_balance_section"
)[0];

first_row_btn.addEventListener("click", () => {
  add_balance_section.classList.toggle("for_add_balance_slider1");
  add_balance_section.classList.remove("for_add_balance_slider3");
  add_balance_section.classList.remove("for_add_balance_slider2");
});

second_row_btn.addEventListener("click", () => {
  add_balance_section.classList.toggle("for_add_balance_slider2");
  add_balance_section.classList.remove("for_add_balance_slider3");
  add_balance_section.classList.remove("for_add_balance_slider1");
});
third_row_btn.addEventListener("click", () => {
  add_balance_section.classList.toggle("for_add_balance_slider3");
  add_balance_section.classList.remove("for_add_balance_slider2");
  add_balance_section.classList.remove("for_add_balance_slider1");
});
