function getTime(){
    let d = new Date();
    let t = d.toLocaleTimeString();
    console.log(t);
}

setInterval(getTime, 1000);