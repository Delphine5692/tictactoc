
var player = 1;

function change_player()
{
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

    if (player==1)
        {
            $( "#b" + box).html("<img class='lettre_o' src='lettre_x.jpg'>");
        }
        else 
        { 
            $( "#b" + box).html("<img class='lettre_o' src='lettre_o.jpg'>");
    
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