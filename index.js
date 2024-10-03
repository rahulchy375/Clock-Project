let clock = document.querySelector(`.clock`);

const dynamicClock = () =>{
    let newDate = new Date().toLocaleTimeString();
    clock.innerText = newDate;
}

dynamicClock();

setInterval(dynamicClock, 1000);