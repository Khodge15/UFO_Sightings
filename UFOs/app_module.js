// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// write function to build a table from the ufo data
function buildTable(data) {
// clear data first
tbody.html("");
// use forEach like a for loop, forEach only works with arrays
//then add rows to the table
//using an arrow funtion cause its cleaner
//an argument (dataRow) that will represent each row of the data 
data.forEach((dataRow) => {
// create a variable that will append a row to the table body
// let is used becuase the variable is only for this block of code
// code tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
    let row = tbody.append("tr");
// loop through each field in the dataRow argument
// function  to specify that each object goes on one row
    Object.values(dataRow).forEach((val) => {
// add each value to a cell each value is wrapped in an html <td> tag
    let cell = row.append("td");
    cell.text(val);
}
);
});
}

// add function to filter table 
//D3 is a library that take user input and listetns for a click button to filter
//create a function calle handleClick
// select date time as a filter
function handleSearch() {
    let date = d3.select("#datetime").property("value");
    // set a default filter and save to a new variable
    // tableData is teh raw data is no filter is used all teh data will eb returned
    let filteredData = tableData;
    // check for a date filter using an if statement.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (city) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
            filteredData = filteredData.filter(row => row.city === city);
        }
    if (state) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
            filteredData = filteredData.filter(row => row.state === state);
        }
    if (country) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
            filteredData = filteredData.filter(row => row.country === country);
        }
    if (shape) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
            filteredData = filteredData.filter(row => row.shape === shape);
        }
     // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will just be the original tableData.
  buildTable(filteredData);
}
// this alerts when a click has happened
// selector string contains the id for another HTML tag
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);