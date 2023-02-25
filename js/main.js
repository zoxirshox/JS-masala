//var euro = 11181.36;
//var dollar = 10966.96;
//var bilet = 500 * dollar;
//var mehmonxona = 250 * dollar;
//var muzey = 120 * euro;
//var all = bilet + mehmonxona + muzey;
//console.log(all);
//var money = +prompt("Pulingizni miqdorini kiriting iltimos!");
//var elText = document.querySelector(".js-text");
//if (all <= money) {
//  elText.textContent = "Oq yo'l, Javohir!";
//} else {
//  elText.textContent ="Javohir, Mirobidjondan so'ra, balki berar! U ham bermasa Jonibek akadan so'ra! Jonibek aka ham bermasa uyda macbookingda Asphalt 8 uyna!";
//}
//Dubai = 1000$
//Moscov = 500$
//Toshkent =300$
//Buxoro = 100$
//Foydalanuvchi pul mablag' kiritadi sumda
//aga r foydalanuvchini puli dubai ga yetkassa ...chiqarsin
var dollar = 11200;
var dubai = 1000 * dollar;
var maskva = 500 * dollar;
var toshkent = 300 * dollar;
var buxoro = 100 * dollar;
var all = dubai + maskva + toshkent + buxoro;
console.log(all);
var money = +prompt("Pulingni yoz");
var elText = document.querySelector(".js-text");
if (all <= money) {
elText.textContent = "Oq yul";
} else {
  elText.textContent ="Qora yul";
}
