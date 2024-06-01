const randomNumber = Math.trunc(Math.random()*10) + 1;
let chances = 5;

const checkbtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const result = document.querySelector("#result");
const number = document.querySelector(".number");

function check()
{
    const userNumber = Number(document.querySelector(".guess").value);

    if(userNumber)
    {
        if(userNumber === randomNumber){
            message.textContent = "Your number is Matched";
            number.textContent = randomNumber;
            checkbtn.disabled = true;
            document.querySelector("body").style.backgroundColor = "green";
            result.textContent = "You won !!";
        }
        else if(userNumber < randomNumber)
        {
            message.textContent = "Guess higher !!";
            chances--;
            score.textContent = chances;
        }
        else{
            message.textContent = "Guess lower !!";
            chances--;
            score.textContent = chances;
        }

        if(chances === 0){
            result.textContent = "You lose !!";
            checkbtn.disabled = true;
            message.textContent = "Please start a new game.";
            number.textContent = randomNumber;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
    else{
        message.textContent = "Empty value, Please Enter a number.";
        score.textContent = '0';
        checkbtn.disabled = true;
    }
}


checkbtn.addEventListener("click", check);

// give the player ability to restart the game...

// add a new button again and hide the button
// again button is seen when player loses or wins
// when clicked, entire program resets