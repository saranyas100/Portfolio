
// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Console greeting
console.log("👋 Hello! Thanks for viewing Saranya's portfolio. Feel free to connect on LinkedIn!");

// Scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
// Contact Form Submission Handling
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    formMessage.textContent = "Sending...";
    formMessage.classList.remove("error");

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formsubmit.co/ajax/svsaranya007@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (response.ok) {
        formMessage.textContent = "✅ Thank you! Your message has been sent.";
        formMessage.classList.remove("error");
        contactForm.reset();
        setTimeout(() => {
          formMessage.textContent = "";
          window.location.hash = ""; // Scroll to home
        }, 3000);
      } else {
        throw new Error("FormSubmit error");
      }
    } catch (error) {
      formMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
      formMessage.classList.add("error");
    }
  });
}
document.getElementById("emailIcon").innerHTML =
  `<a href="mailto:saranyas100@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>`;
