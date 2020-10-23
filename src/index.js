import './styles.css';

const logMessage = (time) => {
    console.log(`Лог при вызове  calback-функции через ${time} мсек`);
}

console.log('До вызова Settimeout');

setTimeout(() => { logMessage() }, 2000, 2000);

console.log('После вызова SetTimeout');