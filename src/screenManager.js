var screen_0 = document.getElementById("screen_0");
var screen_1 = document.getElementById("screen_1");
var screen_2 = document.getElementById("screen_2");
var screen_3 = document.getElementById("screen_3");
var screen_4 = document.getElementById("screen_4");
var screen_5 = document.getElementById("screen_5");

var map = document.getElementById("map");

var buttonGoBack = document.getElementById("goBack");
buttonGoBack.addEventListener("click", onClickBack );

var blurDiv = document.getElementById("blur");

var screenCodes = { SignInScreen:         "0", 
					SignUpScreen:         "1", 
                    userTypeScreen:       "2",
					addContentScreen:     "3",
					waitToMovieScreen:    "4",
					viewContentScreen:    "5"};


var screens = [];
screens.push( screen_0, screen_1, screen_2, screen_3, screen_4, screen_5);

var pendingFunctions = [];
var succesfullyConnected = false;

screen_0.style.display = "none";
screen_1.style.display = "none";
screen_2.style.display = "none";
screen_3.style.display = "none";
screen_4.style.display = "none";
screen_5.style.display = "none";

screens[screenCodes.SignInScreen].ownBehaviour = function(){ buttonGoBack.style.display = "none";  blurDiv.style.display = "block";}
screens[screenCodes.SignUpScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.userTypeScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.addContentScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.waitToMovieScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.viewContentScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "none"}

buttonGoBack.style.display = "none";
var actualScreen = null;
waitForServerConnectionResponse();
function waitForServerConnectionResponse() {
	actualScreen = localStorage.getItem('actualScreen');
	//localStorage.removeItem('actualScreen');
	//actualScreen = screenCodes.viewContentScreen;
	
	if(actualScreen == null)
	{
		localStorage.setItem('actualScreen', screenCodes.SignInScreen);
		initFirstScreen(screenCodes.SignInScreen);
	}
	else
		initFirstScreen(actualScreen);
	
};




function onClickBack()
{
	hideAllAlerts();
	switch (actualScreen) {
	  case screenCodes.SignUpScreen:
		changeScreen(screenCodes.SignInScreen);
		break;
	  case screenCodes.userTypeScreen:
		changeScreen(screenCodes.SignInScreen);
		break;
	  case screenCodes.addContentScreen:
		changeScreen(screenCodes.userTypeScreen);
		break;
	  case screenCodes.waitToMovieScreen:
		changeScreen(screenCodes.userTypeScreen);
		break;
	  case screenCodes.viewContentScreen:
	    resetMarkers();
		centerMap();
		changeScreen(screenCodes.userTypeScreen);
		break;
	  default:
		console.error( "Error in screen code", actualScreen);
	}
}

function initFirstScreen(screenNumber){
	
	if(screenNumber == screenCodes.waitToMovieScreen)
		changeScreen(screenCodes.userTypeScreen);
	else if(screenNumber == screenCodes.addContentScreen)
		executingInNetflixTab(getMovieName, activateAddScreen);
	else if(screenNumber == screenCodes.viewContentScreen)
		executingInNetflixTab(getMovieName, requestMarkers);
	else
		changeScreen(screenNumber);		
}

function changeScreen(screenNumber){
	
	screens[actualScreen].style.display = "none";
	actualScreen = screenNumber;
	localStorage.setItem('actualScreen', screenNumber);
	screens[screenNumber].style.display = "block";
	
	screens[screenNumber].ownBehaviour();
}