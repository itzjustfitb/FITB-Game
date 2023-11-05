let log_in = document.getElementById("log_in");
let sign_up = document.getElementById("sign_up");
let forgot_password = document.getElementById("forgot_password");
let to_back = document.getElementById("to_back");
let log_in_container = document.getElementById("log_in_container");
let sign_up_container = document.getElementById("sign_up_container");
let forgot_password_container = document.getElementById(
  "forgot_password_container"
);

let night_mode = localStorage.getItem("night_mode");
let night_mode_toggle = document.getElementsByClassName("modes");
let site_logo = document.getElementsByClassName("site_logo");

const enabled_mode = () => {
  body.classList.add("night_mode");
  for (let i = 0; i < site_logo.length; i++) {
    site_logo[i].src = "../assets/fitb_game_white.png";
  }
  localStorage.setItem("night_mode", "enabled");
};
const disabled_mode = () => {
  for (let i = 0; i < site_logo.length; i++) {
    site_logo[i].src = "../assets/FITB_Game_logo.png";
  }
  body.classList.remove("night_mode");
  localStorage.setItem("night_mode", null);
};

if (night_mode === "enabled") {
  enabled_mode();
}

for (let i = 0; i < night_mode_toggle.length; i++) {
  night_mode_toggle[i].addEventListener("click", () => {
    night_mode = localStorage.getItem("night_mode");
    if (night_mode !== "enabled") {
      enabled_mode();
    } else {
      disabled_mode();
    }
  });
}
