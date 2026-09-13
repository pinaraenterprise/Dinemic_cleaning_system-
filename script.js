/**
 * DYNAMIC CLEANING SYSTEM - Modern Technical Architecture
 * Configured with complete equipment catalog and WhatsApp estimation desk
 */

/* ==========================================================================
   1. EDITABLE CONTACT CONFIGURATION
   ========================================================================== */
const BUSINESS = {
  name: "DYNAMIC CLEANING SYSTEM",
  phone: "+918128323855",             // Update with your primary calling number
  whatsapp: "918128323855",           // Update with your primary WhatsApp number
  inquiryPhone: "+919987785652",      // Technical Sales Desk Number
  email: "contact@pinara.in",         // Official Business Email
  maps: "https://maps.app.goo.gl/HiBjnrEPkg8b9mZF7",
  location: "Kutch / Gujarat / Mumbai, India"
};

/* ==========================================================================
   2. EQUIPMENT & SERVICE CATALOG (Full Range from dcsystem.weebly.com)
   ========================================================================== */
const PRODUCTS_DATA = [
  {
    icon: "🌪️",
    category: "Vacuum Tech",
    title: "Industrial Vacuum Cleaners",
    range: "₹15,500 – ₹1,87,000 + GST",
    description: "Extensive line-up of heavy-duty wet & dry extractors, backpack units, and flame-proof industrial vacuum machines powered by single-phase or 3-phase high-torque induction motors."
  },
  {
    icon: "🚜",
    category: "Sweeping Tech",
    title: "Road & Yard Sweeping Machines",
    range: "₹25,500 – ₹11,87,000 + GST",
    description: "Mechanical walk-behind, battery-powered, and ride-on sweeping machines engineered for concrete factory roads, industrial yards, ports, and logistics warehouses."
  },
  {
    icon: "✨",
    category: "Floor Care",
    title: "Floor Scrubbing & Polishing",
    range: "₹15,500 – ₹9,97,000 + GST",
    description: "Single-disc scrubbers, high-speed burnishers, and automatic walk-behind & ride-on scrubber-driers ideal for marble, Kota stone, granite, ceramic, and epoxy shop floors."
  },
  {
    icon: "💦",
    category: "Pressure Washers",
    title: "High-Pressure Jet Cleaners & Blasters",
    range: "₹15,500 – ₹8,87,000 + GST",
    description: "100 Bar to 2000 Bar pressure washers. Cold water, hot water, and steam blasters for grease removal, cement/paint stripping, tube & reactor vessel cleaning, and flame-proof applications."
  },
  {
    icon: "🚪",
    category: "Barriers & Safety",
    title: "PVC Strip Curtains & Rolls",
    range: "Custom Roll / Door Fabrication",
    description: "Clear and ribbed transparent flexible PVC strip doors. Controls temperature, prevents dust & fly ingress, isolates operational noise, and enhances cleanroom hygiene."
  },
  {
    icon: "🛡️",
    category: "Floor Safety",
    title: "Duro Active & Anti-Fatigue Mats",
    range: "Standard & Custom Dimensions",
    description: "Ergonomic shock-absorbing floor mats for operator standing stations. Reduces fatigue, improves posture, and includes Duro Wipe moisture-trap entrance matting."
  },
  {
    icon: "🧴",
    category: "Hygiene",
    title: "Sanitizing & ULV Fogging Systems",
    range: "Commercial Hygiene Kits",
    description: "Aerosol disinfection machines, cold foggers, and chemical delivery devices for food processing plants, packaging bays, pharmaceutical suites, and corporate offices."
  },
  {
    icon: "🛠️",
    category: "Lifecycle Support",
    title: "Multi-Brand Servicing & AMCs",
    range: "AMC from ₹3,500 – ₹10,500 + GST",
    description: "Annual Maintenance Contracts, scheduled preventive inspections, emergency breakdown repair, and authentic replacement spares for all industrial cleaning brands."
  }
];

/* ==========================================================================
   3. APP INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  bindBusinessLinks();
  initNavigation();
  initDynamicYear();
  initQuoteForm();
});

function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  container.innerHTML = PRODUCTS_DATA.map(item => `
    <article class="service-card">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <span class="service-icon" aria-hidden="true">${item.icon}</span>
          <span class="price-pill">${item.range}</span>
        </div>
        <span class="badge" style="font-size:0.7rem; padding:3px 10px; margin-bottom:0.5rem;">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <a href="#quote-calculator" class="service-link" onclick="preselectMachine('${item.title}')">
        Inquire / Get Quote <span aria-hidden="true">&rarr;</span>
      </a>
    </article>
  `).join("");
}

function preselectMachine(title) {
  const select = document.getElementById("quote-equipment");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(title.toLowerCase().split(" ")[0])) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function bindBusinessLinks() {
  const defaultMsg = encodeURIComponent("Hello Dynamic Cleaning System, I need technical details and pricing for your cleaning equipment.");
  const callHref = `tel:${BUSINESS.phone}`;
  const baseWaHref = `https://wa.me/${BUSINESS.whatsapp}?text=`;

  document.querySelectorAll(".dynamic-call-btn").forEach(btn => btn.setAttribute("href", callHref));
  document.querySelectorAll(".dynamic-wa-btn").forEach(btn => {
    btn.setAttribute("href", `${baseWaHref}${defaultMsg}`);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });
  document.querySelectorAll(".dynamic-maps-btn").forEach(btn => {
    btn.setAttribute("href", BUSINESS.maps);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });
}

function initQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const equipment = document.getElementById("quote-equipment").value;
    const scale = document.getElementById("quote-scale").value;
    const name = document.getElementById("quote-name").value;
    const location = document.getElementById("quote-location").value;
    const notes = document.getElementById("quote-notes").value || "None";

    const messageText = 
`*NEW EQUIPMENT INQUIRY - DYNAMIC CLEANING SYSTEM*
----------------------------------------
👤 *Contact Name:* ${name}
📍 *Facility Location:* ${location}
⚙️ *Machine / Service:* ${equipment}
📏 *Application Scale:* ${scale}
📝 *Specific Requirements:* ${notes}
----------------------------------------
_Inquiry submitted via online quotation desk_`;

    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encoded}`;
    window.open(waUrl, "_blank");
  });
}

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

function initDynamicYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
