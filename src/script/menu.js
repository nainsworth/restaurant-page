import content from "./index";

const Menu = [
  {
    title: "Chashu Ramen",
    imgFile: "/src/img/chashu.jpeg",
    desc1: "Sharing Size",
    desc2: "House Special",
    desc3: "Black Soup Base",
    price: "¥300",
  },
  {
    title: "Spicy Tantanmen Ramen",
    imgFile: "/src/img/tantanmen.jpg",
    desc1: "Spicy Rayu Ramen",
    desc2: "Nutty Soy Milk",
    desc3: "Seasame Paste",
    price: "¥230",
  },
  {
    title: "Miso Ramen",
    imgFile: "/src/img/miso.jpg",
    desc1: "Savory Spicy Miso",
    desc2: "Paste Soup Base",
    desc3: "",
    price: "¥230",
  },
  {
    title: "Tonkostsu Ramen",
    imgFile: "/src/img/tonkostsu.jpg",
    desc1: "Creamy Garlic Pork",
    desc2: "Broth Soup Base",
    desc3: "",
    price: "¥220",
  },
  {
    title: "Wafu Shoyu Ramen",
    imgFile: "/src/img/shoyu.jpg",
    desc1: "Flavorful Pork",
    desc2: "Veggie Soup Base",
    desc3: "",
    price: "¥210",
  },
  {
    title: "Torigara Ramen",
    imgFile: "/src/img/torigara.jpg",
    desc1: "Rich Chicken Broth",
    desc2: "Soup Base",
    desc3: "",
    price: "¥200",
  },
];

const createMenu = () => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  content.appendChild(cardContainer);

  const createItemCard = (item) => {
    const card = document.createElement("div");
    const title = document.createElement("header");
    const description = document.createElement("div");
    const image = document.createElement("img");
    const list = document.createElement("ul");
    const desc1 = document.createElement("li");
    const desc2 = document.createElement("li");
    const desc3 = document.createElement("li");
    const price = document.createElement("li");

    card.classList.add("card");
    title.classList.add("title");
    description.classList.add("description");
    description.classList.add("description");
    price.classList.add("price");

    title.textContent = item.title;
    image.src = item.imgFile;
    image.alt = item.title;
    desc1.textContent = item.desc1;
    desc2.textContent = item.desc2;
    desc3.textContent = item.desc3;
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
};

export default createMenu;
