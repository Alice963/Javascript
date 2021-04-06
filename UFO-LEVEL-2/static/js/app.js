// from data.js
var tableData = data;



var allDates = tableData.map(entry => entry.datetime);
var allCities = tableData.map(entry => entry.city);
var allCountries = tableData.map(entry => entry.country);
var allStates = tableData.map(entry => entry.state);
var allShapes = tableData.map(entry => entry.shape);



const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
const uniqueDates = allDates.filter(unique);
const uniqueCities = allCities.filter(unique);
const uniqueCountries = allCountries.filter(unique);
const uniqueStates = allStates.filter(unique);
const uniqueShapes = allShapes.filter(unique);


uniqueCities.sort();
uniqueCountries.sort();
uniqueStates.sort();
uniqueShapes.sort();



var dateDrop= d3.select("#date-dropdown");
uniqueDates.forEach(date => {
    var cell = dateDrop.append("option").text(date);
})



var cityDrop= d3.select("#city-dropdown");
uniqueCities.forEach(city => {
    var cell = cityDrop.append("option").text(city);
})



var stateDrop= d3.select("#state-dropdown");
uniqueStates.forEach(state => {
    var cell = stateDrop.append("option").text(state);
})



var countryDrop= d3.select("#country-dropdown");
uniqueCountries.forEach(country => {
    var cell = countryDrop.append("option").text(country);
})



var shapeDrop= d3.select("#shape-dropdown");
uniqueShapes.forEach(shape => {
    var cell = shapeDrop.append("option").text(shape);
})



d3.selectAll("button").on("click", function() {
  var summary = d3.selectAll("#ufo-table>tbody>tr");
  summary.html("");
 


  var dateElement = d3.select("#date-dropdown");
  var date="";
  var date = dateElement.property("value");



  if (date === 'All') {
    var filteredData = tableData;
  }
  else {
    var filteredData = tableData.filter(tableData => tableData.datetime === date);
  }
    

  var cityElement = d3.select("#city-dropdown");
  var city="";
  var city = cityElement.property("value");



  if (city === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.city === city);
  }
    

  var stateElement = d3.select("#state-dropdown");
  var state="";
  var state = stateElement.property("value");
 
  if (state === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.state === state);
  }


  var countryElement = d3.select("#country-dropdown");
  var country="";
  var country = countryElement.property("value");


  if (country === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.country === country);
  }
 

  var shapeElement = d3.select("#shape-dropdown");
  var shape = "";
  var shape = shapeElement.property("value");


  if (shape === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.shape === shape);
  }

  var tbody= d3.select("tbody");

  filteredData.forEach(sighting => {
    var row = tbody.append("tr"); 
    Object.entries(sighting).forEach(([key,value])=> {
      var cell = row.append("td");
      cell.text(value);
    })   
  })
   
});
  




