const pics = ["School.jpg", "Barong.png"];   // dagdagan mo pa kung gusto mo
let current = 0;
const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("click", () => {
    current = (current + 1) % pics.length;
    profilePic.classList.remove("flip");
    void profilePic.offsetWidth;              // para ma-restart ang animation
    profilePic.classList.add("flip");
    setTimeout(() => (profilePic.src = pics[current]), 300);  // palit sa gitna ng flip
});

const midterm = [
    { title: "Midterm Act 1", desc: "Personal information page using pure HTML.", img: "images/m-act1.png", link: "Midterm/Act1/DELACRUZ.html" },
    { title: "Midterm Act 2", desc: "Multi-page website with forms and tables.",  img: "images/m-act2.png", link: "Midterm/Act2/DELACRUZ.html" },
    { title: "Midterm Act 3", desc: "Introduction to transitions and external CSS.", img: "images/m-act3.png", link: "Midterm/Act3/DELACRUZ_BSIT31A_ACT3/index.html" },
    { title: "Midterm Act 4", desc: "Simple responsive website with multiple pages.", img: "images/m-act4.png", link: "Midterm/Act4/home.html" },
    { title: "Midterm Act 5", desc: "PC builder landing page.", img: "images/m-act5.png", link: "Midterm/Act5/home.html" }
];

const finals = [
    { title: "Final 1", desc: "Final Number 1.", img: "images/f-1.png", link: "Finals/Final1/Portfolio.html" },
    { title: "Final 2", desc: "Final Number 2.", img: "images/f-2.png", link: "Finals/Final2/index.html" },
    { title: "Final 3", desc: "Final Number 3.", img: "images/f-3.png", link: "Finals/Final3/Index.html" }
];

function renderCards(list, gridId) {
    const grid = document.getElementById(gridId);
    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <div class="thumb">
                <img src="${item.img}" alt="${item.title}" onerror="this.remove()">
                <span class="fallback">🖥️</span>
            </div>
            <div class="card-body">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="${item.link}">View Activity →</a>
            </div>`;
        grid.appendChild(card);

        // Kapag may picture na, itago ang emoji
        const img = card.querySelector("img");
        const emoji = card.querySelector(".fallback");
        img.addEventListener("load", () => (emoji.style.display = "none"));
    });
}
renderCards(midterm, "midtermGrid");
renderCards(finals, "finalsGrid");

const words = ["Web Developer", "Problem Solver", "Always Learning"];
const typing = document.getElementById("typing");
let w = 0, ch = 0, deleting = false;

function type() {
    const word = words[w];
    typing.textContent = word.substring(0, ch);
    if (!deleting && ch < word.length) ch++;
    else if (deleting && ch > 0) ch--;
    else if (!deleting) { deleting = true; return setTimeout(type, 1200); }
    else { deleting = false; w = (w + 1) % words.length; }
    setTimeout(type, deleting ? 50 : 100);
}
type();

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let dots = [];

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const count = Math.min(90, Math.floor(innerWidth / 15));
    dots = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        r: Math.random() * 2 + 1
    }));
}
resize();
addEventListener("resize", resize);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((d, i) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,211,238,.8)";
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
            const dx = d.x - dots[j].x, dy = d.y - dots[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < 130) {
                ctx.beginPath();
                ctx.moveTo(d.x, d.y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.strokeStyle = `rgba(99,102,241,${1 - dist / 130})`;
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animate);
}
animate();
