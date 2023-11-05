let prices_container = document.getElementById("prices_container");

let Cards = [
  {
    id: 1,
    image: "../assets/efootball/efootball130.jpg",
    value: 130,
    price: 2.41,
  },
  {
    id: 2,
    image: "../assets/efootball/efootball550.jpg",
    value: 550,
    price: 9.91,
  },
  {
    id: 3,
    image: "../assets/efootball/efootball1040.jpg",
    value: 1040,
    price: 17.63,
  },
  {
    id: 4,
    image: "../assets/efootball/efootball2130.jpg",
    value: 2130,
    price: 33.65,
  },
  {
    id: 5,
    image: "../assets/efootball/efootball3250.jpg",
    value: 3250,
    price: 49.1,
  },
  {
    id: 6,
    image: "../assets/efootball/efootball5700.jpg",
    value: 5700,
    price: 79.99,
  },
  {
    id: 7,
    image: "../assets/efootball/efootball12800.jpg",
    value: 12800,
    price: 165.08,
  },
];

function showCard(array) {
  prices_container.innerHTML = "";
  array.forEach((item) => {
    let price_row = document.createElement("div");
    price_row.classList.add("price_row");

    let Image = document.createElement("img");
    Image.src = `${item.image}`;

    let price_title = document.createElement("div");
    price_title.classList.add("price_title");
    let title_h3 = document.createElement("h3");
    title_h3.textContent = item.value + " E-Football Coin";
    let title_p = document.createElement("p");
    title_p.textContent = "1-10 Dəqiqə ərzində yüklənmə";
    price_title.append(title_h3, title_p);

    let stock = document.createElement("div");
    stock.classList.add("stock");
    let stock_icon = document.createElement("i");
    stock_icon.classList.add("fa-solid");
    stock_icon.classList.add("fa-cube");
    let stock_p = document.createElement("p");
    stock_p.textContent = "Var";
    stock.append(stock_icon, stock_p);

    let price_and_buttons = document.createElement("div");
    price_and_buttons.classList.add("price_and_buttons");
    let price = document.createElement("p");
    price.classList.add("price");
    price.innerHTML = `${item.price}`;
    let price_span = document.createElement("span");
    price_span.textContent = " AZN";
    price.append(price_span);

    let price_buttons = document.createElement("div");
    price_buttons.classList.add("price_buttons");
    let price_input = document.createElement("input");
    price_input.type = "number";
    price_input.value = 1;
    price_input.min = 1;

    let buy_button = document.createElement("button");
    let buy_button_p = document.createElement("p");
    buy_button_p.textContent = "Satın al";
    let buy_icon = document.createElement("i");
    buy_icon.classList.add("fa-solid");
    buy_icon.classList.add("fa-paper-plane");
    buy_button.append(buy_button_p, buy_icon);
    price_buttons.append(price_input, buy_button);
    price_and_buttons.append(price, price_buttons);

    price_row.append(Image, price_title, stock, price_and_buttons);
    prices_container.append(price_row);
  });
}

showCard(Cards);
