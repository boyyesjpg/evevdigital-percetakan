/* ==========================================================================
   🌓 EvEvDigital Theme Switcher Engine (Anti-FOUC + Smooth Dark/Light Mode)
   ========================================================================== */

(function () {
  const STORAGE_KEY = "evev_theme_percetakan";

  const SUN_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `;

  const MOON_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;

  function readSavedTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "dark" || saved === "light") return saved;
    } catch (_) {
      // Abaikan jika storage diblokir browser
    }
    return null;
  }

  function getPreferredTheme() {
    const saved = readSavedTheme();
    if (saved) return saved;

    const currentAttr = document.documentElement.getAttribute("data-theme");
    if (currentAttr === "dark" || currentAttr === "light") return currentAttr;

    if (window.PROFIL_USAHA && (window.PROFIL_USAHA.temaDefault === "dark" || window.PROFIL_USAHA.temaDefault === "light")) {
      return window.PROFIL_USAHA.temaDefault;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function syncToggleButtons(theme) {
    const isDark = theme === "dark";
    document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
      btn.innerHTML = isDark ? SUN_ICON : MOON_ICON;
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute(
        "title",
        isDark ? "Beralih ke Mode Terang (Light Mode)" : "Beralih ke Mode Gelap (Dark Mode)"
      );
      btn.setAttribute(
        "aria-label",
        isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"
      );
    });
  }

  function applyTheme(theme, persist) {
    const normalized = theme === "dark" ? "dark" : "light";
    const root = document.documentElement;
    root.setAttribute("data-theme", normalized);
    root.style.colorScheme = normalized;

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, normalized);
      } catch (_) {
        // Abaikan jika storage diblokir
      }
    }

    syncToggleButtons(normalized);
    window.dispatchEvent(new CustomEvent("evev:themechange", { detail: { theme: normalized } }));
  }

  window.getTheme = function () {
    return document.documentElement.getAttribute("data-theme") || getPreferredTheme();
  };

  window.setTheme = function (theme) {
    applyTheme(theme, true);
  };

  window.toggleTheme = function () {
    const next = window.getTheme() === "dark" ? "light" : "dark";
    applyTheme(next, true);
  };

  // Pastikan tema diterapkan segera sebelum render jika belum di-set oleh inline Anti-FOUC
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);
  document.documentElement.style.colorScheme = initialTheme;

  // Lepaskan kelas no-theme-transition setelah paint pertama agar switch berikutnya mulus
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.documentElement.classList.remove("no-theme-transition");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    syncToggleButtons(window.getTheme());

    document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
      if (btn.dataset.themeBound === "1") return;
      btn.dataset.themeBound = "1";
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.toggleTheme();
      });
    });
  });

  // Sinkronisasi otomatis antar-tab browser
  window.addEventListener("storage", function (e) {
    if (e.key === STORAGE_KEY && (e.newValue === "dark" || e.newValue === "light")) {
      applyTheme(e.newValue, false);
    }
  });

  // Ikuti perubahan tema OS jika user belum menyimpan preferensi manual
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleOSChange = function (e) {
      if (!readSavedTheme()) {
        applyTheme(e.matches ? "dark" : "light", false);
      }
    };
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleOSChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleOSChange);
    }
  }
})();
