/* =========================================================
   CHURCH MANAGEMENT SYSTEM - FINAL SCRIPT
   ========================================================= */

/* =========================
   LOGIN FLOW
========================= */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "select-role.html";
  });
}

/* =========================
   ROLE SELECTION FLOW
========================= */
const roleCards = document.querySelectorAll(".role-card");

if (roleCards.length > 0) {
  roleCards.forEach((card) => {
    card.addEventListener("click", function () {
      const role = this.getAttribute("data-role");

      if (role === "superadmin") {
        window.location.href = "superadmin-dashboard.html";
      } else if (role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else if (role === "member") {
        window.location.href = "member-dashboard.html";
      }
    });
  });
}

/* =========================
   ACTIVE SIDEBAR LINK
========================= */
const currentPage = window.location.pathname.split("/").pop();
const sidebarLinks = document.querySelectorAll(".sidebar-nav a");

sidebarLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;

  const linkPage = href.split("/").pop();

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

/* =========================
   SIDEBAR TOGGLE (ESC KEY)
========================= */
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (sidebar && mainContent) {
      sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("expanded");
    }
  }
});

/* =========================
   SEARCH TABLES
========================= */
const searchBoxes = document.querySelectorAll(".search-box");

searchBoxes.forEach((input) => {
  input.addEventListener("keyup", function () {
    const filter = this.value.toUpperCase();
    const sectionCard = this.closest(".section-card");
    if (!sectionCard) return;

    const table = sectionCard.querySelector(".data-table");
    if (!table) return;

    const rows = table.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const rowText = row.textContent.toUpperCase();
      row.style.display = rowText.includes(filter) ? "" : "none";
    });
  });
});

/* =========================
   PLACEHOLDER BUTTON ALERTS
========================= */
const actionButtons = document.querySelectorAll(".primary-btn");

actionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert(`${this.textContent} feature will be connected in backend.`);
  });
});

console.log("Church Management System loaded successfully.");