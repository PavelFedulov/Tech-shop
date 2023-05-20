//общие тэги
const body = document.querySelector('body');
const wrapper = document.createElement('div');

//Header start

//переменные тэгов
const header = document.createElement('header');
const headerWrapper = document.createElement('div');
const headerLogo = document.createElement('div');
const headerLogoLink = document.createElement('a');
const headerTitle = document.createElement('h1');
const headerNav = document.createElement('div');
const headerList = document.createElement('ul');

//классы тэгов
header.classList.add('header')
wrapper.classList.add('wrapper');
headerWrapper.classList.add('header__wrapper');
headerLogo.classList.add('header__logo');
headerLogoLink.classList.add('header__logo-link');
headerTitle.classList.add('header__title');
headerNav.classList.add('header__nav');
headerList.classList.add('header__list');

//заполнение тэгов
headerTitle.textContent = 'Tech shop';

//сборка тэгов
body.appendChild(header);
header.appendChild(wrapper);
wrapper.appendChild(headerWrapper);
headerWrapper.appendChild(headerLogo);
headerLogo.appendChild(headerLogoLink);
headerLogoLink.appendChild(headerTitle);
headerWrapper.appendChild(headerNav);
headerNav.appendChild(headerList);

//массив объектов headerList
const headerListArray = [
  'Apple',
  'Samsung',
  'Xiaomi',
];

//цикл для сборки headerList
const createHeaderHTMLList = (headerListArray) => {
  const parts = [];
  for (const item of headerListArray) {
    parts.push(`<li class = "header__item">
    <a href = "#apple" class = "header__link">
    #{item}
    </a>
    </li>`)
  }
  const headerLink = parts.join('');
  const result = headerList.appendChild(headerLink);
  return result;
}



































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
