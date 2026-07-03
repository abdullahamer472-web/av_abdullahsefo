// ==========================================
// SEFO Portfolio v2.0
// Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Loader
    // ==========================================

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (loader) {

            setTimeout(() => {

                loader.style.opacity = "0";
                loader.style.visibility = "hidden";

            }, 800);

        }

    });

    // ==========================================
    // Sticky Header
    // ==========================================

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    // ==========================================
    // Active Navigation
    // ==========================================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    // ==========================================
    // Scroll To Top
    // ==========================================

    const scrollTopBtn = document.getElementById("scrollTop");

    if (scrollTopBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                scrollTopBtn.classList.add("show");

            } else {

                scrollTopBtn.classList.remove("show");

            }

        });

        scrollTopBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    // ==========================================
    // Scroll Reveal
    // ==========================================

    const revealItems = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        revealItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {

                item.classList.add("active");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    // ==========================================
    // Smooth Navigation
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

    // ==========================================
    // Mobile Menu
    // ==========================================

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.querySelector(".nav-links");

    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {

            mobileNav.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("active");

            });

        });

    }

    // ==========================================
    // Language Circles Animation
    // ==========================================

    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {

        const percent = circle.dataset.percent;

        if (percent) {

            circle.style.setProperty("--percent", percent + "%");

        }

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("animate");

            }

        });

    }, { threshold: 0.4 });

    circles.forEach(circle => {

        observer.observe(circle);

    });

});
