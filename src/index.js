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
// const refs = {
//     startBtn: document.querySelector('button[data-action-start]'),
//     stopBtn: document.querySelector('button[data-action-stop]'),
//     clockFace: document.querySelector('.js-clockface')
// }


// class Timer {
//     constructor({ onTick }) {
//         this.intervalId = null;
//         this.isActive = false;
//         this.onTick = onTick;

//         this.init();
//     }

//     init() {
//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     }

//     start() {
//         if (this.isActive) return;

//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = this.getTimeComponents(deltaTime);
//             this.onTick(time);
//         }, 1000)
//     };

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;

//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     };

//     pad(value) {
//         return String(value).padStart(2, '0');
//     }

//     getTimeComponents(time) {
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / (1000)));
//         return { hours, mins, secs };
//     }
// }

// const timer = new Timer({
//     onTick: updateClockFace
// });


// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));



// function updateClockFace({ hours, mins, secs }) {
//     refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
// }


// *module 11 7 promise**********************************************************************

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('There was success :)  ');
//         reject('There was an error :(  ');
//     }, 2000);
// })

// promise
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(()=>console.log('The END.'));

// ***********************************************************************
// const makePromise = (text,error, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>
//             resolve(text),
//             // reject(error),
//             delay);
//     });
// };

// const promiseA = makePromise('promiseA','errorA', 1000);
// const promiseB = makePromise('promiseB','errorB', 3000);

// Promise.all([promiseA, promiseB])
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

// Promise.race([promiseA, promiseB])
//   .then(result => console.log(result)) // "promiseA"
//   .catch(err => console.log(err));
// ********************************************************
// const getMessage = function(callback) {
//   const input = prompt('Введите сообщение');

//   callback(input);
// };

// const logger = message => console.log(message);

// getMessage(logger);
// ************************************************

// const getMessage = function () {
//     const input = prompt('Введите сообщение');
//     return Promise.resolve(input);
// }

// const logger = message => console.log(message);

// // getMessage().then(message => logger(message));
// getMessage().then(logger);

// **************************************+
// let data = 'тут ещё ничего нет';
// const promise = new Promise((resolve, reject) => {
//     const canFullfill = Math.random() > 0.5;
//     setTimeout(() => {
//         if (canFullfill) {
//         resolve('Промис выполнился успешно, с результатом (исполнен fulfilled)')
//     }
//     reject('Промис выполнился с ошибкой (отклонен, rejected)');
//     },1000)
// });

// promise.then(arg => { console.log(arg); data = arg; },arg => { console.log('error',arg) }).catch((arg) => { console.log(arg) });

// console.log(promise);

// setTimeout(() => {
//     console.log(data);
// }, 3000);

// promise.then(result => {
//     console.log(result);
//     return 5;
// })
//     .then(x => {
//         console.log(x);
//         return 10
//     })
//     .then(y => {
//         throw new Error('ошибка 3-го then');
//         console.log(y)
//     })
//     .catch(err => { console.log(err) })
//     .finally(()=>{console.log('Я работаю всегда')});

// ****************************************************
// const makeOrder = (dish, onSuccess, onError) => {
//     const DELAY = 1000;

//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//         if (passed) {
//             onSuccess(`вот ваше блюдо ${dish}`);

//         } else {
//             onError('извините закончились продукты');
//         }
//     }, DELAY);
// };

// makeOrder('пирожок', onMakeOrderSuccess, onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// };
// ***************************************************
// const makeOrder = dish => {
//     const DELAY = 1000;

//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         setTimeout(() => {
//             if (passed) {
//                 resolve(`вот ваше блюдо - ${dish}`)
//             } else {
//                 reject('Извините закончились продукты')
//             }
//         }, DELAY);

//     });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError)

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// };
// ***********************************

// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         const pass = Math.random() > 0.5;
//         if (pass) {
//             resolve('Куку это resolve');
//         } else {
//             reject('Ошибка выполнения');
//         }
//     });

// };

// makePromise()
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

//***module 11 7 horse************************************************** */
// const horses = [
//     'Secretariat',
//     'Eclipse',
//     'West Australian',
//     'Flying Fox',
//     'Seabiscuit'
// ];
// let raceCounter = 0;
// const refs = {
//     startBtn: document.querySelector('.js-start-race'),
//     winnerField: document.querySelector('.js-winner'),
//     progressField: document.querySelector('.js-progress'),
//     tableBody: document.querySelector('.js-result-table > tbody')
// };

// refs.startBtn.addEventListener('click', onStart);

// function onStart() {
//     raceCounter += 1;
//     const promises = horses.map(horse => run(horse));

//     updateWinnerField('');
//     updateProgressField('Заезд начался');
//     determineWinner(promises);
//     waitForAll(promises);

// }

// function determineWinner(horsesP) {
//     Promise.race(horsesP).then(({ horse, time }) => {
//         updateWinnerField(`Лошадь ${horse} приехала за ${time} время`);
//         updateResultsTable({ horse, time, raceCounter });
//     });
//     }

// function waitForAll(horsesP){
//     Promise.all(horsesP).then(() => {
//         updateProgressField('Заезд окончен');
//     })
// }

// function updateWinnerField(message){
//      refs.winnerField.textContent=message
// }

// function updateProgressField(message) {
//     refs.progressField.textContent=message;
// }

// function updateResultsTable({ horse, time, raceCounter }) {
//     const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//     refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

// function consolResult(result) {
// console.log(result)
// };

// function run(horse) {

//     return new Promise((resolve,reject) =>{
//         const time = getRandomTime(1000, 3500);

//         setTimeout(() => {
//             resolve({horse,time})
//         }, time);
//     });
// }



// function getRandomTime(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// ****************************************************
//*module 12-HTTP****************************************** */
// import pokemonCardTpl from './template/pokemon-card.hbs'
// import API from './js/api-service';
// import getRefs from './js/get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const searchQuery = form.elements.query.value;

//     API.fetchPokemon(searchQuery)
//         .then(renderPokemonCard)
//         .catch(onFetchError)
//         .finally(form.reset());
// };

// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpl(pokemon);
//     refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//     alert('Упс что-то пошло не так, мы не нашли Вашего покемона ')
// };

//====================================================

// fetch('https://pixabay.com/api/?key=19030370-3b0ac62398e7506ebf605c4ab&q=мышки&image_type=photo')
//     .then(r => r.json())
//     .then(console.log);

// fetch('http://api.weatherstack.com/current?access_key=f04e767601b79d157b2f4a7fde1ee53d&query=Kiev')
//     .then(r => r.json())
//     .then(console.log);

// const url = 'https://newsapi.org/v2/everything?q=Zhitomir';
// const options = {
//     headers: {
//         'Authorization': '5fdf360460fb4a5cbc09014c3a1d10aa'
//     }
// }
// fetch(url, options)
//     .then(r => r.json())
//     .then(console.log);

//**module 12-HTTP paginations********************************************************** */
import NewsApiService from './js/news-sevice'

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
}

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault();
    newsApiService.query = e.currentTarget.elements.query.value;

    newsApiService.fetchArticles(newsApiService.query);

};

function onLoadMore() {

    newsApiService.fetchArticles(newsApiService.query);

};

