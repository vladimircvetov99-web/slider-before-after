let imageBlock = document.querySelector('.image-block');
let imageAfterWrap = document.querySelector('.image-after');
let imageAfter = document.querySelector('.image-after img');
let rangeBtn = document.querySelector('#rangeBtn');


let wrapperWidth = imageBlock.clientWidth;

imageAfter.style.width = wrapperWidth + 'px';
console.log(wrapperWidth);


let updateWidth = () => {
    let rangeValue = rangeBtn.value;
    console.log(rangeValue);
    imageAfterWrap.style.width = `${rangeValue}%`;
}


rangeBtn.addEventListener('input', updateWidth);
updateWidth();