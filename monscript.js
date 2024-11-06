
var player = 1;

var boxes = [];

var gagnant = 0;

function change_player()
{
    if (gagnant != 0)
    {return;}

    if (player==1)
    {
        player=2;
        $( "#player" ).html("Player Two - C'est a toi de jouer");
    }
    else 
    { 
        player=1;
        $( "#player" ).html("Player One - C'est a toi de jouer");

    }


}

function play(box)
{

    console.log("Player " + player + " vien de jouer la box " + box);

    boxes[box]= player;

    console.log (boxes);

    if (player==1)
        {
            $( "#b" + box).html("<img class='lettre_o' src='lettre_x.jpg'>");
        }
        else 
        { 
            $( "#b" + box).html("<img class='lettre_o' src='lettre_o.jpg'>");
    
        }

    if(boxes[1]==boxes[2]  && boxes[3] ==boxes[2] && boxes[2]  > 0) {
      $( "#player" ).html("Player " + player + " a gagné");
      gagnant=player

     
    }

    if(boxes[4]==boxes[5]  && boxes[6] ==boxes[5] && boxes[5]  > 0) {
      alert("Joueur " + player + " a Gagné")
    }

    if(boxes[7]==boxes[8]  && boxes[9] ==boxes[8] && boxes[8]  > 0) {
      alert("Joueur " + player + " a Gagné")
    }




    change_player();
}

$( document ).ready(function() 
{
    console.log( "ready!" );


    $( "#b1" ).on( "click", function() {
        play(1);
      } );
      $( "#b2" ).on( "click", function() {
        play(2);
      } );
      $( "#b3" ).on( "click", function() {
        play(3);
      } );
      $( "#b4" ).on( "click", function() {
        play(4);
      } );
      $( "#b5" ).on( "click", function() {
        play(5);
      } );
      $( "#b6" ).on( "click", function() {
        play(6);
      } );
      $( "#b7" ).on( "click", function() {
        play(7);
      } );
      $( "#b8" ).on( "click", function() {
        play(8);
      } );
      $( "#b9" ).on( "click", function() {
        play(9);
      } );
});