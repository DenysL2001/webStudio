// Обработчик нажатия на кнопку фильтра
document.querySelectorAll(".buttons-item-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const filterValue = this.getAttribute("data-filter");
    filterCards(filterValue);
  });
});

// Функция для фильтрации карточек
function filterCards(filter) {
  const cards = document.querySelectorAll(".projects-list-item");

  cards.forEach((card) => {
    if (filter === "all") {
      card.style.display = "inline-block";
    } else if (card.classList.contains(filter)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}

// Получаем ссылки на элементы DOM
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("overlay");
const closeButton = document.querySelector(".modal-window__close");

// Сохраняем текущую позицию прокрутки перед открытием модального окна
let scrollTop = 0;

// Открываем модальное окно
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  // Запрещаем прокрутку страницы
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.overflow = "hidden";
});

// Закрываем модальное окно при клике на крестик
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  // Разрешаем прокрутку страницы
  document.body.style.overflow = "auto";
  // Прокручиваем страницу обратно на предыдущую позицию
  window.scrollTo(0, scrollTop);
});

// Закрываем модальное окно, если пользователь кликнул за его пределами
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    // Разрешаем прокрутку страницы
    document.body.style.overflow = "auto";
    // Прокручиваем страницу обратно на предыдущую позицию
    window.scrollTo(0, scrollTop);
  }
});
 
