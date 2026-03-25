const container = document.getElementById("app-list");

sites.forEach(site => {
  const div = document.createElement("div");
  div.className = "app";

  div.innerHTML = `
    <img src="${site.icon}" alt="">
    <div class="app-text">
      <h2>${site.name}</h2>
      <p>${site.description}</p>
    </div>
  `;

  div.onclick = () => {
    window.open(site.url, "_blank");
  };

  container.appendChild(div);
});
