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
import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector('#subscription-modal')
};

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);

refs.modal.addEventListener('hide.bs.modal', () => {
    console.log("закрыли окно");
})

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;

setTimeout(() => {
    console.log('Открываем модалку');
modal.show();
},PROMPT_DELAY)
// let intervalId = null;

// let promptCounter = 0;
// let hasSubcribed = false;

// intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubcribed) {
//         console.log('Останавливаем интервал');
//         clearInterval(intervalId);
//         return;
//     }

//     console.log('Подпишись на рассылку', Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);
// ***********************************************************************
