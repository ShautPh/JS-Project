let container = document.createElement("div");
container.className = "container";


let span = document.createElement('div');
span.id = "title";

let h1 = document.createElement('h1');
h1.textContent = "Hello world, how are you so far?";
h1.style.textTransform = 'uppercase';
h1.style["color"] = "green";

span.appendChild(h1);
container.appendChild(span);
document.body.appendChild(container)


