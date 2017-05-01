// Business logic

// Front End

$(function() {
  $("#faveThingForm").submit(function(event){
  event.preventDefault();
  var favoriteThing1 = $("#faveThing1").val();
  var favoriteThing2 = $("#faveThing2").val();
  var favoriteArray = [favoriteThing1, favoriteThing2];

  $("ul").append("<li>" + favoriteArray[0] + "</li>" + "<li>" + favoriteArray[1] + "</li>");
  console.log(favoriteArray);
  });
});

// Build a page with a form containing input fields where users may enter several of their favorite things.
// Then, write code that gathers each of these form input values and places them into one array.
// After this is done, use your site to practice targeting and moving elements between arrays:
// Use square bracket notation to access the second, first, and third elements of the original array of favorite things.
// Then, use push() to add only these elements to a brand new array.
// Finally, display this new array in your page's HTML as list items in a <ul> tag.
