 var addContentButton = document.getElementById('add_content');
 addContentButton.addEventListener("click", onAddingContent );
  
 var viewContentButton = document.getElementById('view_content');
 viewContentButton.addEventListener("click", onViewingContent );
 
 function onAddingContent()
 {
	 executingInNetflixTab(getMovieName, activateAddScreen);
 }
 
  function onViewingContent()
 {
	 executingInNetflixTab(getMovieName, requestMarkers);
 }
 
//ADD CONTENT
let addContent = document.forms["addContent"];

addContent.addEventListener("submit", function(event) {

	var movie = addContent["movieName"].placeholder;
	var latitudeScene = addContent["latitudeCoord"].value;
	var longitudeScene = addContent["longitudCoord"].value;
	
	var fromScene = timeToSecods(addContent["fromTime"].value);
	var toScene = timeToSecods(addContent["toTime"].value);
	
	var descriptionScene = addContent["descriptionScene"].value;
	

	var message = {
	  code: codes.fromUser.sendSceneInfo,
	  moviename: movie,
	  scenesInfo:{
		  latitude: latitudeScene,
		  longitude: longitudeScene,
		  from: fromScene,
		  to: toScene,
		  description: descriptionScene
		} 
	};
	
	if(succesfullyConnected)
	{
		sendMessage(message);
		activateAlertScene();
	}
	
	event.preventDefault();
});

function timeToSecods(hms)
{
	//var hms = '02:04:33';   // your input string
	var a = hms.split(':'); // split it at the colons
	var seconds = 0;
	if(a.length == 2)		
		var seconds = (+a[0]) * 60 + (+a[1]);  // minutes are worth 60 seconds. Hours are worth 60 minutes.
	else if(a.length == 3)
		var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);  // minutes are worth 60 seconds. Hours are worth 60 minutes.

	return seconds;
}