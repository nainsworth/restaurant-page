import content from "./index";

// Header
const createHeader = () => {
  const header = document.createElement("div");

  header.classList.add("header");

  content.appendChild(header);

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
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const location = document.createElement("li");
    const online = document.createElement("li");
    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const locationLink = document.createElement("a");
    const onlineLink = document.createElement("a");

    nav.classList.add("nav");

    homeLink.textContent = "Home";
    menuLink.textContent = "Menu";
    locationLink.textContent = "Location";
    onlineLink.textContent = "Order Online";

    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(location);
    nav.appendChild(online);
    home.appendChild(homeLink);
    menu.appendChild(menuLink);
    location.appendChild(locationLink);
    online.appendChild(onlineLink);
  };

  // Mobile Nav
  const renderMobileNav = () => {
    const navToggle = document.createElement("a");
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
  };

  renderLogo();
  renderNav();
  renderMobileNav();
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

export { createHeader, createFooter };
