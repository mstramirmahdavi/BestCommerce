const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Dec 22, 2019 00:00:00').getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    document.getElementById('hours2').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes2').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds2').innerText = Math.floor((distance % (minute)) / second);
    document.getElementById('hours3').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes3').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds3').innerText = Math.floor((distance % (minute)) / second);
    document.getElementById('hours4').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes4').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds4').innerText = Math.floor((distance % (minute)) / second);
    document.getElementById('hours5').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes5').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds5').innerText = Math.floor((distance % (minute)) / second);
    document.getElementById('hours6').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes6').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds6').innerText = Math.floor((distance % (minute)) / second);
    document.getElementById('hours7').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes7').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds7').innerText = Math.floor((distance % (minute)) / second);
  }, second)