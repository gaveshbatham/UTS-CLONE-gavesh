
let fare = 50 ;
let source = "Vidisha";
let source_hindi = "विदिशा";
let destination = "Bhopal JN.";
let destination_hindi = "भोपाल";
let via = "SUW";
let adult = 1;
let child = 0;
let train = "superfast (s)";
let train_hindi = "सुपरफास्ट";
let date = "25/04/2024";
let time = "07:23";
let number = "9691497996";
let distance = "53";





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
