import Chashu from "../img/chashu.jpeg";
import Tantanmen from "../img/tantanmen.jpg";
import Miso from "../img/miso.jpg";
import Tonkostsu from "../img/tonkostsu.jpg";
import Shoyu from "../img/shoyu.jpg";
import Torigara from "../img/torigara.jpg";

const Menu = [
  {
    title: "Chashu Ramen",
    imgFile: Chashu,
    desc1: "Sharing Size",
    desc2: "House Special",
    desc3: "Black Soup Base",
    price: "¥300",
  },
  {
    title: "Spicy Tantanmen Ramen",
    imgFile: Tantanmen,
    desc1: "Spicy Rayu Ramen",
    desc2: "Nutty Soy Milk",
    desc3: "Seasame Paste",
    price: "¥230",
  },
  {
    title: "Miso Ramen",
    imgFile: Miso,
    desc1: "Savory Spicy Miso",
    desc2: "Paste Soup Base",
    desc3: "",
    price: "¥230",
  },
  {
    title: "Tonkostsu Ramen",
    imgFile: Tonkostsu,
    desc1: "Creamy Garlic Pork",
    desc2: "Broth Soup Base",
    desc3: "",
    price: "¥220",
  },
  {
    title: "Wafu Shoyu Ramen",
    imgFile: Shoyu,
    desc1: "Flavorful Pork",
    desc2: "Veggie Soup Base",
    desc3: "",
    price: "¥210",
  },
  {
    title: "Torigara Ramen",
    imgFile: Torigara,
    desc1: "Rich Chicken Broth",
    desc2: "Soup Base",
    desc3: "",
    price: "¥200",
  },
];

const createMenu = () => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const createItemCard = (item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("header");
    title.classList.add("title");
    title.textContent = item.title;

    const description = document.createElement("div");
    description.classList.add("description");

    const image = document.createElement("img");
    image.src = item.imgFile;
    image.alt = item.title;

    const list = document.createElement("ul");

    const desc1 = document.createElement("li");
    desc1.textContent = item.desc1;

    const desc2 = document.createElement("li");
    desc2.textContent = item.desc2;

    const desc3 = document.createElement("li");
    desc3.textContent = item.desc3;

    const price = document.createElement("li");
    price.classList.add("price");
    price.textContent = item.price;

    cardContainer.appendChild(card);
    card.appendChild(title);
    card.appendChild(description);
    description.appendChild(image);
    description.appendChild(list);
    list.appendChild(desc1);
    list.appendChild(desc2);
    list.appendChild(desc3);
    list.appendChild(price);
  };

  for (let item of Menu) createItemCard(item);

  return cardContainer;
};

const loadMenu = () => {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
};

export default loadMenu;
