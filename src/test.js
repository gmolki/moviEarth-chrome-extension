document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");
	
    /*function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:');
        console.log(results[0]);
    });*/
	
	function display_h1 (results){
	 console.log("Hola");
	 console.log(results);
	}

	chrome.tabs.query({active: true}, function(tabs) {
	  var tab = tabs[0];
	  tab_title = tab.title;
	  chrome.tabs.executeScript(tab.id, {
		//code: 'document.querySelector("div.scrubber-head").getAttribute("aria-valuenow")'
		code: 'document.querySelector("h4.ellipsize-text").textContent'
	  }, display_h1);
	});
});

//var prueba = document.querySelector("div#appMountPoint");