/*
Bo Hui Lu
SoftDev2 pd7
K #15: Scattered
2019-03-25
*/

var svg = d3.select("body").append("svg")
    .attr("height", 150)
    .attr("width", 600)
    .style("border", "1px solid");

var padding = 40;

var dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88]
];

//scales based off my dataset
var xScale = d3.scaleLinear()
    .domain([0, 480])
    .range([padding, 600 - padding]);

//scales based off dataset
var yScale = d3.scaleLinear()
    .domain([0, 95])
    .range([150 - padding, padding]);


//creates dots based off of dataset 
svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
        return xScale(d[0]);
    })
    .attr("cy", function (d) {
        return yScale(d[1]);
    })
    .attr("r", 5)
    .attr("stroke", "blue")
    .attr("fill", "orange");


//adds text next to dots displaying x and y axis
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d[0] + "," + d[1];
    })
    .attr("x", function (d) {
        return xScale(d[0]);
    })
    .attr("y", function (d) {
        return yScale(d[1]);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("fill", "black");