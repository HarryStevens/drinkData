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
	$(someDiv).html("Drinks Data:");//jQuery: added html w/ text "Learn about drinks!" to the new div.
	$("#showData").append(someDiv);//jQuery: html from someDiv has been put into the showData id.
	$.get("DRINKS_DATA.json",loadJSON,"json");//jQuery: loading JSON file (paramaters:"fileName",function,"fileType")
}

//This funciton will load the data from DRINKS_DATA.json and display some of it in the consloe
function loadJSON(drinkList){
	console.log(drinkList.drinklist[0].color);//console logging the color of my first drink
	
	
	//With the assignment completed, I will try to figure out how to show some data on the page.
	
	//first drink
	var drink1 = $("<div>");
	$(drink1).html(drinkList.drinklist[0].name);
	$("#drink1").append(drink1);
	
	//first drink color
	var drink1Color = $("<div>");
	$(drink1Color).html(drinkList.drinklist[0].color);
	$("#drink1Color").append(drink1Color);
	
	//second drink
	var drink2 = $("<div>");
	$(drink2).html(drinkList.drinklist[1].name);
	$("#drink2").append(drink2);
	
	//second drink color
	var drink2Color = $("<div>");
	$(drink2Color).html(drinkList.drinklist[1].color);
	$("#drink2Color").append(drink2Color);

	//third drink
	var drink3 = $("<div>");
	$(drink3).html(drinkList.drinklist[2].name);
	$("#drink3").append(drink3);
	
	//third drink color
	var drink3Color = $("<div>");
	$(drink3Color).html(drinkList.drinklist[2].color);
	$("#drink3Color").append(drink3Color);
	
	//fourth drink
	var drink4 = $("<div>");
	$(drink4).html(drinkList.drinklist[3].name);
	$("#drink4").append(drink4);
	
	//fourth drink color
	var drink4Color = $("<div>");
	$(drink4Color).html(drinkList.drinklist[3].color);
	$("#drink4Color").append(drink4Color);
}

console.log("Random stuff 1");//This will appear above "Random Stuff 2" in the console because that will only work when the document is ready.
