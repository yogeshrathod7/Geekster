let country=prompt("enter the country name:");
console.log(country);
var newURL = `http://universities.hipolabs.com/search?country=${country}`;

var container = document.getElementById("container");
var table = document.getElementById("table");
var ul = document.getElementById("ul");

container.innerHTML=`All universities from ${country} are :`

fetch(newURL)
  .then((response) => {
    console.log("inside first then");
    return response.json();
  })
  .then((data) => {
    console.log("inside second then");
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      td.innerText = data[i].name;
      tr.appendChild(td);
      table.appendChild(tr);
     
    }
  })
  .catch((err) => console.log("api has failed"));
