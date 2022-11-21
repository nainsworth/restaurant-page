import loadHome from "./home.js";
import loadMenu from "./menu.js";

// Header
const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const nav = document.createElement("ul");
  nav.classList.add("nav");

  const logo = document.createElement("img");

  const navToggle = document.createElement("a");
  navToggle.classList.add("toggle-btn");

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
    const homeLink = document.createElement("a");
    homeLink.textContent = "Home";

    const menu = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.textContent = "Menu";

    const location = document.createElement("li");
    const locationLink = document.createElement("a");
    locationLink.textContent = "Location";

    const reservation = document.createElement("li");
    const reservationLink = document.createElement("a");
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
      loadHome();
    });
    menu.addEventListener("click", () => {
      removeSelectedClass();
      removeActiveClass();
      menu.classList.add("selected");
      loadMenu();
    });
    location.addEventListener("click", () => {
      removeSelectedClass();
      removeActiveClass();
      location.classList.add("selected");
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

  return header;
};

// Main
const createMain = () => {
  const main = document.createElement("div");
  main.classList.add("main");

  return main;
};

// Footer
const createFooter = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const githubLink = document.createElement("a");
  githubLink.href = "https://www.github.com/nainsworth";
  githubLink.target = "_blank";
  githubLink.textContent = "NAINSWORTH";

  const githubImg = document.createElement("img");
  githubImg.src = "/src/img/github.svg";
  githubImg.alt = "github logo";

  footer.appendChild(githubLink);
  githubLink.appendChild(githubImg);

  return footer;
};

const loadWebpage = () => {
  const content = document.querySelector(".content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHome();
};

export default loadWebpage;
