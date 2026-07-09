// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// Navbar Background on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.8)";
        navbar.style.transition = "0.4s";

    } else {

        navbar.style.background = "rgba(0,0,0,0.35)";

    }

});


// ===============================
// Fade-in Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll(
    ".project-card, .skill, .education-card, .contact-card, .certificate-card, .about-text"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";

    observer.observe(item);

});


// ===============================
// Typing Effect
// ===============================

const typingText = "Artificial Intelligence & Data Science Student";

const heading = document.querySelector(".hero-text h2");

let i = 0;

heading.textContent = "";

function typing() {

    if (i < typingText.length) {

        heading.textContent += typingText.charAt(i);

        i++;

        setTimeout(typing, 60);

    }

}

typing();


// ===============================
// Scroll to Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#9333ea";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px #9333ea";
topBtn.style.transition = "0.3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ===============================
// Profile Image Hover Effect
// ===============================

const profile = document.querySelector(".hero-image img");

profile.addEventListener("mouseover", () => {

    profile.style.transform = "scale(1.08) rotate(2deg)";

});

profile.addEventListener("mouseout", () => {

    profile.style.transform = "scale(1) rotate(0deg)";

});


// ===============================
// Console Message
// ===============================

console.log("Welcome to Gaanashree H.S Portfolio 🚀");
