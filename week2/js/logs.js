var tbody = document.querySelector("tbody");
var pagination = document.querySelector("#pagination");
var searchInput = document.querySelector("#search_input");
var searchButton = document.querySelector("#search_button");

const devices = [
  {
    id: "101",
    name: "TV",
    action: "Turn On",
    power: "50",
  },
  {
    id: "102",
    name: "Radio",
    action: "Turn On",
    power: "20",
  },
  {
    id: "103",
    name: "Washer",
    action: "Turn Off",
    power: "80",
  },
  {
    id: "104",
    name: "Lamp",
    action: "Turn On",
    power: "10",
  },
  {
    id: "105",
    name: "Washing machine",
    action: "Sleep",
    power: "60",
  },
  {
    id: "106",
    name: "PC",
    action: "Sleep",
    power: "40",
  },
  {
    id: "107",
    name: "Refrigerator",
    action: "Turn On",
    power: "100",
  },
  {
    id: "108",
    name: "Smart TV",
    action: "Sleep",
    power: "70",
  },
  {
    id: "109",
    name: "Laptop",
    action: "Turn Off",
    power: "10",
  },
  {
    id: "110",
    name: "Electric Stove",
    action: "Turn On",
    power: "40",
  },
];

let current_page = 1;
let rows = 5;

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;
  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItem = items.slice(start, end);

  for (let item of paginatedItem) {
    let row = tbody.insertRow();
    for (key in item) {
      let cell = row.insertCell();
      let text = document.createTextNode(item[key]);
      cell.appendChild(text);
    }
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.classList.add("page_btn");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayList(items, tbody, rows, current_page);

    let current_btn = document.querySelector(".pagination button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

DisplayList(devices, tbody, rows, current_page);
SetupPagination(devices, pagination, rows);

searchButton.addEventListener("click", function () {
  let searchResult = [];
  if (searchInput.value) {
    devices.forEach((device) => {
      if (device.name.toLowerCase() === searchInput.value.toLowerCase()) {
        searchResult.push(device);
      }
    });
    pagination.style.display = "none";
    DisplayList(searchResult, tbody, rows, current_page);
  } else {
    pagination.style.display = "flex";
    DisplayList(devices, tbody, rows, current_page);
  }
});
