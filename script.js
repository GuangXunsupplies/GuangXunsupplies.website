// script.js

// 1. Auto-update the footer year
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML += ` | &copy; ${year} GuangXun Supplies福中`;

// 2. Scroll-to-top button logic
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "16px";
scrollBtn.style.background = "#0066cc";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

// Show button on scroll
window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. Smooth scrolling for anchor links (future-proofing)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

console.log("JS loaded. Enhancements activated!");