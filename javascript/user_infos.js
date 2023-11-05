let infos = document.getElementsByClassName("user_infos_top")[0];
let user_infos_left = document.getElementsByClassName("user_infos_left")[0];

infos.addEventListener("click", () => {
  user_infos_left.classList.toggle("user_infos_appear");
});

let my_profile = document.getElementsByClassName("my_profile")[0];
let payments = document.getElementsByClassName("payments")[0];
let orders = document.getElementsByClassName("orders")[0];

let my_profile_toggle = document.getElementById("profile_toggle");
let orders_toggle = document.getElementById("orders_toggle");
let settings_toggle = document.getElementById("settings_toggle");
let payments_toggle = document.getElementById("payments_toggle");

let toggles = [
  my_profile_toggle,
  orders_toggle,
  settings_toggle,
  payments_toggle,
];

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    if (!toggle.classList.contains("row_active")) {
      toggles.forEach((otherToggle) => {
        otherToggle.classList.remove("row_active");
      });
      toggle.classList.add("row_active");
    }
  });
});
