const rangeInput = document.querySelectorAll('.range-input input'),
    progress = document.querySelector('.aside-filter__range-price .aside-filter__range-progress'),
    priceInput = document.querySelectorAll('.aside-filter__range-num input');
let priceGap = 1000;


rangeInput.forEach(input => {
    input.addEventListener('input', (e) => {
        // getting two ranges value and parsing  them  to number
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "rande-min") { // if active is min slider
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }

        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

        /*let percent = (minVal / rangeInput[0].max) * 100;*/

    });
});