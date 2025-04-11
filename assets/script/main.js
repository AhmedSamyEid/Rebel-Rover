document.getElementById("crescent-moon").onclick = () => {
  if (document.body.classList.contains("crescent-moon")) {
    document.body.classList.remove("crescent-moon");
    document.getElementById("crescent-moon").src =
      "assets/icons/crescent moon.webp";
  } else {
    document.body.classList.add("crescent-moon");
    document.getElementById("crescent-moon").src = "assets/icons/sun.webp";
  }
};

document.getElementById("togglePackage").addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".subscribe-form");
  const emailInput = document.getElementById("email-input");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email) {
      localStorage.setItem("subscribedEmail", email);

      message.textContent = "Thanks for subscribing!";
      message.style.color = "green";

      emailInput.value = "";
    } else {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
    }
  });

  const savedEmail = localStorage.getItem("subscribedEmail");
  if (savedEmail) {
    console.log("Saved Email:", savedEmail);
  }
});
