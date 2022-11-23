import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadLocation from "./location.js";

// Header
const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  // Logo
  const renderLogo = () => {
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "/src/img/logo.png";
    logo.alt = "logo";

    header.appendChild(logo);
  };

  // Nav
  const renderNav = () => {
    const nav = document.createElement("ul");
    nav.classList.add("nav");

    const home = document.createElement("li");
    const homeLink = document.createElement("a");
    home.classList.add("selected");
    homeLink.textContent = "Home";
    home.addEventListener("click", (e) => {
      if (e.target.classList.contains("selected")) return;
      removeSelectedClass();
      home.classList.add("selected");
      loadHome();
    });

    const menu = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.textContent = "Menu";
    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("selected")) return;
      removeSelectedClass();
      menu.classList.add("selected");
      loadMenu();
    });

    const location = document.createElement("li");
    const locationLink = document.createElement("a");
    locationLink.textContent = "Location";
    location.addEventListener("click", (e) => {
      if (e.target.classList.contains("selected")) return;
      removeSelectedClass();
      location.classList.add("selected");
      loadLocation();
    });

    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(location);
    home.appendChild(homeLink);
    menu.appendChild(menuLink);
    location.appendChild(locationLink);

    const removeSelectedClass = () => {
      home.classList.remove("selected");
      menu.classList.remove("selected");
      location.classList.remove("selected");
    };
  };

  renderLogo();
  renderNav();

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
