
//FIRST CALL - Get Tab id of Netflix DOM
function executingInNetflixTab(tabCallback, executionCallback) {
    chrome.tabs.query(
        { active: true },
        function (tabArray) { tabCallback(tabArray[0].id, executionCallback); }
    );
}


//SECOND CALL -- Pass Tab id and execute code in that tab
function getMovieName(tabID, executionCallback){
	chrome.tabs.executeScript(tabID, {
			code: 'document.querySelector("h4.ellipsize-text").textContent'
		  }, executionCallback);
}

//FINAL CALL
function requestMarkers (results){
	 console.log(results[0]);
	 
	 if(results[0] == null)
		 changeScreen(screenCodes.waitToMovieScreen);
	 else
	 {
		 var message = {
		  code: codes.fromUser.requestMovieInfo,
		  moviename: results[0]
		};
		sendMessage(message);
		
		changeScreen(screenCodes.viewContentScreen);
	 }	 
}

function activateAddScreen (results){
	 console.log(results[0]);
	 
	 if(results[0] == null)
	 {
		 document.getElementById('movieName').placeholder = 'CANNOT DETECT MOVIE NAME';
		 changeScreen(screenCodes.waitToMovieScreen);
	 }		 
	 else
	 {
		
		document.getElementById('movieName').placeholder = results[0];
		changeScreen(screenCodes.addContentScreen);
	 }	 
}

