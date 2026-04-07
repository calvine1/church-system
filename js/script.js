/* =========================
ROLE-BASED LOGIN SYSTEM
========================= */

const loginForm = document.getElementById('loginForm');

if(loginForm){
loginForm.addEventListener('submit', function(e){
e.preventDefault();

const username = document.getElementById('username').value.trim().toLowerCase();
const password = document.getElementById('password').value.trim();

// SUPER ADMIN
if(username === "superadmin" && password === "1234"){
  alert("Welcome Super Admin");
  window.location.href = "superadmin-dashboard.html";
}

// CHURCH ADMIN
else if(username === "admin" && password === "1234"){
  alert("Welcome Church Admin");
  window.location.href = "admin-dashboard.html";
}

// MEMBER
else if(username === "member" && password === "1234"){
  alert("Welcome Member");
  window.location.href = "member-dashboard.html";
}

// INVALID LOGIN
else{
  alert("Invalid username or password");
}

});
}
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

    // For now, any login goes to role selection
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
  const linkPage = link.getAttribute("href").split("/").pop();

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
   Works for pages with .search-box
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
   For frontend demo buttons only
========================= */
const actionButtons = document.querySelectorAll(".primary-btn");

actionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert(`${this.textContent} feature will be connected in backend.`);
  });
});

/* =========================
   OPTIONAL TABLE ROW HOVER EFFECT
========================= */
const tableRows = document.querySelectorAll(".data-table tbody tr");

tableRows.forEach((row) => {
  row.addEventListener("mouseenter", () => {
    row.style.transition = "0.2s ease";
  });
});

/* =========================
   SIMPLE PAGE LOAD LOG
========================= */
console.log("Church Management System loaded successfully.");