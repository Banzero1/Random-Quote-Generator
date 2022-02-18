const x = document.querySelector("button");



/* Callback function */
function alertButton() {


 fetch("https://api.quotable.io/random").then(function (resp) {
    return resp.json(); 
 }).then(function(data)
 {
  
   document.querySelector("#quote").innerHTML = data.content;
   document.querySelector("#auth").innerHTML = data.author;
 });


}


x.addEventListener("click",alertButton);
