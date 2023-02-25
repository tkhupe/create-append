var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("h1")
var li2 = document.createElement("h2");
var li3 = document.createElement("h3");
var li4 = document.createElement("h4");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);

// Append ordered list 
favoriteEl.appendChild(listEl);


h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
li1.textContent ="chicken 🍗";
li2.textContent ="pho 🍜";
li3.textContent = "salad  🥗";
li4.textContent = "sushi 🍣";

listEl.setAttribute("style", "background-color: #333333; padding: 20px" )

li1.setAttribute("style", "color: white; padding:5px; margin-left: 35px; background-color:orange");
li2.setAttribute("style", "color: white; padding:5px; margin-left: 35px; background-color:blue");
li3.setAttribute("style", "color: white; padding:5px; margin-left: 35px; background-color:red");
li4.setAttribute("style", "color: white; padding:5px; margin-left: 35px; background-color:green");
favoriteEl.setAttribute("style", "font-size:30px; color:red; font-weight: bold");
