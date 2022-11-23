import Location from "../img/location.jpeg";
import Map from "../img/map.png";

const createLocation = () => {
  const location = document.createElement("div");
  location.classList.add("location");

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("locationInfo");

  const locationImg = document.createElement("img");
  locationImg.classList.add("locationImg");
  locationImg.src = Location;
  locationImg.alt = "Location Image";

  const locationDesc = document.createElement("p");
  locationDesc.classList.add("locationDesc");
  locationDesc.textContent =
    "Popular with Konoha's villagers, Ichiraku Ramen is the world's best ramen because of Teuchi's commitment to taste and artistic quality. Ichiraku Ramen offers various toppings, such as char siu, seaweed, and boiled eggs. Stop by and get you a bowl.";

  const map = document.createElement("img");
  map.classList.add("map");
  map.src = Map;
  map.alt = "Map Image";

  location.appendChild(locationInfo);
  locationInfo.appendChild(locationImg);
  locationInfo.appendChild(locationDesc);
  location.appendChild(map);

  return location;
};

const loadLocation = () => {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createLocation());
};

export default loadLocation;
