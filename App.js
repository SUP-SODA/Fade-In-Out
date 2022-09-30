const reviewContainer = document.querySelector("#review-container");

const reviews = [
  {
    img: "./images/pic1.jpg",
    alt: "Profile picture of Sahil Kumar Jamwal",
    text: "I really enjoyed this course! It was fun and interactive as well as educational. I learnt a lot.",
    name: "Zeus"
  },
  {
    img: "./images/pic2.jpg",
    alt: "Profile picture of Sahil Kumar Jamwal",
    text: "I really enjoyed this course! It was fun and interactive as well as educational. I learnt a lot.",
    name: "Joseph"
  },
  {
    img: "./images/pic3.jpg",
    alt: "Profile picture of Mark",
    text: "I really enjoyed this course! It was fun and interactive as well as educational. I learnt a lot.",
    name: "Mark"
  }

]

function populateDisplay() {
  reviews.forEach(review => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.addEventListener("mouseover", showcard);
    cardElement.addEventListener("mouseleave", blurcard);

    const imageContainer = document.createElement("div");
    const imageElement = document.createElement("img");
    imageContainer.classList.add("img-container");
    imageElement.setAttribute("src", review.img);
    imageElement.setAttribute("alt", review.alt);
    imageContainer.append(imageElement);


    const paraElement = document.createElement("p");
    paraElement.textContent = review.text;
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");
    nameContainer.textContent = review.name;

    cardElement.append(imageContainer, paraElement, nameContainer);
    reviewContainer.appendChild(cardElement);
  })
}

function showcard() {
  this.classList.add("active");
}

function blurcard() {
  this.classList.remove("active");
}
populateDisplay();

