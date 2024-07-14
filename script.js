// JavaScript for Animations and Interactivity

document.addEventListener('DOMContentLoaded', function() {
  // --- Smooth Scrolling for Navigation ---
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // --- Intersection Observer for Animations ---
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const sections = document.querySelectorAll('.section, .hero-image');
  sections.forEach(section => {
    observer.observe(section);
  });
});

// --- Parallex effect on Scroll for Hero ---
document.addEventListener('scroll', function() {
  const heroImage = document.querySelector('.hero-image');
  const scrollPosition = window.pageYOffset;
  heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});

// ---  Add Form Validation  ---
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Form validation
  const nameInput = document.getElementById('name').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  const messageInput = document.getElementById('message').value.trim();

  if (nameInput === '' || emailInput === '' || messageInput === '') {
    alert('Please fill in all required fields.');
    return;
  }

  if (!validateEmail(emailInput)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If the form is valid (Optional: Submit the data to your backend)
  // alert(`Form submitted with values: \nName: ${nameInput}\nEmail: ${emailInput}\nMessage: ${messageInput}`);

  // Clear the form inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Optional: Add custom cursor to the website
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
});