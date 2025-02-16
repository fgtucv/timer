const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')


setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (((seconds / 60) * 360) - 90);
    const minuteDeg = (((minutes / 60) * 360) - 90) + ((seconds / 60) * 6);
    const hourDeg = (((hours / 12) * 360) + ((minutes / 60) * 30) - 90);

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);