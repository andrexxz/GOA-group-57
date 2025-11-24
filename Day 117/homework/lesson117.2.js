let body = document.body;

let element = {
  img: '<img src="image.png">',
  h1: "<h1>INSTAGRAM</h1>",
  p: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a dolores maxime repellendus sed assumenda tempora aliquam quis!</p>",
  button: "<button>READ MORE</button>",
};

body.innerHTML = `<div>${element.img}${element.h1}${element.p}${element.button}</div>`;