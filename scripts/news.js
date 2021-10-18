var hello = JSON.parse(localStorage.getItem("mynews"));

let div1 = document.getElementById("hello");
function data_me(hello) {
  div1.innerHTML = null;
  var div = document.createElement("div");

  var image = document.createElement("img");
  image.src = hello.urlToImage;
  var p = document.createElement("p");
  p.innerText = hello.title;
  div.append(image, p);
  div1.append(div);
}
data_me(hello);
