function get_popular() {
  fetch(
    "https://newsapi.org/v2/top-headlines?q=world&sortBy=popularity&apiKey=eac5083f1e5e49418009d0269b6763b4"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //   console.log(res);

      resm(res.articles);
    })
    .catch((err) => {
      console.log(err);
    });
}

let div1 = document.getElementById("app");
function resm(resu) {
  resu.forEach(({ author, urlToImage, title }) => {
    var div = document.createElement("div");
    div.addEventListener("click", () => {
      localStorage.setItem(
        "mynews",
        JSON.stringify({ author, urlToImage, title })
      );
      window.location.href = "news.html";
    });
    var image = document.createElement("img");

    image.src = urlToImage;
    image.style.width = "400px";
    var p = document.createElement("p");
    var t = document.createElement("p");
    t.innerText = title;
    p.innerText = author;

    div.append(image, p, t);
    div1.append(div);
  });
}
get_popular();
