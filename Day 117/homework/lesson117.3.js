let body = document.body;

let element = {
  img: '<img src="img.png">',
  h1: "<h1>Improve your front-end skills by building projects</h1>",
  p: "<p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>",
};

body.innerHTML = `<div>${element.img}${element.h1}${element.p}</div>`;