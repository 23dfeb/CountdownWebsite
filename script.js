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
  
  if (hours === 0 && minutes === 0 && seconds === 56) {
    audio.play();
    qoute.innerHTML = `อีกฮึ้บนึง`;
  }

  if (remainingTime < 0) {
    clearInterval(countdownTimer);
    countdown.innerHTML = 'ปีใหม่และ :)';
    qoute.innerHTML = `โชคดีมีชัย สุ่มเกมอะไรก็ไม่เกลือ เจอครูนิสัยดี ไม่ปิ้เหมือนดิว`;

    document.body.style.backgroundColor = 'black'
    main.style.color = 'white';
  }

}

countdownTimer();

setInterval(countdownTimer, 1000);