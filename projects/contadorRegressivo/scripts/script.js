const regex = /[a-z]/;

const button = document.getElementById('btn');
const dataPage = document.getElementById("data");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timerContainer = document.getElementById("timer");
const time = document.getElementById("time");

// console.log(button);
// console.log(dataPage);
// console.log(minutes);
// console.log(seconds);
// console.log(timer);
// console.log(time);


// Define o timer e faz com que ele funcione
function setTimer(valueInMinutes, valueInSeconds) {
    let intervalId = setInterval( function(){
        time.innerText = `${valueInMinutes}:${valueInSeconds}`
        if(valueInSeconds < 10){
            time.innerText = `${valueInMinutes}:0${valueInSeconds}`;
        }
        if(valueInMinutes > 0 && valueInSeconds == 0){
            valueInMinutes--;
            valueInSeconds = 59;
        }
        if(valueInMinutes == 0 && valueInSeconds == 0){
            alert('O tempo acabou!');
            clearInterval(intervalId);
            dataPage.classList.remove('hide');
            timerContainer.classList.add('hide');
        }
        valueInSeconds--;
    }, 1000)
}

// Adicionando evendo de mudança e páginas com validações nos inputs
button.addEventListener('click', function(){
    let valueInMinutes = minutes.value.trim();
    let valueInSeconds = seconds.value.trim();
    if(regex.test(valueInMinutes) || regex.test(valueInSeconds)){
        alert('Não é permitido o uso de letras!');
    } else if(valueInMinutes == '' || valueInSeconds == ''){
        alert('Os campos precisam ser preenchidos!');
    } else if(valueInMinutes < 0 || valueInSeconds < 0){
        alert('Há valores inválidos!');
    }
    else {
        dataPage.classList.add('hide');
        timerContainer.classList.remove('hide');
        if(valueInSeconds >= 60) {
            const addMoreMinutes = parseInt(valueInSeconds / 60);
            valueInSeconds = parseInt(valueInSeconds % 60)
            valueInMinutes = parseInt(valueInMinutes) + addMoreMinutes;
        }
        setTimer(parseInt(valueInMinutes), parseInt(valueInSeconds))
        minutes.value = '';
        seconds.value = '';
    }
})

