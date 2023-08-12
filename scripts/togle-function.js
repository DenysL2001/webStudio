document.addEventListener("DOMContentLoaded", function () {
  // Получение ссылок на кнопки навигации
  const homeButton = document.querySelector(".home-button");
  const portfolioButton = document.querySelector(".portfolio-button");

  // Функция для установки активной кнопки
  function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll(".header-item-link");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    activeButton.classList.add("active");
  }

  // Обработчики событий для кнопок навигации
  homeButton.addEventListener("click", function () {
    setActiveButton(homeButton);
    window.location.href = "index.html";
  });

  portfolioButton.addEventListener("click", function () {
    setActiveButton(portfolioButton);
    window.location.href = "portfolio.html";
  });

  // Проверка текущего пути и подсветка активной кнопки при загрузке страницы
  const currentPath = window.location.pathname;
  if (currentPath.endsWith("index.html")) {
    setActiveButton(homeButton);
  } else if (currentPath.endsWith("portfolio.html")) {
    setActiveButton(portfolioButton);
  }

  // Получаем ссылки на кнопку бургер-меню и элементы линий
  const burgerMenuButton = document.querySelector(".header__burger-menu");
  const firstLine = document.querySelector(".burger-line-first");
  const secondLine = document.querySelector(".burger-line-second");
    const thirdLine = document.querySelector(".burger-line-third");
    const menu = document.querySelector(".header-navigation");

  // Добавляем обработчик клика на кнопку бургер-меню
  burgerMenuButton.addEventListener("click", function () {
    // Добавляем/удаляем класс "open" у каждой линии для анимации
    firstLine.classList.toggle("open");
    secondLine.classList.toggle("open");
    thirdLine.classList.toggle("open");

    // Добавляем/удаляем класс header--active для открытия/закрытия меню
    menu.classList.toggle("header--active");

    // Получаем ссылку на элемент body для блокировки скролла
    const bodyElement = document.querySelector("body");

    // Блокируем/разблокируем скролл страницы при открытом/закрытом меню
    bodyElement.classList.toggle("menu-opened");
  });
});