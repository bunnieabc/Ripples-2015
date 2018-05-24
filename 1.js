var r = 400;

var svg = d3.select("body")
		.append("svg");

var positionLabel = svg.append("text")
		.attr("x", 10)
		.attr("y", 30);
//$("text").html("<b>TEST</b>");
 svg.on("click", function (){//("click", function () { //<-D
	var positionX = 800 * Math.random();
	var positionY = 600 * Math.random();
	
	for (var i = 1; i < 5; ++i) {
		//var position = d3.mouse(svg.node());
		
		var circle = svg.append("circle")
				.attr("cx", positionX)
				.attr("cy", positionY)
				.attr("r", 0)
				.style("stroke-width", 5 / (i))
				.transition()
					.delay(Math.pow(i, 2.5) * 50)
					.duration(2000)
					.ease('quad-in')
				.attr("r", r)
				.style("stroke-opacity", 0)
				.each("end", function () {
					d3.select(this).remove();
				});
		
		
	}
});