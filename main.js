/*//Variable to be used in the Hello World application
var text = "Hello World"!
var text = "I am Obi-Wan Kanobi"

//Message the text to the user
window.alert(text);


//write to dev console
console.log ("Hello Deborah")
*/

//write to the page 
document.write ("<h1>Hello Everyone! </h1>");
document.write("<p>I am Dath Vader.</p>")
document.write("<p>A former Jedi and initially known as Anakin Skywalker. I chose to save my son Luke whom I dearly loved, from the Emperor.</p>")
document.write("<p>This is a current image of me incase you probably haven't seen me before.</p>")

//Include Dath Vader's image. 
document.write('<img src="Dath_Vader.png">');

//Arithmetic inclusion 
document.write("<p>I was born in " + (20 + 21) + " BBY (Before the Battle of Yavin). </p>")
document.write("<p>These are some of the things I enjoy doing:</p>");

//List of items 
document.write("<ul>");

var activities = ["Finding rebels.", "Studying Sith.", "Meditating."];

for (var i = 0; i < activities.length; i++) {
  document.write("<li>" + activities[i] + "</li>");
}

document.write("</ul>");