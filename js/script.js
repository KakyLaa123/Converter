const inputRub = document.getElementById('rub'),
      inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    if (isNaN(inputRub.value)){
        inputUsd.value = 'Введите число';
    } else {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200){
            let data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });
    }
});

inputUsd.addEventListener('input', () => {
    if (isNaN(inputUsd.value)){
        inputRub.value = 'Введите число';
    } else {
        const request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
    
        request.addEventListener('load', () => {
            if (request.status === 200){
                let data = JSON.parse(request.response);
                inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);
            } else {
                inputRub.value = 'Что-то пошло не так';
            }
        });
    }
});