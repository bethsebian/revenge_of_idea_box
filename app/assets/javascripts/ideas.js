$(document).ready(function(){
  listAllIdeas();
});

function renderIdea(idea) {
  return $('<div><h2>' + idea.title + '</h2><p>' + idea.body +'</p></div>').addClass('idea');
}

function listAllIdeas(){
  $.ajax({
    type: 'GET',
    url: '/api/v1/ideas.json',
    success: function(ideas){
      var target = $('.ideas_list');
      $(target).append('Hello');
      // return('Hello');

      // $(".ideas_list");
      // ideas.map(renderIdea);
      // $(target).append(renderedIdeas);
      //iterate through the ideas
      //format a string that looks like html with our idea info per idea
      //use jquery to append our artisinal html to the page
    },
    error: function(){
      //semi optional - won't explode but will silently fail
    }
  });
}


// function addIdeasToPage(ideas, target) {
//   var renderedIdeas = ideas.map(renderIdea);
//   $(target).append(renderedIdeas);
// }
//
// function fetchIdeasAndAddThemToThePage(target) {
//     var target = $('.ideas');
//   return $.getJSON('/ideas').then(function (ideas) {
//     addIdeasToPage(ideas.idea, target);
//   });
// }