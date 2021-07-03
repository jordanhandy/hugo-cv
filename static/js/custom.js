var aboutParagraph = document.createElement("p");
var textNode = document.createTextNode("My name is Jordan Handy. Feel free to explore my website, and view some of the work that I've done.");
aboutParagraph.appendChild(textNode);
var element = document.querySelector("h2");
element.append(aboutParagraph);
