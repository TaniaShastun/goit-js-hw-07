//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании 
//ползунка будет меняться размер текста.
 const inputSize = document.querySelector ('#font-size-control');
 const spanSize = document.querySelector ('#text');
 inputSize.addEventListener('input',changeFontSize);
 function changeFontSize(e){
    spanSize.style.fontSize = e.target.value + "px";

 }