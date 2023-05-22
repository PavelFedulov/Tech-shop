//общие тэги
const body = document.querySelector("body");
const wrapper = document.createElement("div");
const wrapperFullApple = document.createElement("div");
const wrapperFullSamsung = document.createElement("div");
const wrapperFullXiaomi = document.createElement("div");
const wrapperFooter = document.createElement('div');
const buttonUp = document.createElement('div');
const buttonUpPic = document.createElement('img')
    //----------------------------------------------------------------------------

//переменные тэгов

//header
const header = document.createElement("header");
const headerWrapper = document.createElement("div");
const headerLogo = document.createElement("div");
const headerLogoLink = document.createElement("a");
const headerTitle = document.createElement("h1");
const headerNav = document.createElement("div");
const headerList = document.createElement("ul");

//section: apple 
const appleSection = document.createElement("section");
const appleCaption = document.createElement("div");
const appleTitle = document.createElement("h2");
const appleCards = document.createElement("div");

//section: samsung
const samsungSection = document.createElement('section');
const samsungCaption = document.createElement('div');
const samsungTitle = document.createElement('h2');
const samsungCards = document.createElement('div');

//section: xiaomi
const xiaomiSection = document.createElement('section');
const xiaomiCaption = document.createElement('div');
const xiaomiTitle = document.createElement('h2');
const xiaomiCards = document.createElement('div');

//footer
const footer = document.createElement('footer');
const footerLogo = document.createElement('div');
const footerTitle = document.createElement('h2');
const footerNav = document.createElement('footerNav');
const footerList = document.createElement("ul");
//----------------------------------------------------------------------------

//классы тэгов

//общие

buttonUp.classList.add('btn__up', 'btn__up-hide');
buttonUpPic.classList.add('btn__up-pic');
buttonUpPic.setAttribute('src', '../img/btn-up.png');

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
appleSection.setAttribute('id', 'Apple');
appleSection.classList.add("apple");
wrapperFullApple.classList.add("wrapper-full");
appleCaption.classList.add("apple__caption", "section__caption");
appleTitle.classList.add("apple__title", "section__title");
appleCards.classList.add("apple__cards", "section__cards");

//section: samsung
wrapperFullSamsung.classList.add("wrapper-full");
samsungSection.setAttribute('id', 'Samsung');
samsungSection.classList.add('samsung');
samsungCaption.classList.add('samsung__caption', 'section__caption');
samsungTitle.classList.add('samsung__title', 'section__title');
samsungCards.classList.add('samsung__cards', 'section__cards');

//section: xiaomi
wrapperFullXiaomi.classList.add("wrapper-full");
xiaomiSection.setAttribute('id', 'Xiaomi');
xiaomiSection.classList.add('xiaomi');
xiaomiCaption.classList.add('xiaomi__caption', 'section__caption');
xiaomiTitle.classList.add('xiaomi__title', 'section__title');
xiaomiCards.classList.add('xiaomi__cards', 'section__cards');

//footer

footer.classList.add('footer');
footerNav.classList.add('footer__nav');
wrapperFooter.classList.add('wrapper');
footerList.classList.add('footer__list');
footerLogo.classList.add('footer__logo');
footerTitle.classList.add('footer__title');
//----------------------------------------------------------------------------

//заполнение тэгов
headerTitle.textContent = "Tech shop";
appleTitle.textContent = "Let's see what we have from Apple";
samsungTitle.textContent = "That's what we have by Samsung";
xiaomiTitle.textContent = "And what about Xiaomi";
footerTitle.textContent = 'TechShop'

//----------------------------------------------------------------------------

//сборка тэгов

//общие

buttonUp.appendChild(buttonUpPic);

//header
body.appendChild(buttonUp);
body.appendChild(header);
header.appendChild(wrapper);
wrapper.appendChild(headerWrapper);
headerWrapper.appendChild(headerLogo);
headerLogo.appendChild(headerLogoLink);
headerLogoLink.appendChild(headerTitle);
headerWrapper.appendChild(headerNav);
headerNav.appendChild(headerList);
buttonUp.appendChild(buttonUpPic);

//section: apple
body.appendChild(appleSection);
appleSection.appendChild(wrapperFullApple);
wrapperFullApple.appendChild(appleCaption);
appleCaption.appendChild(appleTitle);
wrapperFullApple.appendChild(appleCards);

//section: samsung
body.appendChild(samsungSection);
samsungSection.appendChild(wrapperFullSamsung);
wrapperFullSamsung.appendChild(samsungCaption);
samsungCaption.appendChild(samsungTitle);
wrapperFullSamsung.appendChild(samsungCards);

//section: xiaomi
body.appendChild(xiaomiSection);
xiaomiSection.appendChild(wrapperFullXiaomi);
wrapperFullXiaomi.appendChild(xiaomiCaption);
xiaomiCaption.appendChild(xiaomiTitle);
wrapperFullXiaomi.appendChild(xiaomiCards);

//footer

body.appendChild(footer);
footer.appendChild(wrapperFooter);
wrapperFooter.appendChild(footerLogo);
footerLogo.appendChild(footerTitle);
wrapperFooter.appendChild(footerNav);
footerNav.appendChild(footerList);
//----------------------------------------------------------------------------

//Header

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
//----------------------------------------------------------------------------
//Apple block start

//функция создания карточки
const generateAppleCard = (pic, model) => {
    return `
  <div class="apple__card section__card">
      <img class = "apple__card-pic section__card-pic" src=${pic} alt="macbook pro" onClick="imgsrc();">
      <h3 class="apple__card-title section__card-title">
        ${model}
      </h3>
      <p class="apple__card-subtitle section__card-subtitle">
        ${getDateForCard()}
      </p>
      <div class = 'bt__buy-block'>
      <button class="bt__buy">Купить</button>
      </div>
  </div>
  `;
};

//массив объектов карточек apple
const appleCardList = [
    { pic: './img/AppleImg/MacBook_Pro_2.jpg', model: "MacBook Pro", year: 2015 },
    { pic: './img/AppleImg/iPhone_12_1.jpg', model: "iPhone 12", year: 2014 },
    { pic: './img/AppleImg/Apple_Watch_1.jpg', model: "Apple Watch Series 8", year: 2022 },
    { pic: './img/AppleImg/MacBook_Pro_1.jpg', model: "MacBook Pro", year: 2015 },
    { pic: './img/AppleImg/MacBook_Pro_3.jpg', model: "MacBook Pro", year: 2015 },
    { pic: './img/AppleImg/MacBook_Pro_4.jpg', model: "MacBook Pro", year: 2015 },
];



const appleCardHTML = appleCardList
    .map((card) => {
        return generateAppleCard(card.pic, card.model, card.year);
    })
    .join("");

appleCards.innerHTML = appleCardHTML;
//----------------------------------------------------------------------------
//samsung block start

//массив объектов карточек samsung
const samsungCardList = [
    { pic: './img/AppleImg/MacBook_Pro_2.jpg', model: "Samsung", year: 2015 },
    { pic: './img/AppleImg/iPhone_12_1.jpg', model: "Samsung", year: 2014 },
    { pic: './img/AppleImg/Apple_Watch_1.jpg', model: "Samsung", year: 2022 },
    { pic: './img/AppleImg/MacBook_Pro_1.jpg', model: "Samsung", year: 2015 },
    { pic: './img/AppleImg/MacBook_Pro_3.jpg', model: "Samsung", year: 2015 },
    { pic: './img/AppleImg/MacBook_Pro_4.jpg', model: "Samsung", year: 2015 },
]

//функция создания карточки
const generateSamsungCard = (pic, model) => {
    return `
  <div class="samsung__card section__card">
      <img class = "samsung__card-pic section__card-pic" src=${pic} alt="macbook pro" onClick="imgsrc();">
      <h3 class="samsung__card-title section__card-title">
        ${model}
      </h3>
      <p class="apple_samsung-subtitle section__card-subtitle">
        ${getDateForCard()}
      </p>
      <div class = 'bt__buy-block'>
      <button class="bt__buy">Купить</button>
      </div>
  </div>
  `;
};

const samsungCardHTML = samsungCardList
    .map((card) => {
        return generateSamsungCard(card.pic, card.model, card.year);
    })
    .join("");

samsungCards.innerHTML = samsungCardHTML;
//----------------------------------------------------------------------------
//xiaomi block start 

//массив объектов карточек xiaomi
const xiaomiCardList = [
    { pic: './img/AppleImg/MacBook_Pro_2.jpg', model: "Xiaomi", year: 2015 },
    { pic: './img/AppleImg/iPhone_12_1.jpg', model: "Xiaomi", year: 2014 },
    { pic: './img/AppleImg/Apple_Watch_1.jpg', model: "Xiaomi", year: 2022 },
    { pic: './img/AppleImg/MacBook_Pro_1.jpg', model: "Xiaomi", year: 2015 },
    { pic: './img/AppleImg/MacBook_Pro_3.jpg', model: "Xiaomi", year: 2015 },
    { pic: './img/AppleImg/MacBook_Pro_4.jpg', model: "Xiaomi", year: 2015 },
]

//функция создания карточки
const generateXiaomiCard = (pic, model) => {
    return `
  <div class="xiaomi__card section__card">
      <img class = "xiaomi__card-pic section__card-pic" src=${pic} alt="macbook pro" onClick="imgsrc();">
      <h3 class="xiaomi__card-title section__card-title">
        ${model}
      </h3>
      <p class="apple_xiaomi-subtitle section__card-subtitle">
        <div class = "date"> ${getDateForCard()} </div>
      </p>
      <div class = 'bt__buy-block'>
      <button class="bt__buy">Купить</button>
      </div>
  </div>
  `;
};

const xiaomiCardHTML = xiaomiCardList
    .map((card) => {
        return generateXiaomiCard(card.pic, card.model, card.year);
    })
    .join("");

xiaomiCards.innerHTML = xiaomiCardHTML;
//----------------------------------------------------------------------------

//footer block 

const footerItemsArray = [
    { navPoint: "Apple" },
    { navPoint: "Samsung" },
    { navPoint: "Xiaomi" },
];

//функция создания элементов меню навигации
const createFooterHTMLList = (navPoint) => {
    return `<li class = "footer__item">
  <a href = "#${navPoint}" class = "footer__link">
  ${navPoint}
  </a>
  </li>`;
};

//создаем переменную с HTML кодом из функции
const footerListHTML = footerItemsArray
    .map((navPointName) => {
        return createFooterHTMLList(navPointName.navPoint);
    })
    .join("");
//вставляем HTML в footerList
footerList.innerHTML = footerListHTML;
//----------------------------------------------------------------------------






// получение даты
function getDateForCard() {
    const date = new Date();
    const day = date.getDate();
    const week = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(date);
    console.log(day);
    console.log(week);
    console.log(month);
    console.log(year);

    return `День:${day},номер недели: ${week},месяц:${month}, год: ${year} `
}



// плавная прокрутка
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

//кнопка поднятия вверх
const btnUp = {
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

btnUp.addEventListener();