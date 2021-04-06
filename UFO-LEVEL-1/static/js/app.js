// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

var table = d3.select("table");

tbody.html("");

table.attr("class", "table table-striped");

tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
button.on("click", function() {
  
  var inputElement = d3.select("#datetime");
  
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var filteredData = tableData.filter(ufoSighting => (ufoSighting.datetime ===inputValue));
  console.log(filteredData);


var tbody = d3.select("tbody");

var table = d3.select("table");

tbody.html("");

table.attr("class", "table table-striped");


if (inputValue!=="") {

filteredData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}
else {
    tableData.forEach(function(ufoSighting){
        console.log(ufoSighting);
        var row =tbody.append("tr");
    
        Object.entries(ufoSighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
});