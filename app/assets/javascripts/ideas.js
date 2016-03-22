$(document).ready(function(){
  listAllIdeas();
});

function renderIdea(idea) {
  return $('<div><h2>' + idea.title + '</h2><p>' + idea.body +'</p></div>').addClass('idea');
}

function collectAndFormatIdeas(ideas, target) {
  var renderedIdeas = ideas.map(renderIdea);
  $(target).append(renderedIdeas);
}

function listAllIdeas(){
  var target = $('.ideas_list');
  return $.getJSON('api/v1/ideas.json').then(function (ideas) {
    collectAndFormatIdeas(ideas, target);
  });
}
