

function getAllAlgorithms(){
let xhr = new XMLHttpRequest(); 
xhr.withcredentials=true; 
xhr.open("GET","https://localhost:8080/IndividualProjectBackend/api/algorithm/getAllAlgorithms"); 
xhr.responseType = 'json';
xhr.onload = () => { 
    // var algorithms = xhr.response;
    let returnJSON =JSON.parse(xhr.response)
    document.getElementById("writeAlgsHere").innerHTML = returnJSON;
}  
xhr.send(); 
}


