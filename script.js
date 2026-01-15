var winter = ["December", "January", "February"];
var spring = ["March", "April", "May"];
var summer = ["June", "July", "August"];
var fall = ["September", "October", "November"];

var winterImages = [
	"https://images.unsplash.com/photo-1518873890627-d4b177c06e51?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
	"https://images.unsplash.com/photo-1518873890627-d4b177c06e51?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
	"https://images.unsplash.com/photo-1518873890627-d4b177c06e51?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
]
var springImages = [
	"https://publish.illinois.edu/prelawadvising/files/2021/03/spring.jpg",
	"https://publish.illinois.edu/prelawadvising/files/2021/03/spring.jpg",
	"https://publish.illinois.edu/prelawadvising/files/2021/03/spring.jpg",
]
var summerImages = [
	"https://hilo.hawaii.edu/depts/summer/images/depts/summer/photos/KonaSunset.jpg",
	"https://hilo.hawaii.edu/depts/summer/images/depts/summer/photos/KonaSunset.jpg",
	"https://hilo.hawaii.edu/depts/summer/images/depts/summer/photos/KonaSunset.jpg",
]
var fallImages = [
	"https://vermontvacation.com/wp-content/uploads/2023/08/webimage-20201004_vtweybridge-14.png",
	"https://vermontvacation.com/wp-content/uploads/2023/08/webimage-20201004_vtweybridge-14.png",
	"https://vermontvacation.com/wp-content/uploads/2023/08/webimage-20201004_vtweybridge-14.png",
];


function displayWinter() {

    let html = "";
	for (let i = 0; i < winter.length; i++) {
		html +=  `<div class="col-md-4">
		<div class="month-card">
		<img src="${winterImages[i]}" alt="${winter[i]}">
		<div class="month-card-body">
		<h5>${winter[i]}</h5>
	</div>
</div>
</div>`
;
	}
	document.querySelector(".winter").insertAdjacentHTML("beforeend",
		 html);
}


function displaySpring() {

	let html = "";
	spring.forEach((month,Index) => {
		html += `<div class="col-md-4">
		<div class="month-card">
		<img src="${springImages[Index]}" alt="${month}">
		<div class="month-card-body">
		<h5>${month}</h5>
	</div>
</div>
</div>`
;
	});
	document.querySelector(".spring").insertAdjacentHTML("beforeend",
		 html);
}

function displaySummer() {
let html = "";
for (let i in summer) {
	html += `<div class="col-md-4">
		<div class="month-card">
			<img src="${summerImages[i]}" alt="${summer[i]}">
			<div class="month-card-body">
				<h5>${summer[i]}</h5>
			</div>
		</div>
	</div>`
	;
}
document.querySelector(".summer").insertAdjacentHTML("beforeend", html);
}

function displayFall() {
 let html = "";
 fall.forEach((month, index) => {
	html += `<div class="col-md-4">
		<div class="month-card">
			<img src="${fallImages[index]}" alt="${month}">
			<div class="month-card-body">
				<h5>${month}</h5>
			</div>
		</div>
	</div>`;
 });
 document.querySelector(".fall").insertAdjacentHTML("beforeend", html);
}

function displayAllSeasons() {
	displayWinter();
	displaySpring();
	displaySummer();
	displayFall();
}

displayAllSeasons();
	

