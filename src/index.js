import './styles.css';

// **module 11   1*******************************************************
// const logMessage = (time) => {
//     console.log(`Лог при вызове  calback-функции каждые ${time} мсек - ${Date.now()}`);
// }

// console.log('До вызова SetTimeout');

// const timerId = setInterval(logMessage, 2000, 2000);
// const timerId2 = setTimeout((y, x) => {
//     console.log(`Расчёт через 3сек ${x}+${y} = ${x + y}`)
// }, 3000, 10, 15);

// console.log('После вызова SetTimeout');

// clearTimeout(timerId2);
// clearTimeout(timerId);

// const intervalId = setInterval(logMessage, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//     clearInterval(intervalId);
// }

// const timeoutId = setTimeout(() => {
//     clearInterval(intervalId)
//     console.log('stop intervalId')
// }, 10000);

// **module 11   2*******************************************************

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;

// const refs = {
//     notification: document.querySelector('.js-alert'),
// }

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//     hideNotification();
//     clearInterval(timeoutId);
// }

// function showNotification() {
//     refs.notification.classList.add('is-visible');
//     timeoutId = setTimeout(() => {
//         console.log('Закрываем алерт чтобы не висел');
//         hideNotification();

//     }, 3000)
// }
// function hideNotification() {
//     refs.notification.classList.remove("is-visible")
// }

// **module 11   3***********************************************************************
// import BSN from 'bootstrap.native';

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubcribed = false;


// const refs = {
//     modal: document.querySelector('#subscription-modal'),
//     subscribeBtn: document.querySelector('button[data-subscribe]'),
// };

// const modal = new BSN.Modal('#subscription-modal');

// refs.modal.addEventListener('hide.bs.modal', openModal)

// refs.subscribeBtn.addEventListener('click', () => {

//     hasSubcribed = true;
//     modal.hide();

// })

// openModal();

// function openModal() {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubcribed) {
//         console.log(`Достигнуто максимальное число открываний ${MAX_PROMPT_ATTEMPTS} или подписался`);
//         return
//     };

//     setTimeout(() => {
//         console.log('Открываем модалку');
//         modal.show();
//         promptCounter += 1;
//         console.log('Opencounter', promptCounter);
//     }, PROMPT_DELAY)
// };

// **module 11 4*********************************************************************
// const date1 = Date.now();


// setTimeout(() => {
//     const date2 = Date.now();

//     console.log(date1);
//     console.log(date2);
//     console.log(date2 - date1);
// }, 3000);

// **module 11  5 timer*********************************************************************
const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
clockface: document.querySelector('js-clockface')
}

const timer = {
    intervalId : null,

    start() {
        const startTime = Date.now();

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const {hours,mins,secs} = getTimeComponents(deltaTime);
            console.log(`${hours}:${mins}:${secs}`);
        }, 1000)
    },

    stop() {
        clearInterval(this.intervalId)
    }

}

refs.startBtn.addEventListener('click', () => {
    timer.start();
});
refs.stopBtn.addEventListener('click', () => {
    timer.stop();
});



function updateClockFace({ hours, mins, secs }) {
    requestAnimationFrame.clockFace.TextContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))        ;
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))        ;
    const secs = pad(Math.floor((time % (1000 * 60)) / (1000)))        ;
    return { hours, mins, secs };
}
// *module 11 6 clock-timer**********************************************************************



// ***********************************************************************
