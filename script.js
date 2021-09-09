'use strict';
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');  // for select only id
const diceEl=document.querySelector('.dice');
const rollbtn=document.querySelector('.btn--roll');
const holdbtn=document.querySelector('.btn--hold');
const newbtn=document.querySelector('.btn--new');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');


//Starting Conditions
const scores=[0,0];
let currentscore=0;
let activeplayer=0;
score0El.textContent=0;
score1El.textContent=0;
let playing=true;
 diceEl.classList.add('hidden');

 const switchPlayer=function(){
     //change player
          document.getElementById(`current--${activeplayer}`).textContent=0;
          activeplayer=activeplayer===0 ? 1 : 0;  //if activeplayer==0 then switch to 1 else switch to 0
          currentscore=0;
          //Maaaaannnnn
          player0.classList.toggle('player--active');
          player1.classList.toggle('player--active');//if player--active existe in classelist so remove player--active else add it to classelist
 }

//click Roll Button
  rollbtn.addEventListener('click',function(){
      if(playing){
      //Random Number of image
      const dice=Math.trunc( Math.random()*6)+1;
      //Display Dice
      diceEl.classList.remove('hidden');
      diceEl.src=`dice-${dice}.png`;

      //check for rolled  1
      if(dice!==1){
          //add to current player
          currentscore+=dice;
          //Maaaannnnn
          document.getElementById(`current--${activeplayer}`).textContent=currentscore; 

      }else{
          switchPlayer();
      }}
   
  });

  holdbtn.addEventListener('click',function(){
      if(playing){
      //add current score to active player
      scores[activeplayer]+=currentscore;
      document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];

      //check score is ==100 
       if(scores[activeplayer]>=20){
       //finish the game  winner
       playing=false;
       document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
       document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
       diceEl.classList.add('hidden');
       }else{
       //switch to the next player
       switchPlayer();
       }
    }

      

  });

  newbtn.addEventListener('click',function(){
    location.reload();
  });
