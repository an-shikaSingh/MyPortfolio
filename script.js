document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Run on load
});

// Custom Cursor Effect
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
// Typing Effect for Name
const text = "Welcome to My Portfolio!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
// Background Particles Animation
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.01;
  }

  draw() {
    ctx.fillStyle = "#00ccff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.size <= 0.2) particlesArray.splice(index, 1);
  });
  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();
