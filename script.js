/**
 * PINARA ENTERPRISE - Client-Side Controller
 * Fully configured for https://pinara.in and GitHub Pages
 */

/* ==========================================================================
   1. BUSINESS CONFIGURATION
   ========================================================================== */
const BUSINESS = {
  name: "PINARA ENTERPRISE",
  phone: "+918128323855",
  whatsapp: "918128323855",
  maps: "https://maps.app.goo.gl/HiBjnrEPkg8b9mZF7",
  email: "contact@pinara.in",
  website: "https://pinara.in",
  address: "73/B Lions Nagar, B/H Perfect Glaze Ind. Ltd., Madhapar Navavas, Madhapar - 370020, Kutch, Gujarat, India"
};

/* ==========================================================================
   2. EMBEDDED SERVICE DATA
   ========================================================================== */
const SERVICES_DATA = [
  {
    icon: "⚡",
    title: "Industrial Electrical Services",
    description: "High-capacity plant wiring, power control distribution panels, machinery connections, and load balancing for workshops and factories."
  },
  {
    icon: "📹",
    title: "CCTV Installation & Setup",
    description: "High-definition camera setups, network IP cameras, DVR/NVR recording systems, and 24/7 remote phone monitoring configuration."
  },
  {
    icon: "📡",
    title: "D2H / Satellite TV Installation",
    description: "Precision satellite dish mounting, millimeter alignment for uninterrupted signal reception, RG6 cabling, and decoder setups."
  },
  {
    icon: "🔧",
    title: "Electrical Troubleshooting & Repair",
    description: "Fast diagnostic tracing for short circuits, circuit breaker trips, voltage drops, and damaged line replacements."
  },
  {
    icon: "🏭",
    title: "Industrial & Domestic Wiring",
    description: "Structured conduit wiring, earthing installation, heavy-duty switchboard modernizations, and new building electrical infrastructure."
  },
  {
    icon: "🛡️",
    title: "Security & Surveillance Solutions",
    description: "Site security coverage planning, Wi-Fi smart camera integrations, cable maintenance, and perimeter protection systems."
  }
];

/* ==========================================================================
   3. CORE APPLICATION INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  bindBusinessLinks();
  initNavigation();
  initDynamicYear();
  initImagePlaceholders();
});

/**
 * Renders service cards into the DOM
 */
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = SERVICES_DATA.map(service => `
    <article class="service-card">
      <div>
        <div class="service-icon" aria-hidden="true">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
      <a href="#contact" class="service-link" aria-label="Learn more about ${service.title}">
        Learn More <span aria-hidden="true">&rarr;</span>
      </a>
    </article>
  `).join("");
}

/**
 * Binds business details to CTA buttons and contact elements
 */
function bindBusinessLinks() {
  const defaultMsg = encodeURIComponent("Hello PINARA ENTERPRISE, I need information about your services.");
  const cctvMsg = encodeURIComponent("Hello PINARA ENTERPRISE, I would like to get a quote for CCTV installation.");
  const elecMsg = encodeURIComponent("Hello PINARA ENTERPRISE, I would like to inquire about Electrical services.");

  const callHref = `tel:${BUSINESS.phone}`;
  const baseWaHref = `https://wa.me/${BUSINESS.whatsapp}?text=`;

  // 1. Phone Call Buttons
  document.querySelectorAll(".dynamic-call-btn").forEach(btn => {
    btn.setAttribute("href", callHref);
  });

  // 2. WhatsApp General Links (Hero, Contact, and Floating Button)
  document.querySelectorAll(".dynamic-wa-btn").forEach(btn => {
    btn.setAttribute("href", `${baseWaHref}${defaultMsg}`);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // 3. CCTV Dedicated Quote Button
  const cctvBtn = document.querySelector(".dynamic-cctv-quote-btn");
  if (cctvBtn) {
    cctvBtn.setAttribute("href", `${baseWaHref}${cctvMsg}`);
    cctvBtn.setAttribute("target", "_blank");
    cctvBtn.setAttribute("rel", "noopener noreferrer");
  }

  // 4. Electrical Dedicated Button
  const elecBtn = document.querySelector(".dynamic-elec-btn");
  if (elecBtn) {
    elecBtn.setAttribute("href", `${baseWaHref}${elecMsg}`);
    elecBtn.setAttribute("target", "_blank");
    elecBtn.setAttribute("rel", "noopener noreferrer");
  }

  // 5. Google Maps Link
  document.querySelectorAll(".dynamic-maps-btn").forEach(btn => {
    btn.setAttribute("href", BUSINESS.maps);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // 6. Textual Contact Information
  const phoneDisplay = document.getElementById("contact-phone-display");
  if (phoneDisplay) {
    phoneDisplay.innerHTML = `<a href="tel:${BUSINESS.phone}">${BUSINESS.phone}</a>`;
  }

  const emailDisplay = document.getElementById("contact-email-display");
  if (emailDisplay) {
    emailDisplay.innerHTML = `<a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>`;
  }
}

/**
 * Mobile Navigation Menu Handler
 */
function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Current Year Dynamic Footer
 */
function initDynamicYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Graceful SVG Fallbacks for Gallery Images
 */
function initImagePlaceholders() {
  const galleryImages = document.querySelectorAll(".gallery-img");
  galleryImages.forEach(img => {
    img.addEventListener("error", function () {
      const parentTag = this.parentElement.querySelector(".gallery-tag");
      const label = parentTag ? encodeURIComponent(parentTag.textContent.trim()) : "Service";
      this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="100%" height="100%" fill="%231a2232"/><text x="50%" y="50%" fill="%2300d2ff" font-size="20" font-family="sans-serif" text-anchor="middle" dy=".3em">${label}</text></svg>`;
    });
  });
}
