var winter = ["December", "January", "February"];
var spring = ["March", "April", "May"];
var summer = ["June", "July", "August"];
var fall = ["September", "October", "November"];

var winterImages = [
	"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
	"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300",
	"https://images.unsplash.com/photo-1486308510493-cb6f5d2fif3b?w=300",
]
var springImages = [
	"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
	"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300",
	"https://images.unsplash.com/photo-1486308510493-cb6f5d2fif3b?w=300",
]
var summerImages = [
	"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
	"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300",
	"https://images.unsplash.com/photo-1486308510493-cb6f5d2fif3b?w=300",
]
var fallImages = [
	"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
	"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300",
	"https://images.unsplash.com/photo-1486308510493-cb6f5d2fif3b?w=300",
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

	
}

function displaySummer() {

}

function displayFall() {

}


function displayAllSeasons() {
	displayWinter();


	
}
