// TODO --- preloader starts here ---
let preloader = document.getElementById("preloader");
let body = document.getElementById("body");

window.addEventListener("load", () => {
  body.style.overflowY = "hidden";
  body.style.height = "100vh";
  body.style.position = "fixed";
  setTimeout(() => {
    preloader.classList.add("preloader_hide");
    body.style.overflowY = "scroll";
    body.style.position = "static";
  }, 1000);
});
// ! --- preloader finishes here ---

// TODO --- burger button startes here ---
let burger = document.getElementById("burger_menu");
let sidebar = document.getElementById("sidebar");
let close = document.getElementById("close_button");

burger.addEventListener("click", () => {
  sidebar.style.left = "0px";
});

close.addEventListener("click", () => {
  sidebar.style.left = "-400px";
});
// ! --- burger button finishes here ---

// TODO --- dropdown startes here ---
let dropdown_button = document.getElementById("dropdown_button");
let dropdown_categories = document.getElementsByClassName("categories")[0];
let dropdown = document.getElementsByClassName("dropdown_menu")[0];

dropdown.style.height = "0px";

dropdown_categories.addEventListener("click", () => {
  if (dropdown.style.height == "0px") {
    dropdown.style.height = "200px";

    dropdown_button.classList.remove("fa-bars");
    dropdown_button.classList.add("fa-bars-staggered");
  } else {
    dropdown.style.height = "0px";
    dropdown_button.classList.remove("fa-bars-staggered");
    dropdown_button.classList.add("fa-bars");
  }
});
// ! --- dropdown finishes here ---

// TODO --- night mode startes here ---
let night_mode = localStorage.getItem("night_mode");
let night_mode_toggle = document.getElementsByClassName("modes")[0];
let night_mode_toggle_sidebar = document.getElementById("modes");
let site_logo = document.getElementById("site_logo");
let fitb_preloader = document.getElementById("fitb");

const enabled_mode = () => {
  fitb_preloader.style.fill = "#fff";
  body.classList.add("night_mode");
  site_logo.src = "../assets/fitb_game_white.png";
  preloader.style.backgroundColor = "#232323";
  localStorage.setItem("night_mode", "enabled");
};
const disabled_mode = () => {
  fitb_preloader.style.fill = "#232323";
  preloader.style.backgroundColor = "#fff";
  site_logo.src = "../assets/FITB_Game_logo.png";
  body.classList.remove("night_mode");
  localStorage.setItem("night_mode", null);
};

if (night_mode === "enabled") {
  enabled_mode();
}

night_mode_toggle.addEventListener("click", () => {
  night_mode = localStorage.getItem("night_mode");
  if (night_mode !== "enabled") {
    enabled_mode();
  } else {
    disabled_mode();
  }
});
night_mode_toggle_sidebar.addEventListener("click", () => {
  night_mode = localStorage.getItem("night_mode");
  if (night_mode !== "enabled") {
    enabled_mode();
  } else {
    disabled_mode();
  }
});
// ! --- night mode finishes here ---

// let profile_toggle = document.getElementsByClassName("profile_top")[0];
// let profile_slider = document.getElementsByClassName("profile_slider")[0];
// profile_toggle.addEventListener("click", () => {
//   profile_slider.classList.toggle("appear");
//   profile_toggle.classList.toggle("profile_top_toggle");
// });

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
}

function topFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
