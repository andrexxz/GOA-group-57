const form = document.getElementById('form');
const main = document.getElementById('main');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let filemName = e.target.name.value;

  function fatcDate() {
    return new Promise((resolve, reject) => {
      let response = fetch(`https://api.tvmaze.com/search/shows?q=${filemName}`)
        .then((response) => response.json())
        .then((data) => resolve(data));
    });
  }

  fatcDate().then((info) => {
    console.log(info);
    main.innerHTML = `
    <div class="card">
        <img
          src="${info[0].show.image.original}"
          alt=""
          id="film-img"
        />
        <div class="info">
          <p id="year">${info[0].show.premiered}</p>
          <p id="name">${info[0].show.name}</p>
          <p id="ganre">${info[0].show.genres}</p>

          ${info[0].show.summary}
        </div>
      </div>
    `;
  });

  form.reset();
});
