// Smooth Scroll

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


// Contact Form

document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for contacting us!");

this.reset();

});


// Shop Button

document.querySelector(".hero button").addEventListener("click",()=>{

document.querySelector("#products").scrollIntoView({
behavior:"smooth"
});

});


// Product Buttons

document.querySelectorAll(".product button").forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Product added to cart!");

});

});
