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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

  
    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const email = form.querySelector('input[placeholder="Your Email"]').value;
    const subject = form.querySelector('input[placeholder="Subject"]').value;
    const message = form.querySelector('textarea[placeholder="Your Message"]').value;


    const contactData = {
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString()
    };


    localStorage.setItem("contactFormData", JSON.stringify(contactData));


    alert("Data saved successfully inlocalStorage ✅");


    form.reset();
  });
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
      message.style.color = "white";
      message.style.fontSize = "20px";

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