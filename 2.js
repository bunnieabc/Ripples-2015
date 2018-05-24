// JavaScript Document
var width = 960,
	height = 500;

var svg = d3.select("body").append("svg")
			.attr("width", width)
			.attr("height", height)

d3.json("1.json", function(json) {
	
    /* Define the data for the circles */
    var elem = svg.selectAll("g")
        .data(json.nodes)
    /*Create and place the "blocks" containing the circle and the text */  
   
    /*Create the circle for each block */
	
	var elemEnter = elem.enter()
	.append("g")
	.attr("class",function(d){return "s"+d.label })
	.attr("transform", function(d){return "translate("+d.x+",180)"})

	//LOOP FOR TIME
	for(var j=1;j<4;j++)
	{//alert("dM");
		var class_str = ".s"+j;
		//LOOP FOR WATER
		for (var i = 1; i < 5; ++i) {
		if(i<4)
		{	
			 var circle = d3.select(class_str).append("circle")
				.attr("r", 0)
				.style("stroke-width", 5 / (i))
				.transition()
				.delay(Math.pow(i, 2.5) * 50 +(j-1)*2000)
				.duration(2000)
				.ease('quad-in')
				.attr("r", function(d){return d.r-i*10} )	
				.style("stroke-opacity", 0)
				.each("end", function () {
					 d3.select(this).remove();
				 });
				 
			/*	 
			var text1 = d3.select(class_str).append("text")
			.attr("fill", "rgba(255,255,255,0.3)")
			.attr("dx", function(d){return -20})
			.text(function(d){ return d.event1 })
			.delay(Math.pow(i, 2.5) * 50 +(j-1)*2000)
			.transition()
			.duration(2000)
			.ease('quad-in')
			//.style("color",rgba(255,255,255,0.3))
			.style("stroke-opacity", 0)
			.each("end", function () {
				//if(i==4)continue;
				 d3.select(this).remove();
			 });
			 */
		}
		else
		{
			var circle = d3.select(class_str).append("circle")
				.attr("r", 0)
				.style("stroke-width", 5 / (i))
				.transition()
				.delay(Math.pow(i, 2.5) * 50 + (j-1)*2000)
				.duration(2000)
				.ease('quad-in')
				.attr("r", function(d){ return d.r*2-i*10 } )	
				.style("stroke-opacity", 0.3)
				

			var text1 = d3.select(class_str).append("text")
				.attr("fill", "rgba(255,255,255,0.3)")
				.attr("dx", function(d){return -20})
				.text(function(d){ return d.event1 })
				.transition()
				.delay(Math.pow(i, 2.5) * 50 + (j-1)*2000)
				.duration(2000)
				.ease('quad-in')
				.ease('quad-in')

			
		}
	}
	
	}

})