$(document).ready(function(){
	console.log("JQuery: Imported!");
		console.log("SUCCES!")
		$('.icon-room').remove()
		$('<img id="chitoge" src="http://i.imgur.com/IB9X9FT.png"/>').appendTo('#room-bar')
		$('<img id="ond" src="http://i.imgur.com/OWLqIvV.png"/>').appendTo('#room-bar')
		$('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
		$("#Stat").draggable();

        if (document.getElementById("playlist-meta").style.top === "-530px"){
            $("#InterfaceToggle").toggle()
        }
        else{
            $("#InterfaceToggle").toggle()
        }
		//Interface
});