
document.getElementById('first').innerHTML = "haha, i get the power now to change the HTML.";

//querySelector

const id = document.querySelector('#first');
id.style.backgroundColor = 'red'//set backgroundColor to red 

const id2 = document.querySelector('.header2');
id2.style.backgroundColor = 'green';
id2.style.color = 'orange'


//let obj = document.querySelectorAll('') -> gives NodeList()

//obj.forEach(()=>{ })


//How to iterate over Node List
//1. using forEach 
//2.for Loop 
//
//convert NodeList into array
// Array.from(obj)






