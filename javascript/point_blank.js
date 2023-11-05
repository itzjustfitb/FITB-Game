let prices_container = document.getElementById("prices_container");

let Cards = [
  {
    id: 1,
    image: "../assets/point_blank/point_blank900.jpg",
    value: 900,
    price: 1.11,
  },
  {
    id: 2,
    image: "../assets/point_blank/point_blank1800.jpg",
    value: 1800,
    price: 2.14,
  },
  {
    id: 3,
    image: "../assets/point_blank/point_blank4500.jpg",
    value: 4500,
    price: 5.19,
  },
  {
    id: 4,
    image: "../assets/point_blank/point_blank10400.jpg",
    value: 10400,
    price: 10.75,
  },
  {
    id: 5,
    image: "../assets/point_blank/point_blank21000.jpg",
    value: 21000,
    price: 20.64,
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
    title_h3.textContent = item.value + " Point Blank TG";
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
