var timerId;
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
  resu.forEach(({ author, urlToImage, title, description }) => {
    var div = document.createElement("div");
    div.addEventListener("click", () => {
      localStorage.setItem(
        "mynews",
        JSON.stringify({ author, urlToImage, title, description })
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

function show_search() {
  var inp1 = document.querySelector("input").value;
  fetch(
    `https://newsapi.org/v2/everything?q=${inp1}&sortBy=publishedAt&apiKey=eac5083f1e5e49418009d0269b6763b4`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //   console.log(res);
      render_data(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

get_popular();
//debounce
function seach_data_show(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    func();
  }, delay);
}
// https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=API_KEY
var arr = [];
function render_data(res) {
  //   arr.push(res.articles);

  localStorage.setItem("news_data", JSON.stringify(res.articles));
  window.location.href = "search.html";
}
