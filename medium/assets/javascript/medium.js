/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * Here's what this 'game' should do:
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    var teamoneshoot = $("#teamone-shoot");
    var teamonenumshots = $("#teamone-numshots");
    var teamoneHits = $("#teamone-numhits");
    var body = $("body");
    var audio = new Audio("/Users/n0251107/Desktop/js_sports_game/assets/images/button-7.wav");


//team one
    teamoneshoot.click(function(){
      console.log("team one shot");

      var teamoneShotsTaken = parseInt(teamonenumshots.html()) + 1;
      teamonenumshots.html(teamoneShotsTaken);

      var score1 = (1 * Math.floor(Math.random() * 2));
      var teamoneGoals = parseInt(teamoneHits.html()) + (score1);
      teamoneHits.html(teamoneGoals);

      if (score1 > 0 ) {
        body.css({background: "lightblue"});
        audio.play();
        //I made audio play when team scores, not when shoots. to be replaced with cheering sound later
      }
    })

    //  team two
    var teamtwoshoot = $("#teamtwo-shoot");
    var teamtwonumshots = $("#teamtwo-numshots");
    var teamtwoHits = $("#teamtwo-numhits");

    teamtwoshoot.click(function(){
      console.log("team two shot");

      var teamtwoShotsTaken = parseInt(teamtwonumshots.html()) + 1;
      teamtwonumshots.html(teamtwoShotsTaken);

      var score2 = (1 * Math.floor(Math.random() * 2));
      var teamtwoGoals = parseInt(teamtwoHits.html()) + (score2);
      teamtwoHits.html(teamtwoGoals);

      if (score2 > 0 ) {
        body.css({background: "lightgreen"});
        audio.play();
      }
    })

  //reset

    var reset = $("#reset");
    var resetcount = $("#num-resets");

    reset.click(function(){
      console.log("reset clicked");

      var scoreResets = parseInt(resetcount.html()) + 1;
      resetcount.html(scoreResets);

      var goals1reset = parseInt(teamoneHits.html() * 0);
      teamoneHits.html(goals1reset);
      var shots1reset = parseInt(teamonenumshots.html() * 0);
      teamonenumshots.html(shots1reset);

      var goals2reset = parseInt(teamtwoHits.html() * 0);
      teamtwoHits.html(goals2reset);
      var shots2reset = parseInt(teamtwonumshots.html() * 0);
      teamtwonumshots.html(shots2reset);

      body.css({background: "white"});
    })



  })

})();
