$(document).ready(function(){
	console.log("JQuery: Imported!");
		console.log("SUCCES!")
		$('.icon-room').remove()
		$('<img id="chitoge" src="http://i.imgur.com/IB9X9FT.png"/>').appendTo('#room-bar')
		$('<img id="ond" src="http://i.imgur.com/OWLqIvV.png"/>').appendTo('#room-bar')
		$('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
		$("#Stat").draggable();

		$("#copysong").fadeTo('fast',0);
		$("#copysong").hover(function(){
   		$("#copysong").fadeTo('slow',1);
   		}, function(){
  		$("#copysong").fadeTo('slow',0);
		});

		//Interface
});