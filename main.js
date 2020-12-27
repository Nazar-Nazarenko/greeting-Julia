let wrapper = document.querySelector('.wrapper');
let wrapperNext = document.querySelector('.wrapper-next');
let question = document.querySelector('.question');
let photo = document.querySelector('#photo');
let hint = document.querySelector('.hint');
let value = document.querySelector('.value');
let error = document.querySelector('.error');
let currentStepIndex = 0;
let questionButton = document.querySelector('.quest-button');
function firstStep () {
    wrapper.style.display = "none";
    showQuest();
    changeBackground();
}

function disableQuestionButton() {
    questionButton.style.pointerEvents = 'none';
}

function showQuest () {
    wrapperNext.style.display = 'block';
}

function changeBackground() {
    document.body.style.backgroundImage = "url('./images/background-2.jpg')";
}

questionButton.addEventListener('click', function(e) {
    handleButtonClick(e.target);
})

function showWrongMessage() {
    error.style.display = 'block';
}
function hideError(){
    error.style.display = 'none';
}
function clearInput() {
    value.value = '';
}

function handleButtonClick(event) {
    if (event) {
        console.log('event');
        showNextQuestion();
    }
}

function showNextQuestion() {
    if(currentStepIndex === 0) {
        showSecondQuestion();
    }else if(currentStepIndex === 1) {
        thirdQuestion();
    }else if(currentStepIndex === 2) {
        showFourthQuestion();
    }else if(currentStepIndex === 3) {
        showFifthQuestion();
    }else if(currentStepIndex === 4) {
        showSixQuestion();
    }

}

function showSecondQuestion() {
    if(value.value === 'champagne') {
        hideError();
        photo.src = './images/photo5.jpg';
        hint.innerHTML = 'У цій тумбі лежить те, що зігріє і принесе трошки новорічного настрою!';
        clearInput();
        currentStepIndex++;
    }else {
        showWrongMessage();
        setTimeout(hideError, 3000);
    }
}

function thirdQuestion() {
    if (value.value === 'socks') {
        hideError();
        photo.src = './images/photo4.jpg';
        hint.innerHTML = 'Тут на тебе чекає предмет, який ніколи не буде зайвим, те чим користуватимешся щодня і що' +
            ' зробить твоє, і без того шикарне волосся, ще красивішим!';
        clearInput();
        currentStepIndex++;

    }else {
        showWrongMessage();
        setTimeout(hideError, 3000);
    }

}
function showFourthQuestion() {
    if(value.value === 'hairbrush') {
        hideError();
        photo.src = './images/photo3.jpg';
        hint.innerHTML = 'Тут лежить, те, що зробить твою прекрасну посмішку білосніжною! Посміхайся частіше-тобі ' +
            'так личить!';
        clearInput();
        currentStepIndex++;
    }else showWrongMessage();
            setTimeout(hideError, 3000);
}
function showFifthQuestion() {
    if(value.value === 'toothpaste') {
        hideError();
        photo.src = './images/photo2.jpg';
        hint.innerHTML = 'Ну і нарешті!!! Головний подарунок, який стане приємним сюрпризом! Обов’язково скористайся,' +
            ' аби милуватися собою не тільки у дзеркалі чи на екрані телефону!';
        clearInput();
        currentStepIndex++;
    }else showWrongMessage();
    setTimeout(hideError, 3000);
}
function showSixQuestion() {
    if(value.value === 'certificate') {
        hideError();
        photo.src = './images/happy.jpg';
        hint.style.display = 'none';
        clearInput();
        document.body.style.backgroundImage = "url('./images/happy.jpg')";
        value.style.display = 'none';
        questionButton.style.display = 'none';
    }else showWrongMessage();
    setTimeout(hideError, 3000);
}

