import content from "./index";

// Header
const createHeader = () => {
  const header = document.createElement("div");
  const nav = document.createElement("ul");
  const logo = document.createElement("img");

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
      home.classList.add("selected");
      menu.classList.remove("selected");
      location.classList.remove("selected");
    });
    menu.addEventListener("click", () => {
      home.classList.remove("selected");
      menu.classList.add("selected");
      location.classList.remove("selected");
    });
    location.addEventListener("click", () => {
      home.classList.remove("selected");
      menu.classList.remove("selected");
      location.classList.add("selected");
    });
    reservation.addEventListener("click", () => {
      console.log("reservation");
    });
  };

  // Mobile Nav
  const renderMobileNav = () => {
    const navToggle = document.createElement("a");
    const topBar = document.createElement("span");
    const midBar = document.createElement("span");
    const lowBar = document.createElement("span");
    const navLink = document.querySelectorAll(".nav")

    navToggle.classList.add("toggle-btn");
    topBar.classList.add("bar");
    midBar.classList.add("bar");
    lowBar.classList.add("bar");

    header.appendChild(navToggle);
    navToggle.appendChild(topBar);
    navToggle.appendChild(midBar);
    navToggle.appendChild(lowBar);

    navToggle.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      } else {
        nav.classList.add("active");
        navToggle.classList.add("active");
        header.classList.add("active");
        logo.classList.add("active");
      }
      console.log("test");
    });

    // navLink.forEach("click", () =>{
    //   nav.classList.remove("active");
    //     navToggle.classList.remove("active");
    //     header.classList.remove("active");
    //     logo.classList.remove("active");
    // })
    
   
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
