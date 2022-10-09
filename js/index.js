const clockTitle = document.querySelector(".js-clock");

const chritmasdate = new Date("2022-12-25 00:00:00");

function daycalc() {
  const today = new Date();
  const dday = chritmasdate - today;
  const hour = Math.floor((dday / (1000 * 60 * 60)) % 24);
  const min = Math.floor((dday / (1000 * 60)) % 60);
  const sec = Math.floor((dday / 1000) % 60);

  clockTitle.innerText = day + "d " + hour + "h " + min + "m " + sec + "s";
}
// daycalc();
setInterval(daycalc, 1000);
