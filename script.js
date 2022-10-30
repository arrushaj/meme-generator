const formElement = document.querySelector("form");


formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const newImage = document.querySelector("#image-url").value;
  if (newImage === "") {
    alert("Please submit a URL for the image!");
    return false;
  }
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
  const button = document.createElement("button");
  button.addEventListener("click", function (event) {
      event.target.parentElement.remove();
  });
  button.innerText = "Delete";
  newDiv.append(button);
  newDiv.append(image);
  newDiv.append(textDiv);
  newDiv.append(textDivBottom);


  formElement.reset();

});