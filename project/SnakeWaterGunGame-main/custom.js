let player;
let computer;
let player_score = 0;
let computer_score= 0;

const snake =() =>{
     player = 1;
     computer = Math.floor(Math.random()*3+1)
     
     if (computer == 1)
     {
         document.querySelector("#turn").innerHTML = "Computer pick Snake";
     }
     else if (computer ==2)
     {
         document.querySelector("#turn").innerHTML = "Computer pick Water";
     }
     else
     {
         document.querySelector("#turn").innerHTML = "Computer Pick Gun";
     }


     if(computer==player)
     {
         document.querySelector("#message").innerHTML = "Draw Turn";
     }
    else if(computer==2)
    {
        document.querySelector("#message").innerHTML ="Computer Win!";
        computer_score = computer_score + 1;
        document.querySelector("#Computer").innerHTML = computer_score;
    }
    else if(computer==3)
    {
        document.querySelector("#message").innerHTML = "Computer Win!";
        computer_score = computer_score + 1;
        document.querySelector("#Computer").innerHTML = computer_score;
    }
}

const water =() =>{
    player = 2;
    computer = Math.floor(Math.random()*3+1)
    if (computer == 1)
    {
        document.querySelector("#turn").innerHTML = "Computer pick Snake";
    }
    else if (computer ==2)
    {
        document.querySelector("#turn").innerHTML = "Computer pick Water";
    }
    else
    {
        document.querySelector("#turn").innerHTML = "Computer Pick Gun";
    }


    if(computer==player)
    {
        document.querySelector("#message").innerHTML = "Draw Turn";
    }
   else if(computer==3)
   {
       document.querySelector("#message").innerHTML ="Player Win!";
       player_score = player_score + 1;
       document.querySelector("#Player").innerHTML = player_score;
   }
   else if(computer==1)
   {
       document.querySelector("#message").innerHTML = "Player Win!";
       player_score = player_score + 1;
       document.querySelector("#Player").innerHTML = player_score;
   }
}

const gun =() =>{
    player = 3;
    computer = Math.floor(Math.random()*3+1)
    
    if (computer == 1)
    {
        document.querySelector("#turn").innerHTML = "Computer pick Snake";
    }
    else if (computer ==2)
    {
        document.querySelector("#turn").innerHTML = "Computer pick Water";
    }
    else
    {
        document.querySelector("#turn").innerHTML = "Computer Pick Gun";
    }


    if(computer==player)
    {
        document.querySelector("#message").innerHTML = "Draw Turn";
    }
   else if(computer==2)
   {
       document.querySelector("#message").innerHTML ="Computer Win!";
       computer_score =  computer_score + 1;
       document.querySelector("#Computer").innerHTML =  computer_score;
   }
   else if(computer==1)
   {
       document.querySelector("#message").innerHTML = "Player Win!";
       player_score = player_score + 1;
       document.querySelector("#Player").innerHTML = player_score;
   }
}