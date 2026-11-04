"use strict";

// Accessible mobile navigation.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Publication filtering (usable without any external dependencies).
const filters = Array.from(document.querySelectorAll(".filter-chip"));
const publications = Array.from(document.querySelectorAll(".publication"));
filters.forEach((button) => {
  button.addEventListener("click", () => {
    const tag = button.dataset.filter;
    filters.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });
    publications.forEach((entry) => {
      const tags = (entry.dataset.tags || "").split(/\s+/);
      entry.hidden = tag !== "all" && !tags.includes(tag);
    });
  });
});

// Copy a short plain-text citation, with a fallback for local file:// previews.
const toast = document.getElementById("toast");
let toastTimeout;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2300);
}
async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const target = document.createElement("textarea");
  target.value = value;
  target.setAttribute("readonly", "");
  target.style.cssText = "position:fixed;left:-9999px;top:0";
  document.body.appendChild(target);
  target.select();
  const success = document.execCommand("copy");
  target.remove();
  if (!success) throw new Error("Copy is not supported by this browser.");
}
document.querySelectorAll(".citation-copy").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await copyText(button.dataset.citation || "");
      showToast("Citation copied to clipboard");
    } catch {
      showToast("Copy unavailable; please select the citation manually");
    }
  });
});

document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());

// Keep top navigation in sync with the current reading section.
const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll("#primary-nav a[href^='#']"));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-20% 0px -68% 0px", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
