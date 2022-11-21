// Hero
const createHero = () => {
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const header = document.createElement("h3");
  header.textContent = "ICHIRAKU RAMEN";

  const slogan = document.createElement("div");
  slogan.classList.add("slogan");
  slogan.textContent = "THE WORLD'S BEST RAMEN";

  hero.appendChild(header);
  hero.appendChild(slogan);

  return hero;
};

const loadHome = () => {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHero());
};

export default loadHome;