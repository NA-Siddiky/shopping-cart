function welcomeGuest(name, greetHandler) {
    greetHandler(name);
}
const actorName = "Ananta Jolil";

function greetMorning(name) {
    console.log('Good Morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}

welcomeGuest(actorName, greetMorning);

// function handleClick() {
//     console.log('Clicked')
// }

// document.getElementById('click').addEventListener('click', handleClick);
// // or /
// document.getElementById('click').addEventListener('click', handleClicked(names){
//     console.log('Clicked')
// })