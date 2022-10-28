const formElement = document.querySelector("form");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const newImage = document.querySelector("#image-url").value;
  const topText = document.querySelector("#top-caption").value;
  const bottomText = document.querySelector("#bottom-caption").value;
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "imgDiv");
  const textDiv = document.createElement("div");
  const textDivBottom = document.createElement("div");
  textDiv.setAttribute("class", "textDivTop");
  textDivBottom.setAttribute("class", "textDivBottom");
  const image = document.createElement("img");
  image.src = newImage;
  image.alt = "meme";
  textDiv.innerText = topText;
  textDivBottom.innerText = bottomText;
  const parent = document.querySelector("#memes");
  parent.append(newDiv);
  newDiv.append(image);
  newDiv.append(textDiv);
  newDiv.append(textDivBottom);

});