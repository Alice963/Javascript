// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!


var tbody = d3.select("tbody");
console.log(data);

// data.forEach(function(ufoSighting){
//     console.log(ufoSighting);

// });

data.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

var inputElement = d3.select("#datetime"); 
var inputValue = inputElement.property("value");

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(dateData){
    var row=tbody.append("tr");
    Object.entries(dateData).forEach(function([key,value]){
    var cell=tbody.append("td");
    cell.text(value);
        });
    });
});

