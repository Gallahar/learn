const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
function updateClock(){
    let H = new Date().getHours()
    let M = new Date().getMinutes()
    let S = new Date().getSeconds()
    let ampm = "AM"
    if (H > 12) {
        H = H-12
         ampm = "PM"
    }
    H = H<10 ? "0" + H : H
    M = M<10 ? "0" + M : M
    S = S<10 ? "0" + S : S

    hourEl.innerText = H;
    minuteEl.innerText = M;
    secondEl.innerText = S;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
    updateClock()
    },1000)
}
updateClock()