const container = document.querySelector("#container");

const fetchApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  data.forEach(({ name, email }) => {
    container.innerHTML += `<div class="card">
        <h3>${name}</h3>
        <small>Email:<em> ${email} </em></small>
      </div>`;
  });
};

fetchApi("http://localhost:5000/api/users");
