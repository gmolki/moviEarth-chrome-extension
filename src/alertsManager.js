var alertConnection = document.getElementById('alert_connection');
var alertNewAccount = document.getElementById('alert_newAccount');
var alertSendSene = document.getElementById('alert_sendScene');



alertConnection.style.display = "none";
alertNewAccount.style.display = "none"
alertSendSene.style.display = "none";


function activateAlertCreateAccount()
{
	alertNewAccount.style.display = "block";
}

function activateAlertScene()
{
	alertSendSene.style.display = "block";
}

function hideAllAlerts()
{
	alertSendSene.style.display = "none";
	alertNewAccount.style.display = "none";
}