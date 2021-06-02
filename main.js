let cont = document.querySelector(".container");
let icon = document.querySelectorAll(".icon");
let black = document.querySelectorAll(".black");
let lock = document.querySelector(".lock");
let win = document.querySelectorAll(".none");
let arr=[];
let arrIndex = []; 


icon.forEach ((el) => {
	let a = Math.floor (
		Math.random ()*100 +1
	);
	el.style.order = a;
});


cont.addEventListener ("click", function (e) {
	if (e.target.className == "container" || e.target.className == "lock") return
	e.target.classList.remove("black");
	e.target.classList.add("para");
	arr.push(e.target.classList.value);
	arrIndex.push(e.target.dataset.index);
	console.log(arrIndex);

	if (arrIndex.length == 2) {
		if (arrIndex[0] === arrIndex[1]) {
			icon.forEach ((el) => {
				el.classList.add("black");
				el.classList.remove("para");
			});
		}
		arrIndex = [];
	}
	
		if (arr.length === 2 && arr[0] == arr[1]) {
		let pr = document.querySelectorAll(".para");
		pr.forEach ((el) => {
			el.classList.remove("black");
			el.classList.add("none");
		});
		
		arr = [];
		let win = document.querySelectorAll(".none");
		
		if (win.length === 16) {
			document.location.reload();
		}
		
	} if (arr.length === 2 && arr[0] != arr[1]) {
			lock.style.zIndex = 6;
			setTimeout ( () => { 
			arr = [];
			icon.forEach ((el) => {
			el.classList.add("black");
			el.classList.remove("para");
			lock.style.zIndex = -1;
		})},500);
	} 
}); 


