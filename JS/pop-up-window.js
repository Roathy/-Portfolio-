import cardDetails from '../DATA/cards-details-data.js';

const deviceWidth = window.innerWidth;

function openPopup(parentContainerID) {
  const popupWindow = document.createElement('div');
  const currentCard = document.getElementById(parentContainerID);
  const detailsCard = currentCard.cloneNode(true);
  const detailsCardContainer = currentCard.cloneNode(true);
  const externalLinkIcon = document.createElement('i');
  externalLinkIcon.className = 'fa-solid fa-arrow-up-right-from-square';
  const githubIcon = document.createElement('i');
  githubIcon.className = 'fa-brands fa-github';
  const xmarIcon = document.createElement('i');
  xmarIcon.className = 'fa fa-thin fa-xmark';
  xmarIcon.addEventListener('click', () => {
    popupWindow.remove();
  });
  detailsCardContainer.id = 'popup-container';
  detailsCardContainer.innerHTML = '';
  detailsCardContainer.appendChild(xmarIcon);
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-content');
  cardHeader.appendChild(detailsCard.querySelector('.card-title'));
  cardHeader.appendChild(detailsCard.querySelector('.card-info'));
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-content');
  const cardText = document.createElement('p');
  cardText.innerText = cardDetails;
  cardInfo.appendChild(cardText);
  cardInfo.appendChild(detailsCard.querySelector('.list-categories'));
  const buttonsElement = detailsCard.querySelector('.buttons');

  const buttonElement = document.createElement('a');
  buttonElement.href = '#';
  buttonElement.textContent = 'See source';
  buttonElement.classList.add('button');
  buttonElement.classList.add('normal-button');
  buttonsElement.appendChild(buttonElement);

  buttonsElement.children[0].appendChild(externalLinkIcon);
  buttonsElement.children[1].appendChild(githubIcon);

  popupWindow.id = 'popup-window';
  popupWindow.classList.add('card');
  detailsCardContainer.appendChild(cardHeader);
  detailsCardContainer.appendChild(detailsCard.querySelector('img'));
  detailsCardContainer.appendChild(cardInfo);
  detailsCardContainer.appendChild(buttonsElement);

  if (deviceWidth >= 900) {
    const techsButtonsContainer = document.createElement('div');
    techsButtonsContainer.classList.add('techs-buttons');

    const techElement = document.createElement('li');
    const techBackground = document.createElement('div');
    techBackground.classList.add('box-background');
    const techText = document.createElement('p');
    techText.innerText = 'Ruby';
    techBackground.appendChild(techText);
    techElement.appendChild(techBackground);
    const techElement1 = document.createElement('li');
    const techBackground1 = document.createElement('div');
    techBackground1.classList.add('box-background');
    const techText1 = document.createElement('p');
    techText1.innerText = 'Bootstrap';
    techBackground1.appendChild(techText1);
    techElement1.appendChild(techBackground1);

    techsButtonsContainer.appendChild(
      cardInfo.querySelector('.list-categories'),
    );
    techsButtonsContainer
      .querySelector('.list-categories')
      .appendChild(techElement);
    techsButtonsContainer
      .querySelector('.list-categories')
      .appendChild(techElement1);

    techsButtonsContainer.appendChild(buttonsElement);
    cardInfo.innerHTML = '';
    cardText.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`;
    cardInfo.appendChild(cardText);
    cardInfo.appendChild(techsButtonsContainer);
    cardInfo.classList.add('card-details');
  }

  popupWindow.appendChild(detailsCardContainer);
  document.body.appendChild(popupWindow);
}

export default openPopup;
