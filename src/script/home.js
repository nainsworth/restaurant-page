import content from "./index";

// Hero
const createHero = () => {
  const hero = document.createElement("div");
  const header = document.createElement("h3");
  const slogan = document.createElement("div");

  hero.classList.add("hero");
  slogan.classList.add("slogan");

  header.textContent = "ICHIRAKU RAMEN";
  slogan.textContent = "THE WORLD'S BEST RAMEN";

  content.appendChild(hero);
  hero.appendChild(header);
  hero.appendChild(slogan);
};

export default createHero;