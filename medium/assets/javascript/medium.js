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
    var audio = new Audio("../medium/assets/audio/button-7.wav");

    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

//team one
    teamoneshoot.click(function(){
      console.log("team one shot");

      var teamoneShotsTaken = parseInt(teamonenumshots.html()) + 1;
      teamonenumshots.html(teamoneShotsTaken);

      let chance1 = getRandomIntInclusive(0, 1);
      var teamoneGoals = parseInt(teamoneHits.html()) + (chance1);
      teamoneHits.html(teamoneGoals);

      if (chance1 > 0 ) {
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

      let chance2 = getRandomIntInclusive(0, 1);
      var teamtwoGoals = parseInt(teamtwoHits.html()) + (chance2);
      teamtwoHits.html(teamtwoGoals);

      if (chance2 > 0 ) {
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

      teamoneHits.html(0);
      teamonenumshots.html(0);
      teamtwoHits.html(0);
      teamtwonumshots.html(0);

      body.css({background: "white"});
    })



  })

})();
