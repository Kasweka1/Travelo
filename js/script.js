let body = document.querySelector("body > header > div > div.top_nav > nav > ul > li:nth-child(1) > a");
body.style.color = "black";


let btn = document.querySelectorAll(".btn");
let city = document.querySelectorAll(".city");

for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function(){
		for(let j = 0; j<btn.length; j++){
			btn[j].classList.remove("active");
		}
		this.classList.add("active"); 

		let dataFilter = this.getAttribute("data-filter");

		for (var k = 0; k < city.length; k++) {
			city[k].classList.remove("active");
			city[k].classList.add("hide");

			if(city[k].getAttribute("data-class") == dataFilter || dataFilter == "all"){
				city[k].classList.remove("hide"); 
				city[k].classList.add("active"); 	 
			}
		}
	})
}
