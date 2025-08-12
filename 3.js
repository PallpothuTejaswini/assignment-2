// Typing effect
const text = "Hi, I'm Tejaswini, Web Developer";
let i = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;



// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
