
let fare = 180 ;
let source = "Ujjain JN.";
let source_hindi = "उज्जैन";
let destination = "Bhopal JN.";
let destination_hindi = "भोपाल";
let via = "MKC";
let adult = 2;
let child = 0;
let train = "superfast (s)";
let train_hindi = "सुपरफास्ट";
let date = "24/04/2024";
let time = "00:23";
let number = "9691497996";
let distance = "183";





// show.html
document.querySelector("#fare-1").innerHTML = fare;
document.querySelector("#source-1").innerHTML = source;
document.querySelector("#destination-1").innerHTML = destination;
document.querySelector("#via-1").innerHTML = via;
document.querySelector("#adult-1").innerHTML = adult;
document.querySelector("#child-1").innerHTML = child;
document.querySelector("#date-time-1").innerHTML = date+" "+time;
document.querySelector("#train-1").innerHTML = train;


// ticket.html 
document.querySelector("#date-1").innerHTML = date;
document.querySelector("#contact-no").innerHTML = number;
document.querySelector("#distance").innerHTML = distance;
document.querySelector("#source-hindi").innerHTML = source_hindi;
document.querySelector("#destination-hindi").innerHTML = destination_hindi;
document.querySelector("#train-hindi").innerHTML = train_hindi;
document.querySelector("#destination-2").innerHTML = destination;
