 var addContentButton = document.getElementById('add_content');
 addContentButton.addEventListener("click", onAddingContent );
  
 var viewContentButton = document.getElementById('view_content');
 viewContentButton.addEventListener("click", onViewingContent );
 
 function onAddingContent()
 {
 }
 
  function onViewingContent()
 {
	 changeScreen(screenCodes.viewContentScreen);
	 executingInNetflixTab(getMovieName);
 }