let body = document.querySelector("body > header > div > div.top_nav > nav > ul > li:nth-child(1) > a");
body.style.color = "black";
//Filter Selection
// filterSelection("all");
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("city");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }


// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

const listItems = document.querySelectorAll("span.btn");
const allImages = document.querySelectorAll(".tab_content .city");

function toggleActiveClass(active){
    listItems.forEach(item =>{
        item.classList.remove("active");
    })
    active.classList.add("active");
}
function toggleImages(dataClass){
    if(dataClass === "all"){
        for(let i = 0; i < allImages.allImages.length; i++){
            allImages[i].style.display = "block";
        }
    }else{
        for(let i = 0; i < allImages.allImages.length; i++){
            allImages[i].dataset.class === dataClass ? allImages[i].style.display = "block" : allImages[i].style.display = "none";
        }
    }
}

for (let i = 0; i < listItems.length; i++) {
   listItems[i].addEventListener("click", function(){
       toggleActiveClass(listItems[i]);
       toggleImages(listItems[i].dataset.class)
   })
}