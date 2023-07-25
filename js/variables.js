// variables.js
const cuotasGuardadas = [];
const DateTime = luxon.DateTime;
const now = DateTime.now()

const dateNow = now.toLocaleString(DateTime.DATE_HUGE);

const dateNowHTML=`<h3 id=dateNowLuxon>Hoy es ${dateNow}.</h3>`

const h1 = document.querySelector("h1");

h1.insertAdjacentHTML("afterend", dateNowHTML);