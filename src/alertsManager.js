var alertConnection = document.getElementById('alert_connection');
var alertSendSene = document.getElementById('alert_sendScene');


alertConnection.style.display = "none";
alertSendSene.style.display = "none";

function activateAlertScene()
{
	alertSendSene.style.display = "block";
}

function hideAllAlerts()
{
	alertSendSene.style.display = "none";
}