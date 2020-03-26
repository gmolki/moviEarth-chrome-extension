
//FIRST CALL - Get Tab id of Netflix DOM
function executingInNetflixTab(tabCallback) {
    chrome.tabs.query(
        { active: true },
        function (tabArray) { tabCallback(tabArray[0].id); }
    );
}


//SECOND CALL -- Pass Tab id and execute code in that tab
function getMovieName(tabID){
	chrome.tabs.executeScript(tabID, {
			code: 'document.querySelector("h4.ellipsize-text").textContent'
		  }, requestMarkers);
}

//FINAL CALL CALL
function display_h1 (results){
	 console.log("Hola");
	 console.log(results[0]);
}

function requestMarkers (results){
	 console.log(results[0]);
	 var message = {
      code: codes.fromUser.requestMovieInfo,
      moviename: results[0]
    };
    sendMessage(message);
}

