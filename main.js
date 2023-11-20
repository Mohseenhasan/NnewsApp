let key = "8855efc4c74b48f5af79a5e80ac05726";
let cardData = document.querySelector(".cardData")
let SearchBtn = document.getElementById("searchBtn")
let inputData = document.getElementById("inputData")

const getData = async(input) => {
    
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles[0]);

    inputData.value=""
    cardData.innerHTML="";
    jsonData.articles.forEach(function(article){
        console.log(article)
    

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
       <img src="${article.urlToImage}" alt="">
       <h3>${article.title}</h3>
       <p>${article.description}</p>`


       divs.addEventListener("click", function(){
        window.open(article.url)
       })

    });
    
};

window.addEventListener("load", function(){
    getData("India")
})

SearchBtn.addEventListener("click", function(){

    let inputText = inputData.value;
    getData(inputText)

})

function navClick(navName){

    if(navName == "politics"){
        document.getElementById("politics").style.color="cadetblue"
        document.getElementById("sports").style.color="white"
        document.getElementById("technology").style.color="white"
    }

    if(navName == "sports"){
        document.getElementById("politics").style.color="white"
        document.getElementById("sports").style.color="cadetblue"
        document.getElementById("technology").style.color="white"
    }

    if(navName == "technology"){
        document.getElementById("politics").style.color="white"
        document.getElementById("sports").style.color="white"
        document.getElementById("technology").style.color="cadetblue"
    }
    getData(navName)
}