/***************
* @ juliustnt
* @ 9/1/22
* random project that i created when i was bored
****************/

let answer , count = 0;

document.getElementById("manceButton").onclick = function(){
    answer = document.getElementById("manceTextbox").value;
    answer = answer.toLowerCase();
    
    if (answer === "yes" && count < 2) {
        document.title = "MANCE IS BEST!";
        document.getElementById("doYou").innerHTML = "You love mance too!";
        document.getElementById("manceButton").remove();
        document.getElementById("manceTextbox").remove();
    } 
    else if (answer !== "yes" && count < 2) { 
        document.getElementById("doYou").innerHTML = "Try again! Do you like mance?";
        count = count + 1;
        console.log(count);
    }
    else {
        document.getElementById("doYou").innerHTML = "You are not worthy, heretic.";
        document.getElementById("manceButton").remove();
        document.getElementById("manceTextbox").remove();
        document.getElementById("manceImage").src="mance-sad.png";
        document.getElementById("manceImage").width="929";
        document.getElementById("manceImage").height="547";
        document.getElementById("manceLove").innerHTML = "mance does not love you";
    }
}