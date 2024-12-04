window.onload = function () {

  const funcShared = (element) => {
    const res = document.getElementById(element);
    return res;
  };
  const fullName = funcShared("full-name");
  fullName.onkeydown = (e) => {
    if (!isNaN(parseInt(e.key))) {
      e.preventDefault();
    }
  };

  const userName = funcShared("user-name");
  userName.oninput = function () {
    this.value = this.value.replace(/[, .]/, "");
  };

  const checkbox = funcShared("checkbox");
  checkbox.addEventListener("change", (event) => {
     event.currentTarget.checked
      ? console.log("Согласен")
      : console.log("Не согласен");
  });

  const form = document.querySelector("form");

  const password = funcShared("password");
  let mainButton = funcShared("sign-up");
  const eMail = funcShared("e-mail");
  const repeatPassword = funcShared("repeat-password");

  function handleInputChange(event) {
    const input = event.target;
    input.value !== ""
      ? (input.style.borderColor = "red")
      : (input.style.borderColor = "");
  }
  const formInputs = document.querySelectorAll("form input");
  formInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
  });

  mainButton.onclick = function () {
    let pass = password.value;
    let checkPass = repeatPassword.value;
    if (!fullName.value) {
      alert("Fill in the field Full Name");
      return;
    }
    if (!userName.value) {
      alert("Fill in the field User Name");
      return;
    }
    if (!eMail.value) {
      alert("Fill in the field E-mail");
      return;
    }
    if (!pass) {
      alert("Fill in the field Password");
    }
    if (pass.length < 8) {
      alert("Short password");
      return;
    }
    if (!checkPass) {
      alert("Fill in the field Repeat Password");
      return;
    }
    if (pass !== checkPass) {
      alert("Passwords don't match");
      return;
    }
    if (!checkbox.checked) {
      alert("You must agree to the terms");
      return;
    }
    //Popup
    const popUp = funcShared("my-popup");
    popUp.classList.add("open");

    form.reset();
    formInputs.forEach((input) => {
      input.style.borderColor = "";
    });
  };


  let addScroll = document.getElementsByClassName("scroll");
  for (let i = 0; i < addScroll.length; i++) {
    addScroll[i].onclick = function () {
      funcShared("main-title").scrollIntoView({ behavior: "smooth" });
      document.getElementsByTagName("h1")[0].innerHTML = "Log in to the system";
      funcShared("form-full-name").remove();
      funcShared("form-e-mail").remove();
      funcShared("form-repeat-password").remove();
      funcShared("main-form-checkbox").remove();
      funcShared("link").remove();
      funcShared("my-popup").remove();
      mainButton.innerText = "Sign in";

      mainButton.onclick = function (event) {
        if (!userName.value) {
          alert("Fill in the field User Name");
          return;
        }
        if (!password.value) {
          alert("Fill in the field Password");
          return;
        }
        alert(`Welcome ${userName.value} !`);
        form.reset();
        formInputs.forEach((input) => {
          input.style.borderColor = "";
        });
      };
    };
  }
};


