import content from "./index";
import createHero from "./home";
import createMenu from "./menu";

const activePage = "home";

// Header
const createHeader = () => {
  const header = document.createElement("div");
  const nav = document.createElement("ul");
  const logo = document.createElement("img");
  const navToggle = document.createElement("a");

  header.classList.add("header");

  content.appendChild(header);

  // Logo
  const renderLogo = () => {
    logo.classList.add("logo");
    logo.src = "/src/img/logo.png";
    logo.alt = "logo";

    header.appendChild(logo);
  };

  // Nav
  const renderNav = () => {
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const location = document.createElement("li");
    const reservation = document.createElement("li");
    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const locationLink = document.createElement("a");
    const reservationLink = document.createElement("a");

    nav.classList.add("nav");

    homeLink.textContent = "Home";
    menuLink.textContent = "Menu";
    locationLink.textContent = "Location";
    reservationLink.textContent = "Reserve Table";

    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(location);
    nav.appendChild(reservation);
    home.appendChild(homeLink);
    menu.appendChild(menuLink);
    location.appendChild(locationLink);
    reservation.appendChild(reservationLink);

    home.addEventListener("click", () => {
      removeSelectedClass();
      removeActiveClass();
      home.classList.add("selected");
      logo.classList.add("main");
      
    });
    menu.addEventListener("click", () => {
      removeSelectedClass();
      removeActiveClass();
      menu.classList.add("selected");
      activePage = "menu";
    });
    location.addEventListener("click", () => {
      removeSelectedClass();
      removeActiveClass();
      location.classList.add("selected");
      activePage = "location";
    });
    reservation.addEventListener("click", () => {
      removeActiveClass();
      home.classList.add("selected");
    });

    const removeSelectedClass = () => {
      home.classList.remove("selected");
      menu.classList.remove("selected");
      location.classList.remove("selected");
    };

    const removeActiveClass = () => {
      nav.classList.remove("active");
      header.classList.remove("active");
      logo.classList.remove("active");
      navToggle.classList.remove("active");
    };
  };

  // Mobile Nav
  const renderMobileNav = () => {
    const topBar = document.createElement("span");
    const midBar = document.createElement("span");
    const lowBar = document.createElement("span");

    navToggle.classList.add("toggle-btn");
    topBar.classList.add("bar");
    midBar.classList.add("bar");
    lowBar.classList.add("bar");

    header.appendChild(navToggle);
    navToggle.appendChild(topBar);
    navToggle.appendChild(midBar);
    navToggle.appendChild(lowBar);

    navToggle.addEventListener("click", () => {
      nav.classList.add("active");
      navToggle.classList.add("active");
      header.classList.add("active");
      logo.classList.add("active");
    });
  };

  renderLogo();
  renderNav();
  renderMobileNav();
};

// Main
const renderMain = () => {
  if (activePage === "home") {
    createHero();
  }
  else if (activePage === "menu") {
    createMenu();
  }
};

// Footer
const createFooter = () => {
  const footer = document.createElement("div");
  const githubLink = document.createElement("a");
  const githubImg = document.createElement("img");

  footer.classList.add("footer");

  githubLink.href = "https://www.github.com/nainsworth";
  githubLink.target = "_blank";
  githubLink.textContent = "NAINSWORTH";

  githubImg.src = "/src/img/github.svg";
  githubImg.alt = "github logo";

  content.appendChild(footer);
  footer.appendChild(githubLink);
  githubLink.appendChild(githubImg);
};

export { createHeader, renderMain, createFooter };
