let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore = 0;
let computerscore = 0;
let userrealscore = document.querySelector("#user-score");
let compurealscore = document.querySelector("#computer-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");

    playgame(userchoice);
  });
});

let playgame = (userchoice) => {
  console.log("User choice : ", userchoice);

  let compchoice = gencompchoice();

  console.log("Computer choice : ", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

let gencompchoice = () => {
  let options = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

let drawgame = (userchoice, compchoice) => {
  msg.innerHTML = `The game is draw! Both are same ${userchoice} , ${compchoice}`;
  console.log("The game is draw");
};

let showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userrealscore.innerHTML = userscore;
    msg.innerHTML = `You won! ${userchoice} beats ${compchoice}`;
    console.log("You won!");
  } else {
    computerscore++;
    compurealscore.innerHTML = computerscore;
    msg.innerHTML = `You lose! ${compchoice} beats ${userchoice}`;
    console.log("You lose!");
  }
};
