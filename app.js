/* =========================================================================
   RENDER ENGINE — builds the page from content.js.
   You do NOT need to edit this file. Edit content.js instead.
   ========================================================================= */
(function () {
  "use strict";

  const C = window.CONTENT || {};
  const $ = (sel) => document.querySelector(sel);
  const $all = (sel) => Array.from(document.querySelectorAll(sel));

  // Safely escape user text so quotes/symbols don't break the page.
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---------- Social icons (inline SVG so nothing external is needed) ---- */
  const ICONS = {
    github:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    email:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
    website:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></svg>',
    twitter:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.2h3.7l-8 9.1 9.4 12.4h-7.4l-5.8-7.6-6.6 7.6H.5l8.5-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L7.1 3.3H5l12.6 17.3z"/></svg>',
    orcid:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM7.4 18.4H5.5V7.6h1.9v10.8zM6.4 6.3a1.1 1.1 0 1 1 0-2.3 1.1 1.1 0 0 1 0 2.3zm12 12.1h-1.9v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8v5.4H9V7.6h1.8v1.5h.1c.3-.6 1.1-1.3 2.4-1.3 2.5 0 3 1.7 3 3.9v6.7z"/></svg>',
  };

  /* ------------------------------------------------------------- BASICS --- */
  const setText = (attr, value) => $all("[data-" + attr + "]").forEach((el) => (el.textContent = value || ""));

  document.title = (C.name || "Portfolio") + " — " + (C.title || "");
  setText("name", C.name);
  setText("title", C.title);
  setText("tagline", C.tagline);
  setText("location", C.location);
  $all("[data-brand]").forEach((el) => (el.textContent = C.name || "Portfolio"));

  // CV download links
  $all("[data-cv-link]").forEach((el) => {
    el.setAttribute("href", C.cvFile || "#");
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    if (C.cvFile) el.setAttribute("download", "");
  });

  // Avatar: photo if provided, otherwise initials.
  const avatar = $("[data-avatar]");
  if (avatar) {
    if (C.profileImage) {
      avatar.style.backgroundImage = "url('" + C.profileImage + "')";
      avatar.textContent = "";
    } else {
      const initials = (C.name || "")
        .split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
      avatar.textContent = initials || "★";
    }
  }

  // Social buttons in hero
  const social = $("[data-social]");
  if (social && Array.isArray(C.social)) {
    social.innerHTML = C.social.map((s) =>
      '<a href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' + esc(s.label) + '" title="' + esc(s.label) + '">'
      + (ICONS[s.icon] || ICONS.website) + '</a>'
    ).join("");
  }

  /* -------------------------------------------------------------- ABOUT --- */
  const about = $("[data-about]");
  if (about && Array.isArray(C.about)) {
    about.innerHTML = C.about.map((p) => "<p>" + esc(p) + "</p>").join("");
  }

  const highlights = $("[data-highlights]");
  if (highlights && Array.isArray(C.highlights)) {
    highlights.innerHTML = C.highlights.map((h) =>
      '<div class="stat"><div class="stat__value">' + esc(h.value) + '</div><div class="stat__label">' + esc(h.label) + '</div></div>'
    ).join("");
  }

  /* ------------------------------------------------------------- SKILLS --- */
  const skills = $("[data-skills]");
  if (skills && Array.isArray(C.skills)) {
    skills.innerHTML = C.skills.map((group) =>
      '<div class="skill-card"><h3>' + esc(group.category) + '</h3><div class="chips">'
      + (group.items || []).map((i) => '<span class="chip">' + esc(i) + '</span>').join("")
      + '</div></div>'
    ).join("");
  }

  /* --------------------------------------------------------- EXPERIENCE --- */
  const experience = $("[data-experience]");
  if (experience && Array.isArray(C.experience)) {
    experience.innerHTML = C.experience.map((job) =>
      '<div class="tl-item">'
      + '<div class="tl-head"><span class="tl-role">' + esc(job.role) + '</span>'
      + '<span class="tl-period">' + esc(job.period) + '</span></div>'
      + '<div class="tl-company">' + esc(job.company) + '</div>'
      + (job.location ? '<div class="tl-location">' + esc(job.location) + '</div>' : '')
      + '<ul class="tl-points">' + (job.points || []).map((p) => '<li>' + esc(p) + '</li>').join("") + '</ul>'
      + '</div>'
    ).join("");
  }

  /* -------------------------------------------------------- VOLUNTEERING -- */
  const volunteering = $("[data-volunteering]");
  if (volunteering) {
    if (Array.isArray(C.volunteering) && C.volunteering.length) {
      volunteering.innerHTML = C.volunteering.map((v) =>
        '<div class="tl-item">'
        + '<div class="tl-head"><span class="tl-role">' + esc(v.role) + '</span>'
        + '<span class="tl-period">' + esc(v.period) + '</span></div>'
        + '<div class="tl-company">' + esc(v.organization) + '</div>'
        + (v.location ? '<div class="tl-location">' + esc(v.location) + '</div>' : '')
        + '<ul class="tl-points">' + (v.points || []).map((p) => '<li>' + esc(p) + '</li>').join("") + '</ul>'
        + '</div>'
      ).join("");
    } else {
      const empty = $("[data-volunteering-empty]");
      if (empty) empty.style.display = "block";
    }
  }

  // Hide any "View all projects" link when everything already fits on the page.
  const moreLink = $("[data-projects-more]");
  const projEl = $("[data-projects]");
  if (moreLink && projEl) {
    const lim = parseInt(projEl.getAttribute("data-projects"), 10);
    if (isNaN(lim) || (C.projects || []).length <= lim) moreLink.style.display = "none";
  }

  /* ------------------------------------------------------------ PROJECTS -- */
  const linkIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
  const chipIcon = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/></svg>';
  const projects = $("[data-projects]");
  if (projects && Array.isArray(C.projects)) {
    // If the container says e.g. data-projects="3", show only the first 3
    // (used for the "Featured projects" preview on the home page).
    let projItems = C.projects;
    const limit = parseInt(projects.getAttribute("data-projects"), 10);
    if (!isNaN(limit) && limit > 0) projItems = projItems.slice(0, limit);
    projects.innerHTML = projItems.map((p) =>
      '<div class="project">'
      + '<div class="project__top"><span class="project__icon">' + chipIcon + '</span>'
      + (p.link ? '<a class="project__link" href="' + esc(p.link) + '" target="_blank" rel="noopener" aria-label="Open project">' + linkIcon + '</a>' : '')
      + '</div>'
      + '<h3>' + esc(p.name) + '</h3>'
      + '<p>' + esc(p.description) + '</p>'
      + '<div class="project__tags">' + (p.tags || []).map((t) => '<span>' + esc(t) + '</span>').join("") + '</div>'
      + '</div>'
    ).join("");
  }

  /* ----------------------------------------------------------- EDUCATION -- */
  const education = $("[data-education]");
  if (education && Array.isArray(C.education)) {
    education.innerHTML = C.education.map((e) =>
      '<div class="tl-item">'
      + '<div class="tl-head"><span class="tl-role">' + esc(e.degree) + '</span>'
      + '<span class="tl-period">' + esc(e.period) + '</span></div>'
      + '<div class="tl-company">' + esc(e.institution) + '</div>'
      + (e.detail ? '<div class="tl-detail">' + esc(e.detail) + '</div>' : '')
      + '</div>'
    ).join("");
  }

  const certs = $("[data-certifications]");
  if (certs) {
    if (Array.isArray(C.certifications) && C.certifications.length) {
      certs.innerHTML = C.certifications.map((c) =>
        '<div class="cert"><div class="cert__name">' + esc(c.name) + '</div>'
        + '<div class="cert__meta">' + esc(c.issuer) + (c.year ? ' · ' + esc(c.year) : '') + '</div></div>'
      ).join("");
    } else {
      certs.style.display = "none";
    }
  }

  /* ------------------------------------------------------------ CONTACT --- */
  const contact = $("[data-contact]");
  if (contact) {
    const cards = [];
    if (C.email)    cards.push({ href: "mailto:" + C.email, icon: ICONS.email, text: C.email });
    if (C.phone)    cards.push({ href: "tel:" + C.phone.replace(/\s+/g, ""), icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>', text: C.phone });
    (C.social || []).forEach((s) => cards.push({ href: s.url, icon: ICONS[s.icon] || ICONS.website, text: s.label }));
    contact.innerHTML = cards.map((c) =>
      '<a class="contact-card" href="' + esc(c.href) + '" target="_blank" rel="noopener">' + c.icon + '<span>' + esc(c.text) + '</span></a>'
    ).join("");
  }

  /* ------------------------------------------------------------- FOOTER --- */
  $all("[data-copyright]").forEach((el) =>
    (el.textContent = "© " + new Date().getFullYear() + " " + (C.name || "") + ". All rights reserved."));

  /* --------------------------------------------------- INTERACTIONS ------ */
  // Mobile menu
  const toggle = $("#navToggle");
  const navLinks = $("#navLinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.addEventListener("click", (e) => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });
  }

  // Nav shadow on scroll
  const nav = $("#nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll); onScroll();

  // Reveal-on-scroll animation
  $all(".section, .hero__text, .hero__aside").forEach((el) => el.setAttribute("data-reveal", ""));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    $all("[data-reveal]").forEach((el) => io.observe(el));
  } else {
    $all("[data-reveal]").forEach((el) => el.classList.add("in"));
  }
})();
