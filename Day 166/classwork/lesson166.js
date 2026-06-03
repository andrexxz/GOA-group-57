function getapi() {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = JSON.stringify(response[i].title);
        document.body.appendChild(li);
      }
    }
  };
  http.open("GET", "https://jsonplaceholder.typicode.com/todos");
  http.send();
}

getapi();