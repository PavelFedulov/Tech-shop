//переменные тэгов

//общие тэги
const body = document.querySelector("body");
const wrapper = document.createElement("div");
const wrapperFullApple = document.createElement("div");
const wrapperFullSamsung = document.createElement("div");
const wrapperFullXiaomi = document.createElement("div");
const wrapperFooter = document.createElement("div");
const buttonUp = document.createElement("div");
const buttonUpPic = document.createElement("img");
const opacityBlock = document.createElement('div');
const buttonBuy = document.getElementsByClassName('bt__buy');
//const buttonBuy = document.createElement('button');

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
const samsungSection = document.createElement("section");
const samsungCaption = document.createElement("div");
const samsungTitle = document.createElement("h2");
const samsungCards = document.createElement("div");

//section: xiaomi
const xiaomiSection = document.createElement("section");
const xiaomiCaption = document.createElement("div");
const xiaomiTitle = document.createElement("h2");
const xiaomiCards = document.createElement("div");

//footer
const footer = document.createElement("footer");
const footerLogo = document.createElement("div");
const footerTitle = document.createElement("h2");
const footerNav = document.createElement("footerNav");
const footerList = document.createElement("ul");

//order form
const formBody = document.createElement("div");
const form = document.createElement("div");
const orderForm = document.createElement("form");
const orderWrapper = document.createElement("div");
const quantityBlock = document.createElement("div");
const quantityLabel = document.createElement("div");
const quantityTitle = document.createElement("label");
const orderQuantity = document.createElement("input");
const colorBlock = document.createElement("div");
const colorGroupTitle = document.createElement("p");
const colorGroup = document.createElement("ul");
const commentBlock = document.createElement("div");
const commentTitle = document.createElement("div");
const commentLabel = document.createElement("label");
const commentField = document.createElement("textarea");
const formButtons = document.createElement("div");
const formBuyButton = document.createElement("button");
const formCloseButton = document.createElement("button");

//----------------------------------------------------------------------------

//классы тэгов

//общие

buttonUp.classList.add("btn__up", "btn__up-hide");
buttonUpPic.classList.add("btn__up-pic");
buttonUpPic.setAttribute("src", "../img/btn-up.png");
//opacityBlock.classList.add('opacity');
//buttonBuy.classList.add('bt__buy');

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
appleSection.setAttribute("id", "Apple");
appleSection.classList.add("apple");
wrapperFullApple.classList.add("wrapper-full");
appleCaption.classList.add("apple__caption", "section__caption");
appleTitle.classList.add("apple__title", "section__title");
appleCards.classList.add("apple__cards", "section__cards");

//section: samsung
wrapperFullSamsung.classList.add("wrapper-full");
samsungSection.setAttribute("id", "Samsung");
samsungSection.classList.add("samsung");
samsungCaption.classList.add("samsung__caption", "section__caption");
samsungTitle.classList.add("samsung__title", "section__title");
samsungCards.classList.add("samsung__cards", "section__cards");

//section: xiaomi
wrapperFullXiaomi.classList.add("wrapper-full");
xiaomiSection.setAttribute("id", "Xiaomi");
xiaomiSection.classList.add("xiaomi");
xiaomiCaption.classList.add("xiaomi__caption", "section__caption");
xiaomiTitle.classList.add("xiaomi__title", "section__title");
xiaomiCards.classList.add("xiaomi__cards", "section__cards");

//footer

footer.classList.add("footer");
footerNav.classList.add("footer__nav");
wrapperFooter.classList.add("wrapper");
footerList.classList.add("footer__list");
footerLogo.classList.add("footer__logo");
footerTitle.classList.add("footer__title");

//order__form

formBody.classList.add("form__body", 'form__body-hide');
form.classList.add("form");
orderForm.classList.add("order__form");
orderWrapper.classList.add("order__wrapper");
quantityBlock.classList.add("quantity__block");
quantityLabel.classList.add("quantity__label");
quantityTitle.classList.add("quantity__title");
quantityTitle.setAttribute("for", "order__quantity");
orderQuantity.setAttribute("type", "number");
orderQuantity.setAttribute("min", "1");
orderQuantity.setAttribute("placeholder", "1");
orderQuantity.classList.add("order__quantity");
colorBlock.classList.add("color__block");
colorGroupTitle.classList.add("color__group-title");
colorGroup.classList.add("color__group");
commentBlock.classList.add("comment");
commentTitle.classList.add("comment__title");
commentLabel.classList.add("comment__title");
commentField.classList.add("comment__field");
commentField.setAttribute("name", "comment");
commentField.setAttribute("id", "comment");
commentField.setAttribute("cols", "20");
commentField.setAttribute("rows", "10");
commentField.setAttribute("maxlength", "2000");
formButtons.classList.add("form__buttons");
formBuyButton.classList.add("bt__buy", "form__bt-buy");
formBuyButton.setAttribute("type", "submit");
formBuyButton.setAttribute("id", "buy-button");
formCloseButton.classList.add("bt__buy", "form__bt-close");
formCloseButton.setAttribute("type", "reset");
formCloseButton.setAttribute("id", "close-button");

//----------------------------------------------------------------------------

//заполнение тэгов
headerTitle.textContent = "Tech shop";
appleTitle.textContent = "Let's see what we have from Apple";
samsungTitle.textContent = "That's what we have by Samsung";
xiaomiTitle.textContent = "And what about Xiaomi";
footerTitle.textContent = "Tech Shop";
quantityTitle.textContent = "Specify the number of goods";
colorGroupTitle.textContent = "Select device color:";
commentTitle.textContent = "Enter a comment to the order:";
formBuyButton.textContent = "BUY";
formCloseButton.textContent = "CLOSE";

//----------------------------------------------------------------------------

//сборка тэгов

//общие

buttonUp.appendChild(buttonUpPic);
body.appendChild(opacityBlock);
opacityBlock.appendChild(header);
opacityBlock.appendChild(appleSection);
opacityBlock.appendChild(samsungSection);
opacityBlock.appendChild(xiaomiSection);
opacityBlock.appendChild(footer);

//header
body.appendChild(buttonUp);
header.appendChild(wrapper);
wrapper.appendChild(headerWrapper);
headerWrapper.appendChild(headerLogo);
headerLogo.appendChild(headerLogoLink);
headerLogoLink.appendChild(headerTitle);
headerWrapper.appendChild(headerNav);
headerNav.appendChild(headerList);
buttonUp.appendChild(buttonUpPic);

//section: apple
appleSection.appendChild(wrapperFullApple);
wrapperFullApple.appendChild(appleCaption);
appleCaption.appendChild(appleTitle);
wrapperFullApple.appendChild(appleCards);

//section: samsung
samsungSection.appendChild(wrapperFullSamsung);
wrapperFullSamsung.appendChild(samsungCaption);
samsungCaption.appendChild(samsungTitle);
wrapperFullSamsung.appendChild(samsungCards);

//section: xiaomi
xiaomiSection.appendChild(wrapperFullXiaomi);
wrapperFullXiaomi.appendChild(xiaomiCaption);
xiaomiCaption.appendChild(xiaomiTitle);
wrapperFullXiaomi.appendChild(xiaomiCards);

//footer
footer.appendChild(wrapperFooter);
wrapperFooter.appendChild(footerLogo);
footerLogo.appendChild(footerTitle);
wrapperFooter.appendChild(footerNav);
footerNav.appendChild(footerList);

//order__form
body.appendChild(formBody);
formBody.append(form);
form.appendChild(orderForm);
orderForm.appendChild(orderWrapper);
orderWrapper.appendChild(quantityBlock);
quantityBlock.appendChild(quantityLabel);
quantityLabel.appendChild(quantityTitle);
quantityBlock.appendChild(orderQuantity);
orderWrapper.appendChild(colorBlock);
colorBlock.appendChild(colorGroupTitle);
colorBlock.appendChild(colorGroup);
orderWrapper.appendChild(commentBlock);
commentBlock.appendChild(commentLabel);
commentLabel.appendChild(commentTitle);
commentBlock.appendChild(commentField);
orderWrapper.appendChild(formButtons);
formButtons.appendChild(formBuyButton);
formButtons.appendChild(formCloseButton);

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
const generateAppleCard = (pic, model, date) => {
    return `
  <div class="apple__card section__card">
      <img class = "apple__card-pic section__card-pic" src=${pic} alt="macbook pro" onClick="imgsrc();">
      <h3 class="apple__card-title section__card-title">
        ${model}
      </h3>
      <p class="apple__card-subtitle section__card-subtitle">
        ${date}
      </p>
      <div class = 'bt__buy-block'>
      <button class="bt__buy">BUY</button>
      </div>
  </div>
  `;
};

//массив объектов карточек apple
const appleCardList = [{
        pic: "./img/AppleImg/MacBook_Pro_2.jpg",
        model: "MacBook Pro",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/iPhone_12_1.jpg",
        model: "iPhone 12",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/Apple_Watch_1.jpg",
        model: "Apple Watch Series 8",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_1.jpg",
        model: "MacBook Pro",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_3.jpg",
        model: "MacBook Pro",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_4.jpg",
        model: "MacBook Pro",
        date: getDateForCard(),
    },
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
const samsungCardList = [{
        pic: "./img/AppleImg/MacBook_Pro_2.jpg",
        model: "Samsung",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/iPhone_12_1.jpg",
        model: "Samsung",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/Apple_Watch_1.jpg",
        model: "Samsung",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_1.jpg",
        model: "Samsung",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_3.jpg",
        model: "Samsung",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_4.jpg",
        model: "Samsung",
        date: getDateForCard(),
    },
];

//функция создания карточки
const generateSamsungCard = (pic, model, date) => {
    return `
  <div class="samsung__card section__card">
      <img class = "samsung__card-pic section__card-pic" src=${pic} alt="macbook pro" onClick="imgsrc();">
      <h3 class="samsung__card-title section__card-title">
        ${model}
      </h3>
      <p class="apple_samsung-subtitle section__card-subtitle">
        ${date}
      </p>
      <div class = 'bt__buy-block'>
      <button class="bt__buy">BUY</button>
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
const xiaomiCardList = [{
        pic: "./img/AppleImg/MacBook_Pro_2.jpg",
        model: "Xiaomi",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/iPhone_12_1.jpg",
        model: "Xiaomi",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/Apple_Watch_1.jpg",
        model: "Xiaomi",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_1.jpg",
        model: "Xiaomi",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_3.jpg",
        model: "Xiaomi",
        date: getDateForCard(),
    },
    {
        pic: "./img/AppleImg/MacBook_Pro_4.jpg",
        model: "Xiaomi",
        date: getDateForCard(),
    },
];

//функция создания карточки
const generateXiaomiCard = (pic, model, date) => {
    return `
  <div class="xiaomi__card section__card">
      <img class = "xiaomi__card-pic section__card-pic" src=${pic} alt="macbook pro" onClick="imgsrc();">
      <h3 class="xiaomi__card-title section__card-title">
        ${model}
      </h3>
      <p class="apple_xiaomi-subtitle section__card-subtitle">
        <div class = "date"> ${date} </div>
      </p>
      <div class = 'bt__buy-block'>
      <button class="bt__buy">BUY</button>
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

//order__form

const colorArray = [
    { color: "Black" },
    { color: "White" },
    { color: "Gold" },
    { color: 'Grey' }
];

function createOrderColorHTMLList(color) {
    return `
    <li class="color__item">
        <label for="color">${color}</label>
        <input type="radio" id="color" name="color" value="${color}" />
    </li>
    `;
}

const orderColorListHTML = colorArray
    .map((color) => {
        return createOrderColorHTMLList(color.color);
    })
    .join("");

colorGroup.innerHTML = orderColorListHTML;
//----------------------------------------------------------------------------
// получение даты
function getDateForCard(date) {
    const day = new Date(date);
    const weekday = day.getDay();
    const months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];

    const year = day.getFullYear();
    let week = weekday - 1;
    if (week < 0) {
        week = 6;
    }

    return `${months[week]}${year},${week} неделя`;
}
//----------------------------------------------------------------------------
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
//----------------------------------------------------------------------------
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
//----------------------------------------------------------------------------
// форма покупки

function successfullyBuy(e) {
    e.preventDefault();
    alert('Purchase successfully completed! Thank you!');
};

function hideOrderForm(e) {
    e.preventDefault();
    formBody.classList.add('form__body-hide')
    opacityBlock.classList.remove('opacity')

};

formBuyButton.addEventListener('click', successfullyBuy);

function showOrderForm(e) {
    e.preventDefault();
    formBody.classList.remove('form__body-hide')
    opacityBlock.classList.add('opacity')

};
//formBody.classList.add('.form__body-hide');
//opacityBlock.classList.remove('.opacity');
for (let i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener('click', showOrderForm);
}

formCloseButton.addEventListener('click', hideOrderForm);
//formCloseButton.addEventListener('click', hideOrderForm);