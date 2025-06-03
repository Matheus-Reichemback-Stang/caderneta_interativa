const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weigth').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let descripton = '';

    value.classList.add('attention');
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        descripton = 'Você está abaixo do peso!';
    }
    else if(bmi >= 18.5 && bmi < 25){
        descripton = 'Você está no peso ideal';
        value.classList.remove('attention');
        value.classList.add('normal');
    }
    else if(bmi >= 25 && bmi < 30){
        descripton = 'Você está acima do peso';
    }
    else if(bmi >= 30 && bmi < 35){
        descripton = 'Você está com obesidade moderada';
    }
    else if(bmi >= 35 && bmi < 40){
        descripton = 'Você está com obesidade severa!';
    }
    else {
        descripton = 'Você está com obesidade mórbida!';
    }


    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = descripton;
});
