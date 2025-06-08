const timer = document.getElementById('root');// Get the DOM element with id="root"

function timing() {
    const now = new Date();// Get current date and time
    const IndianTime = now.toLocaleTimeString();// Format to readable time (HH:MM:SS)
    timer.innerHTML = IndianTime;// Display the time in the element
}


// timing();

//can we do using while loop 
// while(true){
//     timing();
// }  it loads infinitely ,so doesn't works 

setInterval(()=>{
    timing();
},1000)//calls the function after every seconds


timer.style.fontSize = "120px";
timer.style.display = "flex";
timer.style.height= "100vh"
timer.style.justifyContent = "center";
timer.style.alignItems = "center";