import cardsData from "../DATA/cards-data.js";

console.log(cardsData);
// circle icon
const circleIcon = document.createElement("i");
circleIcon.classList.add("fa");
circleIcon.classList.add("fa-solid");
circleIcon.classList.add("fa-circle");

// get cards container element
const cardsContainer = document.getElementById("cards-container");

//looping through array of cards to create the html of each one
cardsData.forEach((card, index) => {
  //create html elements
  const cardElement = document.createElement("div");
  cardElement.id = index + 1;
  cardElement.classList.add("card");
  cardElement.classList.add(cardElement.id % 2 === 0 ? "even" : "odd");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const imageElement = document.createElement("img");
  imageElement.id = `card-img-${index + 1}`;

  const titleElement = document.createElement("h2");
  titleElement.textContent = card.title;
  titleElement.classList.add("card-title");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-info");
  cardHeader.classList.add("row-container");
  card.topics.forEach((topic, index) => {
    if (index === 0) {
      const h3Element = document.createElement("h3");
      h3Element.textContent = topic;
      cardHeader.appendChild(h3Element);
    } else if (index === 1) {
      const pElement = document.createElement("p");
      pElement.textContent = topic;
      const iconOne = circleIcon.cloneNode(true);
      const iconTwo = circleIcon.cloneNode(true);
      cardHeader.appendChild(iconOne);
      cardHeader.appendChild(pElement);
      cardHeader.appendChild(iconTwo);
    } else if (index === 2) {
      const pElement = document.createElement("p");
      pElement.textContent = topic;
      cardHeader.appendChild(pElement);
    }
  });

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = card.text;
  descriptionElement.classList.add("card-description");

  const techsContainer = document.createElement("div");
  techsContainer.classList.add("card-tech");
  const techsElement = document.createElement("ul");
  techsElement.classList.add("list-categories");
  techsElement.classList.add("row-container");
  card.technologies.forEach((tech) => {
    const techElement = document.createElement("li");
    const techBackground = document.createElement("div");
    techBackground.classList.add("box-background");
    const techText = document.createElement("p");
    techText.innerText = tech;
    techBackground.appendChild(techText);
    techElement.appendChild(techBackground);
    techsElement.appendChild(techElement);
  });

  // create buttons container
  const buttonsElement = document.createElement("div");
  buttonsElement.classList.add("buttons");

  // create each individual button
  card.buttons.forEach((button, index) => {
    const buttonElement = document.createElement("a");
    buttonElement.href = button.url;
    buttonElement.textContent = button.text;
    buttonElement.classList.add("button");
    buttonElement.classList.add("normal-button");

    if (index === 0) {
      buttonElement.addEventListener("click", () => {
        openPopup(card.details);
      });
    }
    buttonsElement.appendChild(buttonElement);
  });

  // append elements to sub container
  cardContent.appendChild(titleElement);
  cardContent.appendChild(cardHeader);
  cardContent.appendChild(descriptionElement);
  cardContent.appendChild(techsElement);
  cardContent.appendChild(buttonsElement);

  // append all the elements to the card
  cardElement.appendChild(imageElement);
  cardElement.appendChild(cardContent);

  // append the card to the cards container
  cardsContainer.appendChild(cardElement);
});
