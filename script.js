// Select the body element
let body = document.querySelector("body");

// Function to generate a block with a title and horizontal line
function generateBlock(title) {
  let hr = document.createElement("hr");
  let h1 = document.createElement("h1");
  h1.textContent = title;
  body.appendChild(h1);
  body.appendChild(hr);
}

// Generate Block 1
generateBlock("1");

// Create a div with an id of "square"
let div = document.createElement("div");
div.setAttribute("id", "square");
body.appendChild(div);

// Generate Block 2
generateBlock("2");

// Create an img element for a meme
let meme = document.createElement("img");
meme.setAttribute(
  "src",
  "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"
);
meme.style.width = "100%";
body.appendChild(meme);

// Generate Block 3
generateBlock("3");

// Create a container div with red squares
let container = document.createElement("div");
container.style.gap = "5px";
for (let i = 0; i < 100; i++) {
  let div = document.createElement("div");
  div.style.width = "10px";
  div.style.height = "10px";
  div.style.backgroundColor = "red";
  container.appendChild(div);
}
container.setAttribute("id", "container");
body.appendChild(container);

// Generate Block 4
generateBlock("4");

// Create a div with a ghost emoji that alternately appears and disappears
let ghost = document.createElement("div");
ghost.textContent = "👻";
ghost.style.fontSize = "100px";
body.appendChild(ghost);
setInterval(() => {
  ghost.style.visibility = ghost.style.visibility === "hidden" ? "visible" : "hidden";
}, 3000);

// Generate Block 5

// Create a paragraph for a magician and a container for rabbit emojis
let magician = document.createElement("p");
magician.textContent = "I'm a magician. If I hover over a rabbit, it will disappear!";
body.appendChild(magician);
let rabbitContainer = document.createElement("div");
rabbitContainer.id = "rabbit-container";
for (let i = 0; i < 20; i++) {
  let rabbit = document.createElement("div");
  rabbit.textContent = "🐇";
  rabbit.style.fontSize = "40px";
  rabbitContainer.appendChild(rabbit);
}
body.appendChild(rabbitContainer);

// Generate Block 6

// Create a div that displays a countdown and self-destructs the page
generateBlock("6");
let destruct = document.createElement("div");
destruct.id = "destruct";
body.appendChild(destruct);
let time = 1000;
setInterval(() => {
  time = time - 1;
  destruct.textContent = `This page will self-destruct in ${time} seconds.`;
  if (time === 0) {
    body.innerHTML = "";
    body.style.backgroundColor = "red";
    for (let i = 0; i < 10000; i++) {
      let bomb = document.createElement("span");
      bomb.textContent = "💣";
      body.appendChild(bomb);
    }
  }
}, 1000);