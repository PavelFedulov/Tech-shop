//общие тэги
const body = document.querySelector("body");
const wrapper = document.createElement("div");
const wrapperFull = document.createElement("div");

//Header start

//переменные тэгов

//header
const header = document.createElement("header");
const headerWrapper = document.createElement("div");
const headerLogo = document.createElement("div");
const headerLogoLink = document.createElement("a");
const headerTitle = document.createElement("h1");
const headerNav = document.createElement("div");
const headerList = document.createElement("ul");

//section: apple Tags
const appleSection = document.createElement("section");
const appleCaption = document.createElement("div");
const appleTitle = document.createElement("h2");
const appleCards = document.createElement("div");

//классы тэгов

//header
header.classList.add("header");
wrapper.classList.add("wrapper");
headerWrapper.classList.add("header__wrapper");
headerLogo.classList.add("header__logo");
headerLogoLink.classList.add("header__logo-link");
headerTitle.classList.add("header__title");
headerNav.classList.add("header__nav");
headerList.classList.add("header__list");

//section: apple
appleSection.classList.add("apple");
wrapperFull.classList.add("wrapper-full");
appleCaption.classList.add("apple__caption", "section__caption");
appleTitle.classList.add("apple__title", "section__title");
appleCards.classList.add("apple__cards", "section__cards");

//заполнение тэгов
headerTitle.textContent = "Tech shop";
appleTitle.textContent = "Let's see what we have from Apple";

//сборка тэгов

//header
body.appendChild(header);
header.appendChild(wrapper);
wrapper.appendChild(headerWrapper);
headerWrapper.appendChild(headerLogo);
headerLogo.appendChild(headerLogoLink);
headerLogoLink.appendChild(headerTitle);
headerWrapper.appendChild(headerNav);
headerNav.appendChild(headerList);

//section: apple
body.appendChild(appleSection);
appleSection.appendChild(wrapperFull);
wrapperFull.appendChild(appleCaption);
appleCaption.appendChild(appleTitle);
wrapperFull.appendChild(appleCards);

//массив объектов headerList
const headerItemsArray = [
  { navPoint: "Apple" },
  { navPoint: "Samsung" },
  { navPoint: "Xiaomi" },
];

//функция создания элементов меню навигации
const createHeaderHTMLList = (navPoint) => {
  return `<li class = "header__item">
    <a href = "#${navPoint}" class = "header__link">
    ${navPoint}
    </a>
    </li>`;
};

//создаем переменную с HTML кодом из функции
const headerListHTML = headerItemsArray
  .map((navPointName) => {
    return createHeaderHTMLList(navPointName.navPoint);
  })
  .join("");
//вставляем HTML в headerList
headerList.innerHTML = headerListHTML;

//Header end

//Apple block start

//функция создания карточки
const generateAppleCard = (pic, model, year) => {
  return `
  <div class="apple__card section__card">
      <img class = "apple__card-pic section__card-pic" src=${pic} alt="macbook pro" onClick="imgsrc();">
      <h3 class="apple__card-title section__card-title">
        ${model}
      </h3>
      <p class="apple__card-subtitle section__card-subtitle">
        ${year}
      </p>
      <button class="bt__buy">Купить</button>
  </div>
  `;
};


//массив с картинками карточек apple
const appleMBPPicsArray = [
  "./img/MacBook/MacBook_Pro_1.jpg",
  "./img/MacBook/MacBook_Pro_2.jpg",
  "./img/MacBook/MacBook_Pro_3.jpg",
  "./img/MacBook/MacBook_Pro_4.jpg",
];

const appleCardList = [
  { pic: appleMBPPicsArray[0], model: "MacBook Pro", year: 2015 },
  { pic: appleMBPPicsArray[1], model: "MacBook Pro", year: 2015 },
];

const appleCardHTML = appleCardList
  .map((card) => {
    return generateAppleCard(card.pic, card.model, card.year);
  })
  .join("");

appleCards.innerHTML = appleCardHTML;

// плавная прокрутка
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const btnUP = {
  el: document.querySelector(".btn__up"),
  show() {
    // удаляет класс btn__up-hide
    this.el.classList.remove("btn__up-hide");
  },
  hide() {
    // добавляет класс btn__up-hide
    this.el.classList.add("btn__up-hide");
  },
  addEventListener() {
    // при прокрутке страницы
    window.addEventListener("scroll", () => {
      // определяет величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 100px, то отображаем кнопку, иначе скрываем
      scrollY > 100 ? this.show() : this.hide();
    });
    // при нажатии на кнопку btn__up
    document.querySelector(".btn__up").onclick = () => {
      // поднимаемся в начало страницы
      window.scrollTo({
        top: 0,
        lefr: 0,
        behavior: "smooth",
      });
    };
  },
};
