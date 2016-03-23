$(document).ready(function(){
  listAllIdeas();

  $("#add-new-item").submit(function (e) {
    appendNewIdeaToList();
  });

  function appendNewIdeaToList() {
    var data = {}
    $.each($('#add-new-item').serializeArray(), function(i, field) {
      debugger
      data[field.name] = field.value
    })
    debugger

    $.ajax({
        type: 'POST',
        url: '/api/v1/ideas.json',
        data: data,
        success: function(data) { addNewItemToIndex(data); },
        // contentType: "application/json",
        dataType: 'json'
    });
  }

  function addNewItemToIndex(data) {
    $('.ideas_list').prepend(renderIdea(data));
  }

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
});

