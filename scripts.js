/**
 * @author Hazard
 */

/*
 * This javascript file will accomplish three distinct tasks.
 * 
 * 1.) It will use the document ready function to call another function.
 * 2.) The other funciton will create a new div w/ text in it, which will be added to html. 
 * 		It will also get the JSON data from DRINKS_DATA.json. 
 * 3.) It will have an event handler function for loading the JSON, which will have a console.log 
 * 		to put some data on the page.
 */

//This is the document ready function that calls the other function
$(document).ready(drinksLoaded);

//This function will create a div w/ some text and add it to html. It will also grab the json data.
function drinksLoaded(){
	console.log("Random stuff 2");//test of document ready. Should load after "Random stuff 1".
	var someDiv = $("<div>");//created a div w/ jQuery
	$(someDiv).html("Learn about drinks!");//added html w/ text "Learn about drinks!" to the new div.
	
	
}

console.log("Random stuff 1");
