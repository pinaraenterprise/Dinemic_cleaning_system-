/**
 * PINARA ENTERPRISE - Client-Side Controller
 * Fully configured with real business credentials and graceful media fallbacks.
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
    description: "High-capacity plant wiring, distribution switchboards, machinery load connections, and power factor correction."
  },
  {
    icon: "📹",
    title: "CCTV Installation & Setup",
    description: "HD & 4K IP security cameras, NVR/DVR storage arrays, and secure 24/7 mobile live streaming configuration."
  },
  {
    icon: "📡",
    title: "D2H Satellite Installation",
    description: "Millimeter-precision dish alignment, RG6 low-loss cabling, LNB replacements, and multi-room set-top box setups."
  },
  {
    icon: "🔧",
    title: "Electrical Fault Clearance",
    description: "Rapid isolation and repair of short circuits, persistent breaker trips, motor overload issues, and cable dropouts."
  },
  {
    icon: "🏭",
    title: "Heavy Conduit & Wiring",
    description: "Structured industrial cable trays, metallic conduit paths, earthing installation, and commercial building wiring."
  },
  {
    icon: "🛡️",
    title: "Surveillance Audits & Upgrades",
    description: "Full site security coverage audits, wireless Wi-Fi camera deployments, and old analog-to-IP system modernizations."
  }
];

/* ==========================================================================
   3. INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  bindBusinessLinks();
  initNavigation();
  initDynamicYear();
  initImagePlaceholders();
});

/**
 * Dynamically builds service cards
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
 * Binds active contact details to all CTA buttons
 */
function bindBusinessLinks() {
  const defaultMsg = encodeURIComponent("Hello PINARA ENTERPRISE, I need information about your services.");
  const cctvMsg = encodeURIComponent("Hello PINARA ENTERPRISE, I would like to get a quote for CCTV installation.");
  const elecMsg = encodeURIComponent("Hello PINARA ENTERPRISE, I would like to inquire about Electrical services.");

  const callHref = `tel:${BUSINESS.phone}`;
  const baseWaHref = `https://wa.me/${BUSINESS.whatsapp}?text=`;

  // 1. Phone Links
  document.querySelectorAll(".dynamic-call-btn").forEach(btn => {
    btn.setAttribute("href", callHref);
  });

  // 2. WhatsApp Links
  document.querySelectorAll(".dynamic-wa-btn").forEach(btn => {
    btn.setAttribute("href", `${baseWaHref}${defaultMsg}`);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // 3. CCTV Dedicated Button
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

  // 5. Maps Link
  document.querySelectorAll(".dynamic-maps-btn").forEach(btn => {
    btn.setAttribute("href", BUSINESS.maps);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });
}

/**
 * Responsive Hamburger Drawer Toggle
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
 * Sets current year in footer
 */
function initDynamicYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Automatically draws dark SVG placeholders for gallery items if photos are not yet uploaded
 */
function initImagePlaceholders() {
  const galleryImages = document.querySelectorAll(".gallery-img");
  galleryImages.forEach(img => {
    img.addEventListener("error", function () {
      const parentTag = this.parentElement.querySelector(".gallery-tag");
      const label = parentTag ? encodeURIComponent(parentTag.textContent.trim()) : "Project";
      this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="100%" height="100%" fill="%23121826"/><text x="50%" y="50%" fill="%2300d2ff" font-size="20" font-family="sans-serif" text-anchor="middle" dy=".3em">${label}</text></svg>`;
    });
  });
}
