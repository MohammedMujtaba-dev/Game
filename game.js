// Defines score
let userscore = 0;
let computerscore = 0;
// access the p tag in html for score
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#computer-score");
// access th msg div
let msg = document.querySelector("#msg");
// access th msg-conatiner div
let msgcontainer = document.querySelector(".msg-container");
// access all the choice in choices
let choices = document.querySelectorAll(".choice");

// 3rd function
let gencompchoice = () => {
  // what option we have
  const options = ["rock", "paper", "scissor"];
  // index to access any random number
  const randidx = Math.floor(Math.random() * 3);
  // it access any random index from options
  return options[randidx];
};

//4th function
// taking vlaue of both user and comp
let drawgame = (userchoice, compchoice) => {
  console.log("Game was draw");
  msg.innerText = `You draw , play again ! ${userchoice} can't beat ${compchoice}`;
  msgcontainer.style.backgroundColor = "#081b31";
};

// 5th function
let showwinner = (userwin, userchoice, compchoice) => {
  //if userwin true then
  if (userwin) {
    // userscore + 1
    userscore++;
    // replace  the userscorepara with userscore value
    userscorepara.innerText = userscore;
    console.log("You win !!");
    //print message
    msg.innerText = `You win !! ${userchoice} beats ${compchoice}`;
    //changes background color
    msgcontainer.style.backgroundColor = "green";
    msgcontainer.style.padding = "10px";
  } else {
    // computerscore + 1
    computerscore++;
    // replace  the userscorepara with userscore value
    compscorepara.innerText = computerscore;
    console.log("You lose");
    //print message
    msg.innerText = `You lose ! ${compchoice} beats ${userchoice}`;
    //changes background color
    msgcontainer.style.backgroundColor = "red";
  }
};

// second function
let playgame = (userchoice) => {
  // printing user choice
  console.log("user choice : ", userchoice);
  //from 3rd function
  //assigning genrate computer choice to compchoice
  const compchoice = gencompchoice();
  console.log("computer choice : ", compchoice);

  //comparison
  // DRAW
  if (userchoice === compchoice) {
    drawgame(userchoice, compchoice);
  } else {
    //create a user win to see if user win
    let userwin = true;
    // first statement
    if (userchoice === "rock") {
      // options of computer paper = false , scissor = true
      userwin = compchoice === "paper" ? false : true;
    }
    //second statement
    else if (userchoice === "paper") {
      // options of computer rock = true , scissor = false
      userwin = compchoice === "scissor" ? false : true;
    }
    // third statement
    else {
      // scissor
      // options of computer paper = false , rock = true
      userwin = compchoice === "rock" ? false : true;
    }
    //5 th function
    showwinner(userwin, userchoice, compchoice);
  }
};

// fisrt function choices using for each to connect all the choice
choices.forEach((choice) => {
  //when the chioce is clicked the function will run
  choice.addEventListener("click", () => {
    // access id of choice
    let userchoice = choice.getAttribute("id");
    // game starts
    playgame(userchoice);
  });
});
