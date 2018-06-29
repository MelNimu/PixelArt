// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
	const length = $("#inputHeight");
	const width = $("#inputWeight");
	let pixel = $("#pixelCanvas");
	let color;

	$("#sizePicker").submit(function(event){
		event.preventDefault();
		$("table").html("");
		makeGrid();
	});

	//pick a color
	/*pixel.on("click", "td", function(){
		color =  $("#colorPicker").val();
		$(this).css("background-color" , color);
	});*/

	pixel.on("click", "td", function(){
    color =  $("#colorPicker").val();
     if ($(this).attr('style')) {
       $(this).removeAttr('style')
   } else {
       $(this).css('background-color',color);
   }
  });

	//call makeGrid
	function makeGrid(){
		let row = "", cell = "";
		for(let x=0; x<length.val(); x++){
			console.log(length);
			row = pixel[0].insertRow(x);
			for(let y=0; y<width.val(); y++){
				console.log(width);
				cell = row.insertCell(y);
			}
		}
		
	}
});


