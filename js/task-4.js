//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const counterClicks =document.querySelector ('#value');
const increment = () => {
    counterValue += 1;
    counterClicks.textContent =counterValue;
};

const decrement = () => {
    counterValue -= 1;
    counterClicks.textContent =counterValue;
  };
  const reduceBtn = document.querySelector(' button[data-action="decrement"]').addEventListener("click", decrement);
  const increaseBtn = document.querySelector(' button[data-action="increment"]').addEventListener("click", increment);
