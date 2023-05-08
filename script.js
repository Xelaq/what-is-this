var words = [
  'Загружаем самые крутые шмалялы....', 
  'Подключаем самых токсичных игроков....', 
  'Подготавливаем самые душные ивенты....', 
  'Крадём чужой контент....', 
  'Меняем правила на сервере....',
  'Собираем донаты....',
  ],
  i = 0,
  fw = 0,
  part = "",
  delayw = 30,
  delayok = 9,
  added = true,
  mlen = words.length,
  speed = 100;

var wordflick = function () {
  setInterval(function () {
    let wlen = words[fw].length;
    if ((wlen + delayw) >= i){
      if (wlen >= i) {
        part = words[fw].substr(0, i);
      }
    }else{
      if (added){
        part = part + " OK";
        added =  false;
      }

      if ((wlen + delayw + delayok) <= i){
        fw++;
        i = 0;
        added = true;
      }
    }
    i++;
    
    if (fw == mlen) {
      fw = 0
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});