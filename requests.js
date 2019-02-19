
// function getAllAlgorithms(){
// let xhr = new XMLHttpRequest(); 
// xhr.open("GET","api/algorithm/getAllAlgorithms"); 
// xhr.onload = () => { 
//     document.write(xhr.responseText);
// }  
// xhr.send(); 
// }

function getAllAlgorithms(){
let xhr = new XMLHttpRequest(); 
xhr.open("GET","api/user/getAllAlgorithms"); 
xhr.responseType = 'json';
xhr.onload = function() { 
    var algorithms = xhr.response;
    document.getElementById("writeAlgsHere").innerHTML = algorithms;
}  
xhr.send(); 
}

// var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json'
// request.send();
// request.onload = function () {
// var superHeroes = request.response;

// }


// function getAAlgorithm(){
//     let xhr = new XMLHttpRequest(); 
// xhr.open("GET","api/algorithm/getAAlgorithm"); 
// xhr.onload = () => { 
//     document.write(xhr.responseText);
// }  
// xhr.send();  
// }
