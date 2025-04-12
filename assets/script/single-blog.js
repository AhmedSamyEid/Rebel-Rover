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


const form = document.querySelector(".leave-reply form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const comment = form.querySelector("textarea").value;
  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const website = form.querySelector("input[type='url']").value;

  const replyData = {
    comment,
    name,
    email,
    website,
    date: new Date().toLocaleString()
  };

  
  let replies = JSON.parse(localStorage.getItem("replies")) || [];
  replies.push(replyData);
  localStorage.setItem("replies", JSON.stringify(replies));

  alert("The reply has been saved in the browser.(localStorage)");
  form.reset(); 
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
