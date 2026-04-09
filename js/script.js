/* =========================================================
   CHURCH MANAGEMENT SYSTEM - FINAL SCRIPT
   ========================================================= */

/* =========================
   LOGIN FLOW
========================= */
window.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        alert("Please enter username and password.");
        return;
      }

      // DEMO LOGIN FLOW
      if (username === "superadmin") {
        window.location.assign("superadmin-dashboard.html");
      } else if (username === "admin") {
        window.location.assign("admin-dashboard.html");
      } else if (username === "member") {
        window.location.assign("member-dashboard.html");
      } else {
        // Any other filled username/password goes to role selection
        window.location.assign("select-role.html");
      }
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
          window.location.assign("superadmin-dashboard.html");
        } else if (role === "admin") {
          window.location.assign("admin-dashboard.html");
        } else if (role === "member") {
          window.location.assign("member-dashboard.html");
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
});