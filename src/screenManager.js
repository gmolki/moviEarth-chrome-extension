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

screen_0.style.display = "none";
screen_1.style.display = "none";
screen_2.style.display = "none";
screen_3.style.display = "none";
screen_4.style.display = "none";
screen_5.style.display = "none";

screens[screenCodes.SignInScreen].ownBehaviour = function(){ buttonGoBack.style.display = "none";  blurDiv.style.display = "block"}
screens[screenCodes.SignUpScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.userTypeScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.addContentScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.waitToMovieScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"}
screens[screenCodes.viewContentScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "none"}

buttonGoBack.style.display = "none";

//var actualScreen = localStorage.getItem('actualScreen')
//localStorage.removeItem('actualScreen');
actualScreen = screenCodes.userTypeScreen;


if(actualScreen == null)
{
	localStorage.setItem('actualScreen', screenCodes.SignInScreen);
	changeScreen(screenCodes.SignInScreen);
}
else
	changeScreen(actualScreen);


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

function changeScreen(screenNumber)
{
	for(var i = 0; i < screens.length; i++)
	{
		screens[i].style.display = "none";
	}
	
	screens[screenNumber].style.display = "block";
	actualScreen = screenNumber;
	localStorage.setItem('actualScreen', actualScreen);
	
	screens[screenNumber].ownBehaviour();
}