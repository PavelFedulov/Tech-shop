// плавная прокрутка
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


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
