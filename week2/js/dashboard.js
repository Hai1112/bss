var tbody = document.querySelector("tbody");
var totalPowerConsumption = document.querySelector("#total");
var chart = document.querySelector(".chart");
var deviceName = document.querySelector("#name");
var macAddress = document.querySelector("#mac");
var ip = document.querySelector("#ip");
var power = document.querySelector("#power");
var form = document.querySelector("form");
var date = new Date();
var today =
  date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
var menuButton = document.querySelector(".menu-button");
var sideBar = document.querySelector(".sidebar");
var main = document.querySelector(".main");

var devices = [
  {
    name: "TV",
    macAddress: "00:18:44:113A:B7",
    ip: "127.0.0.2",
    createdDate: "2021/5/21",
    powerConsumption: 50,
  },
  {
    name: "Washer",
    macAddress: "00:18:44:113A:B3",
    ip: "127.0.0.1",
    createdDate: "2021/5/31",
    powerConsumption: 80,
  },
];

function generateTable(data) {
  for (let element of data) {
    let row = tbody.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function calculateTotalPower() {
  let total = 0;
  devices.forEach((device) => (total += device.powerConsumption));
  totalPowerConsumption.innerText = total;
}

var labels, data, backgroundColor;

function generateChartData() {
  labels = [];
  data = [];
  backgroundColor = [];

  devices.forEach((device) => {
    labels.push(device.name);
    data.push(device.powerConsumption);
    backgroundColor.push(
      `#${Math.floor(Math.random() * 16777215).toString(16)}`
    );
  });
  return labels, data, backgroundColor;
}

generateTable(devices);
calculateTotalPower();
generateChartData();

var chart = new Chart("chart", {
  type: "doughnut",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
      },
    ],
  },
  options: {
    responsive: false,
  },
});

function updateChart() {
  var newData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
      },
    ],
  };
  chart.data = newData;
  chart.update();
}

function showError(input, message) {
  let parent = input.parentElement;
  let span = parent.querySelector("span");
  parent.classList.add("error");
  span.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let span = parent.querySelector("span");
  parent.classList.remove("error");
  span.innerText = "";
}

function checkEmptyInput(inputs) {
  let isEmpty = false;
  inputs.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmpty = true;
      showError(input, "Please fill up this field");
    } else {
      showSuccess(input);
    }
  });
  return isEmpty;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmpty = checkEmptyInput([deviceName, macAddress, ip, power]);
  if (!isEmpty) {
    let newDevice = {
      name: deviceName.value,
      macAddress: macAddress.value,
      ip: ip.value,
      createdDate: today,
      powerConsumption: parseInt(power.value),
    };
    devices.push(newDevice);
    generateChartData();
    let newRow = tbody.insertRow();
    for (key in newDevice) {
      let cell = newRow.insertCell();
      let text = document.createTextNode(newDevice[key]);
      cell.appendChild(text);
    }
    updateChart();
    calculateTotalPower();
  }
});

menuButton.addEventListener("click", function () {
  if (window.innerWidth <= 414) {
    sideBar.classList.add("show");
    menuButton.style.opacity = 0;
  }
});

main.addEventListener("click", function () {
  if (window.innerWidth <= 414) {
    sideBar.classList.remove("show");
    menuButton.style.opacity = 1;
  }
});
