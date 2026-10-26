
const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const statusText = document.getElementById("status");

// Dark and light mode
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        statusText.textContent = "Please fill in all fields.";
        return;
    }

    statusText.textContent =
        "Thank you, " + name +
        "! The form works, but a backend is needed to send your message.";

    contactForm.reset();
});
