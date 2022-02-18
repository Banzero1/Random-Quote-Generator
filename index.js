const x = document.querySelector("button");

//x.innerHTML="hannibal";

//button.addEventListener("click", alertButton, false);
//const button = document.querySelector("button");

/* Callback function */
function alertButton() {
   // alert('Hi native JavaScript');
//  const response=fetch("https://api.quotable.io/random");
//   const value=response.json;
   
  // document.querySelector("#quote").innerHTML = value.content;

 fetch("https://api.quotable.io/random").then(function (resp) {
    return resp.json(); 
 }).then(function(data)
 {
   console.log(data);
   document.querySelector("#quote").innerHTML = data.content;
   document.querySelector("#auth").innerHTML = data.author;
 });

/*
   const response = await fetch("https://api.quotable.io/random");
   const data = await response.json();
   if (response.ok) {
     // Update DOM elements
     quote.textContent = data.content;
     cite.textContent = data.author;
   } else {
     quote.textContent = "An error occured";
     console.log(data);
   }


    //document.getElementById("button").innerHTML = "boom";
    document.querySelector("#quote").innerHTML = data;
*/
}


x.addEventListener("click",alertButton);