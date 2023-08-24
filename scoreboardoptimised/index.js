let ptsHome = 0
let ptsGuest = 0

/*let home1 = document.getElementById("home-inc-1")
let guest1 = document.getElementById("guest-inc-1")

let home2 = document.getElementById("home-inc-2")
let guest2 = document.getElementById("guest-inc-2")

let home3 = document.getElementById("home-inc-3")
let guest3 = document.getElementById("guest-inc-3")*/

function incPoints(element) {
    let name = element.getAttribute("id");
    if (name.includes("home")) {
        ptsHome += Number(element.getAttribute("value"));
        document.getElementById("score-home").textContent = ptsHome
    } else if (name.includes("guest")) {
        ptsGuest += Number(element.getAttribute("value"));
        document.getElementById("score-guest").textContent = ptsGuest
    }
}

/*function incOnePt() {
    if (home1.value === "ON") {
        guest1.value="ON"
        home1.value="OFF"
        ptsHome += 1
        document.getElementById("score-home").textContent = ptsHome
    } else if (home1.value === "OFF") {
        guest1.value="OFF"
        home1.value="ON"
        ptsGuest += 1
        document.getElementById("score-guest").textContent = ptsGuest        
    }
}

function incTwoPts() {
    if (home2.value === "ON") {
        guest2.value="ON"
        home2.value="OFF"
        ptsHome += 2
        document.getElementById("score-home").textContent = ptsHome
    } else if (home2.value === "OFF") {
        guest2.value="OFF"
        home2.value="ON"
        ptsGuest += 2
        document.getElementById("score-guest").textContent = ptsGuest        
    }
}

function incThreePts() {
    if (home3.value === "ON") {
        guest3.value="ON"
        home3.value="OFF"
        ptsHome += 3
        document.getElementById("score-home").textContent = ptsHome
    } else if (home3.value === "OFF") {
        guest3.value="OFF"
        home3.value="ON"
        ptsGuest += 3
        document.getElementById("score-guest").textContent = ptsGuest        
    }
}*/





//function incOnePt() {
  //  if (home1.value === "ON") {
    //    guest1.value="ON"
      //  home1.value="OFF"
        //ptsHome += 1
        //document.getElementById("score-home").textContent = ptsHome
    //} else if (home1.value === "OFF") {
       // guest1.value="OFF"
       // home1.value="ON"
       //ptsGuest += 1
        //document.getElementById("score-guest").textContent = ptsGuest        
    //}
//}