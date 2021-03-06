/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 xxx 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 *xxx 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 *xxx 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

(function() {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function() {

//1- make the panel click red to black
    var title = $(".panel h1");

    title.click(function() {
      // console.log("title clicked");
      // console.log(title.css("color"));
      if (title.css("color") == "rgb(51, 51, 51)") {
        title.css({color: 'rgb(255, 0, 0)'});
      } else {
        title.css({color: 'rgb(51, 51, 51)'});
      }
    });

//2 hide odd numbers
    // $(".panel h5:odd").css("display", "none");
    $(".panel h5:odd").hide();

//3- replace bacon with laser vision - https://stackoverflow.com/questions/19318887/replace-word-in-p-in-div-using-jquery
    $("p").text(function(i, text) {
      return text.replace("Bacon", "LASER VISION");
    });

// * 4. Delete the last two posts in the middle section (they have a CSS class "post"
    $('div.large-6.columns').find("div.row.post").slice(4).remove();
    // https://api.jquery.com/slice/

// * 5. Remove the images in the right column
    $("aside.large-3.columns.hide-for-small").remove();
    //this removes the entire class.  nothing shows up on my screen anyway..



  })

})();
