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
	var someDiv = $("<div>");//jQuery: created a div
	$(someDiv).html("Learn about drinks!");//jQuery: added html w/ text "Learn about drinks!" to the new div.
	$("#showData").append(someDiv);//jQuery: html from someDiv has been put into the showData id.
	$.get("DRINKS_DATA.json",loadJSON,"json");//jQuery: loading JSON file (paramaters:"fileName",function,"fileType")
}

//This funciton will load the data from DRINKS_DATA.json and display some of it in the consloe
function loadJSON(drinkList){
	console.log(drinkList.drinklist[0].color);//console logging the color of my first drink
	var dataDiv = $("<div>");//gonna try to make another div to show my data
}

console.log("Random stuff 1");
