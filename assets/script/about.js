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

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 20;
    let count = 0;

    const increment = Math.ceil(target / 100);

    const updateCount = () => {
      if (count < target) {
        count += increment;
        if (count > target) count = target;
        counter.innerText = count;
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        startCounting(entry.target);
      }
    });
  }, {
    threshold: 0.6
  });

  counters.forEach(counter => {
    observer.observe(counter);
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
