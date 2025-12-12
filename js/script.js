/* =============================
   THEME SYSTEM — INP OPTIMIZADO
============================= */
const themeToggle = document.getElementById("themeToggle");

function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
    themeToggle.textContent = mode === "dark" ? "🌙" : "☀️";
}

// Leer la preferencia guardada
const saved = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (saved) {
    // Si hay tema guardado, lo aplicamos (sobrescribe el CSS del sistema)
    setTheme(saved);
} else {
    // Si no hay tema guardado, solo actualizamos el ícono del botón para reflejar el tema CSS
    themeToggle.textContent = systemDark ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
    // Obtenemos el tema actual (guardado o aplicado por el CSS del sistema)
    let current = document.documentElement.getAttribute("data-theme");
    
    if (!current) {
        // Si no hay data-theme, asumimos el tema opuesto al que el sistema aplicó
        current = systemDark ? "dark" : "light";
    }

    setTheme(current === "dark" ? "light" : "dark");
});


/* =============================
   MOBILE MENU
============================= */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav")?.querySelector("ul");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
}

/* =============================
   SCROLL REVEAL
============================= */
const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    reveals.forEach(r => observer.observe(r));
}

/* =============================
   HERO – ANIMACIÓN LETRA POR LETRA (INP OPTIMIZADO)
============================= */
document.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".hero-title");
    const subtitle = document.querySelector(".hero-sub");

    if (!title || !subtitle) return;

    // Guardar texto original
    const originalText = title.textContent;

    if (!originalText || originalText.length === 0) return;

    title.style.opacity = "0";

    function animateTitle() {
        title.innerHTML = ""; // vaciar antes de animar

        originalText.split("").forEach((char, i) => {
            const span = document.createElement("span");

            // Si es un espacio, usamos &nbsp; para que NO se pierda
            if (char === " ") {
                span.innerHTML = "&nbsp;";
            } else {
                span.textContent = char;
            }

            // Aplicamos la clase y el delay como variable CSS (INP FIX)
            span.classList.add('animated-char');
            span.style.setProperty('--delay', `${i * 0.03 + 0.25}s`);

            title.appendChild(span);
        });

        title.style.opacity = "1";

        // Subtítulo
        setTimeout(() => {
            // Aplicamos la clase para activar la animación CSS del subtítulo
            subtitle.classList.add('visible'); 
        }, 300);
    }

    // Observer
    const heroObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTitle();
                    heroObserver.disconnect();
                }
            });
        },
        { threshold: 0.5 }
    );

    heroObserver.observe(title);
});
