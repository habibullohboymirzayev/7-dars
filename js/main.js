var  flightTicket = 500 * 9433.34;
var liveingRoom = 250 * 9433.34;
var musium = 120 * 10354.03;

var general = flightTicket + liveingRoom + musium;

var money = prompt("Alesherda qancha pul bor");

if (general <= money) {
     alert("Oq yo’l, Alisher!")
} else {
    alert("Alisher, ozgina sabr qilish kerak bo’lar ekan")
}