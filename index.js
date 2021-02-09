

// FOR DICE 1
function myFunction(){
  var P1 =document.getElementById("P1").value;
  var P2 =document.getElementById("P2").value;
  if(P1===""){
    P1= "Player 1";
  }
  if(P2===""){
    P2= "Player 2";
  }
  var randomNumber1=Math.floor(Math.random()*6)+1;
  var randomDiceImage1="images/dice"+randomNumber1+".png";
  document.getElementsByTagName("img")[0].setAttribute("src",randomDiceImage1);
  // FOR DICE 2
  var randomNumber2=Math.floor((Math.random()*6))+1;
  var randomDiceImage2="images/dice"+randomNumber2+".png";
  document.getElementsByTagName("img")[1].setAttribute("src",randomDiceImage2);
  // FOR COMPARISON
  if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML= P1 +" is the winner!🎊"
  }
  else if(randomNumber1<randomNumber2)
  {
    document.querySelector("h1").innerHTML=P2 +" is the winner!🎊"
  }
  else
  {
    document.querySelector("h1").innerHTML="It's a draw! Let's give it another try!"
  }
  var button = document.createElement("button");
}

//TRY MAKING IT MOUSE CLICK ACTIVATEED BY YOURSELF! :))(I guess that's level 2 of the challenge.)
