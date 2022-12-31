const countdown = document.getElementById('countdown');
const audio = document.getElementById('audio');

const newYear = '1/1/2023';

function countdownTimer() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const remainingTime = newYearDate - currentDate;
  console.log(remainingTime);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);
  
  countdown.innerHTML = `เหลือเวลาในปีนี้อีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
  qoute.innerHTML = `ขอให้มีความสุขกับปีนี้และปีหน้า และขอให้พี่พงศ์เปลี่ยนครูเคมีคนใหม่`
  
  if (hours === 0 && minutes === 0 && seconds === 56) {
    audio.play();
  }

  if (remainingTime < 18700000 ) {
    clearInterval(countdownTimer);
    countdown.innerHTML = 'ปีใหม่และ :)';

    document.body.style.backgroundColor = 'black'
    main.style.color = 'white';
  }

}

countdownTimer();

setInterval(countdownTimer, 1000);