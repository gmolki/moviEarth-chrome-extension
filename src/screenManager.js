var screen_1 = document.getElementById("screen_1");
var screen_2 = document.getElementById("screen_2");

var screens = [];
screens.push( screen_1, screen_2);

screen_1.style.display = "block";
screen_2.style.display = "none";

function changeScreen(screenNumber)
{
	for(var i = 0; i < screens.length; i++)
	{
		screens[i].style.display = "none";
	}
	
	screens[screenNumber - 1].style.display = "block";
}