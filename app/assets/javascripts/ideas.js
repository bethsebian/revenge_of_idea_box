$(document).ready(function(){
  listAllIdeas();
  deleteIdea();

  $("#add-new-item").submit(function (e) {
    appendNewIdeaToList();
  });

  // $.on("click", "#delete-button", function() {
  //   debugger
  // });

});

function deleteIdea() {
  $("#ideas-list").delegate("#delete-button", 'click', function() {
    debugger
  });
}

function appendNewIdeaToList() {
  var data = {}
  $.each($('#add-new-item').serializeArray(), function(i, field) {
    data[field.name] = field.value
  })

  $.ajax({
      type: 'POST',
      url: '/api/v1/ideas.json',
      data: data,
      success: function(data) { addNewItemToIndex(data); },
      dataType: 'json'
  });
}

function addNewItemToIndex(data) {
  $('.ideas-list').prepend(renderIdea(data));
}

function renderIdea(idea) {
  return $(
    '<div><h2>' +
    idea.title +
    '</h2><p><button type="button" id="delete-button">Delete</button></p><p>' +
    idea.body +
    '</p></div><br><br>'
  ).addClass('idea');
}

function collectAndFormatIdeas(ideas, target) {
  var renderedIdeas = ideas.map(renderIdea);
  $(target).append(renderedIdeas);
}

function listAllIdeas(){
  var target = $('.ideas-list');
  return $.getJSON('api/v1/ideas.json').then(function (ideas) {
    collectAndFormatIdeas(ideas, target);
  });
}

