const tambah = document.getElementById("tambah");
const reset = document.getElementById("reset");
const kurang = document.getElementById("kurang");
const counter = document.getElementById("counter");
let count = 0;

tambah.onclick = function() {
	count++;
	counter.textContent = count;
}

reset.onclick = function() {
	count = 0 ;
	counter.textContent = count;
}

kurang.onclick = function() {
	count--;
	counter.textContent = count;
}