let USER_SCORE = 0;
let COMP_SCORE = 0;


console.log("hi ruchi")

const closee=()=>{
    let ruledivv = document.querySelector(".rulediv");
    ruledivv.style.display ="none";

    let crossbttnn = document.querySelector(".crossbttn");
    crossbttnn.style.display="none";

    console.log("wrkng")

}



const rulesdsp = ()=>{
    let ruledivv = document.querySelector(".rulediv");
    ruledivv.style.display = "";

    let crossbttn = document.querySelector(".crossbttn");
    crossbttn.style.display="flex";

    console.log("vrkng")
}


const dspwin = ()=>{
    let dspwinn = document.querySelector(".rulewin");
    dspwinn.style.display = "flex";
  
    let crsbtnw = document.querySelector(".crossbttnwin");
    crsbtnw.style.display="flex";
  
  
  }
  
  
  const closeRuleswin=()=>{
    let clswin = document.querySelector(".rulewin");
    clswin.style.display ="none";
  
    let crssbtnw = document.querySelector(".crossbttnwin");
    crssbtnw.style.display="none";
  
  }




const uchoose = (choice) => {
    console.log("user:",choice);

    let hands = document.querySelector(".originalchoice");
    hands.style.display = "none";

    let contest = document.querySelector(".selectrs");
    contest.style.display = "flex";

    let choosed = document.querySelector(".picked");
    if(choice == "paper"){
        document.getElementById("userpickedimg").src ="assets/paper.png"
        choosed.style.borderColor = "#FFA943";
    }
    else if (choice == "stone") {
        document.getElementById("userpickedimg").src ="assets/hand.png"
        choosed.style.borderColor = "#0074B6";
    }
    
    else{
        document.getElementById("userpickedimg").src ="assets/scissor.png"
        choosed.style.borderColor = "#BD00FF";
    }

    pickCompHand(choice);

    console.log("hie")
    
};


const pickCompHand=(choice)=>{
    let hands = ["stone", "paper", "scissor"]
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    console.log("pc:", cpHand);
    let choosed = document.querySelector(".part2");
    if(cpHand == "paper"){
        document.getElementById("comppickedimg").src ="assets/paper.png"
        choosed.style.borderColor = "#FFA943";
    }
    else if (cpHand == "stone") {
        document.getElementById("comppickedimg").src ="assets/hand.png"
        choosed.style.borderColor = "#0074B6";
    }
    
    else{
        document.getElementById("comppickedimg").src ="assets/scissor.png"
        choosed.style.borderColor = "#BD00FF";
    }

    results(choice, cpHand);
    console.log("hie")
    
  };
    


const results = (userHand, cpHand)=>{
  let choosed1 = document.querySelector(".part2");
  let choosed2 = document.querySelector(".part1");
  let user_win = true;
  let tie = false;
  let nxt = document.querySelector(".nxtbttn");
  let rule = document.querySelector(".rulebttn");
    if (userHand == "paper" && cpHand == "scissor") {
        setDecision("YOU LOSE");
        setScore(USER_SCORE, COMP_SCORE + 1);
        user_win = false;
        
      }
      else if (userHand == "paper" && cpHand == "stone") {
        setDecision("YOU WIN");
        setScore(USER_SCORE + 1, COMP_SCORE);

      }
      else if (userHand == "paper" && cpHand == "paper") {
        setDecision("Tie Up");
        tie = true;

        let ttlscnd = document.querySelector(".titlescnd");
        ttlscnd.style.display="none";
      }
      else if (userHand == "stone" && cpHand == "scissor") {
        setDecision("YOU WIN");
        setScore(USER_SCORE + 1, COMP_SCORE);
      }
      else if (userHand == "stone" && cpHand == "paper") {
        setDecision("YOU LOSE");
        setScore(USER_SCORE, COMP_SCORE + 1);
        user_win = false;
      }
      else if (userHand == "stone" && cpHand == "stone") {
        setDecision("Tie Up");
        tie = true;
        let ttlscnd = document.querySelector(".titlescnd");
        ttlscnd.style.display="none";

      }
      else if (userHand == "scissor" && cpHand == "scissor") {
        setDecision("Tie Up");
        tie = true;
        let ttlscnd = document.querySelector(".titlescnd");
        ttlscnd.style.display="none";
      }
      else if (userHand == "scissor" && cpHand == "stone") {
        setDecision("YOU LOSE");
        setScore(USER_SCORE, COMP_SCORE + 1);
        user_win = false;
      }
      else if (userHand == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN");
        setScore(USER_SCORE + 1, COMP_SCORE);
      }

      if (user_win == false) {
         choosed1.classList.add("animate-ripple");
         nxt.style.display = "none"; 
      } 
      else {
        choosed1.classList.remove("animate-ripple");
      }

    if (user_win == true) {
      choosed2.classList.add("animate-ripple");
      rule.style.right = "200px";
      nxt.style.display = "flex"; 
    } 
    else {
      choosed2.classList.remove("animate-ripple");
    }

    if (tie == true){
      choosed1.classList.remove("animate-ripple");
      choosed2.classList.remove("animate-ripple");
      rule.style.right = "53px";
      nxt.style.display = "none"; 
    };
    
    console.log("success")
    
    
  }
    

   
    

const setDecision = (decision) => {
    document.querySelector(".titlefrst").innerText = decision;
    
}


const setScore = (newScore, newSc) => {
    USER_SCORE = newScore;
    
    document.querySelector(".uscore").innerHTML = newScore;
    
    localStorage.setItem("userscore", newScore);
    COMP_SCORE = newSc;
    document.querySelector(".cscore").innerHTML = newSc; // Use innerText instead of innerHTML
    
    localStorage.setItem("compscore", newSc);

}


window.onload = function () {
    restart();
    USER_SCORE = parseInt(localStorage.getItem("userscore")) || 0;
    // Update the score display
    document.querySelector(".uscore").innerHTML = USER_SCORE;

    COMP_SCORE = parseInt(localStorage.getItem("compscore")) || 0;
    // Update the score display
    document.querySelector(".cscore").innerHTML = COMP_SCORE;
  };

const restart = () =>{
    let contest = document.querySelector(".selectrs");
    contest.style.display = "none";
      
    let hands = document.querySelector(".originalchoice");
    hands.style.display = "flex";
        
    let sc = localStorage.getItem("userscore");
    document.querySelector(".uscore").innerHTML = sc;

    let sc_pc = localStorage.getItem("compscore");
    document.querySelector(".cscore").innerHTML = sc_pc;

    let nxtbtn = document.querySelector(".nxtbttn");
    let rulesbtn = document.querySelector(".rulebttn");
    rulesbtn.style.right = "53px";
    nxtbtn.style.display = "none";
    console.log("keep it up")
    }
      
