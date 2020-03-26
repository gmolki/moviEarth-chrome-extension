var screen_0 = document.getElementById("screen_0");
var screen_1 = document.getElementById("screen_1");
var screen_2 = document.getElementById("screen_2");
var screen_3 = document.getElementById("screen_3");

var buttonGoBack = document.getElementById("goBack");
buttonGoBack.addEventListener("click", onClickBack );

var blurDiv = document.getElementById("blur");

var screenCodes = { SignInScreen:         "0", 
					SignUpScreen:         "1", 
                    userTypeScreen:       "2",
					viewContentScreen:    "3"};


var screens = [];
screens.push( screen_0, screen_1, screen_2, screen_3);

screen_0.style.display = "none";
screen_1.style.display = "none";
screen_2.style.display = "none";
screen_3.style.display = "none";

screens[screenCodes.SignInScreen].ownBehaviour = function(){ buttonGoBack.style.display = "none";  blurDiv.style.display = "block";}
screens[screenCodes.SignUpScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"; }
screens[screenCodes.userTypeScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "block"; }
screens[screenCodes.viewContentScreen].ownBehaviour = function(){ buttonGoBack.style.display = "block"; blurDiv.style.display = "none"; }

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
	switch (actualScreen) {
	  case screenCodes.SignUpScreen:
		changeScreen(screenCodes.SignInScreen);
		break;
	  case screenCodes.userTypeScreen:
		changeScreen(screenCodes.SignInScreen);
		break;
	  case screenCodes.viewContentScreen:
	    resetMarkers();
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