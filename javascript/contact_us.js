//#region Namings
let nameInput = document.getElementById("contact_us_name");
let surnameInput = document.getElementById("contact_us_surname");
let emailInput = document.getElementById("contact_us_email");
let phoneInput = document.getElementById("contact_us_phone");
let sender = document.getElementById("sender");
let commentInput = document.getElementById("contact_us_comment");
let responseBtn = document.getElementById("response_button");
let responseText = document.createElement("p");
responseBtn.append(responseText);
let tick = document.createElement("i");
tick.classList.add("fa-solid");
tick.classList.add("fa-check");
sender.append(tick);
//#endregion
let inputs = [nameInput, surnameInput, emailInput, phoneInput, commentInput];

sender.addEventListener("click", () => {
  if (
    nameInput.value.length > 0 &&
    surnameInput.value.length > 0 &&
    emailInput.value.length > 0 &&
    phoneInput.value.length > 0 &&
    commentInput.value.length > 0
  ) {
    responseText.innerHTML = `
    Mesajınız uğurla poçt hesabınıza göndərildi!
    <span>(QEYD* Spam qutusuna baxmağı unutmayın!)</span>`;
    responseText.style.color = "green";
    resetInputs();
  } else if (nameInput.value.length == 0) {
    responseText.textContent = "Ad vacibdir!";
  } else if (surnameInput.value.length == 0) {
    responseText.textContent = "Soyad vacibdir!";
  } else if (emailInput.value.length == 0) {
    responseText.textContent = "E-mail vacibdir!";
  } else if (phoneInput.value.length == 0) {
    responseText.textContent = "Nömrə vacibdir!";
  } else if (commentInput.value.length == 0) {
    responseText.textContent = "Şərh vacibdir!";
  } else {
    responseText.textContent = "Zəhmət olmasa boşluqları doldurun!";
  }
  timer();
});

function timer() {
  responseText.style.opacity = 1;
  if (responseText.style.color == "green") {
    sender.disabled = false;
    sender.classList.add("tick");
    setTimeout(() => {
      responseText.style.opacity = "0";
      sender.classList.remove("tick");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.outlineColor = "orange";
        inputs[i].style.borderColor = "orange";
      }
    }, 2500);
  } else {
    sender.disabled = true;
    responseText.classList.add("shake");
    setTimeout(() => {
      responseText.classList.remove("shake");
      sender.disabled = false;
      responseText.style.opacity = "0";
    }, 1500);
  }
}

function resetInputs() {
  nameInput.value = "";
  surnameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  commentInput.value = "";
  animatedTick();
  setTimeout(() => {
    responseText.style.color = "red";
  }, 2500);
}

function animatedTick() {
  sender.style.width = "50px";
  sender.style.height = "50px";
  sender.style.borderRadius = "50%";
  sender.firstElementChild.textContent = "";
  setTimeout(() => {
    tick.style.opacity = "1";
    btnTransform();
  }, 500);
}

function btnTransform() {
  let query650 = window.matchMedia("(max-width: 650px)");

  setTimeout(() => {
    if (query650.matches) {
      sender.style.width = "100%";
    } else {
      sender.style.width = "100px";
    }
    sender.style.borderRadius = "5px";
    sender.firstElementChild.textContent = "Göndər";
    tick.style.opacity = "0";
  }, 2000);
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", () => {
    if (inputs[i].value.length == 0) {
      inputs[i].style.outlineColor = "red";
      inputs[i].style.borderColor = "red";
    } else {
      inputs[i].style.outlineColor = "green";
      inputs[i].style.borderColor = "green";
    }
    inputs[i].style.borderWidth = "2px";
  });
}
