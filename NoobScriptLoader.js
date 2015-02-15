function startScript() {
    if (typeof API !== "object" || !API.enabled) {
        $(document).ready(startScript();)
    } else {
        loader();
    }
}
$(document).ready(startScript();)

function loader(){
	$.getScript('https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js');
    console.log("NSloader: Imported!");

	API.on(API.CHAT_COMMAND, checkReload);
	function checkReload(cmdData) {
        this.cmdData = cmdData;
        if (cmdData == "/NSreload") {
        	console.log("NSloader: reloading");
        	reload();
        }
}
	function reload(){
		setTimeout(function(){$.getScript('https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js')}, 2500);
	}
}
