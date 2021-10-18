let div1 = document.getElementById("search");
var data = localStorage.getItem("news_data");
var s = JSON.parse(data);
//   console.log(data);
function show(s) {
  s.forEach(({ author, urlToImage, title, description }) => {
    var div = document.createElement("div");
    var image = document.createElement("img");

    image.src = urlToImage;
    image.style.width = "400px";
    image.style.height = "300px";

    var p = document.createElement("p");
    var t = document.createElement("p");
    var d = document.createElement("p");
    t.innerText = title;
    p.innerText = author;
    d.innerText = description;

    div.append(image, p, t, d);
    div1.append(div);
  });
}

show(s);
