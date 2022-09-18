const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let user = prompt("Kullancı Adını Giriniz::")

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
let dateTime = new Date()
var x = dateTime.toLocaleTimeString("tr-TR", "HH:mm:ss") + " " + days[dateTime.getDay()]
console.log(x)
document.getElementById('ct').innerHTML = x;
display_c();
document.getElementById('helloUser').innerHTML = `Merhaba 
${user.length>0 ? user:"Bilinmeyen Kullanıcı"}! Hoşgeldin!`;
 }