$(document).ready(function(){
  listAllIdeas();
  deleteIdea();

  $("#add-new-item").submit(function (e) {
  appendNewIdeaToList();
  });

});


function deleteIdea() {
  $(".ideas-list").delegate("#delete-button", 'click', function() {
    var idea_id = $(this).closest(".idea").attr('id')

    $.ajax({
      type: "DELETE",
      url: "/api/v1/ideas/" + idea_id + ".json",
      success: function(data) {
        removeNewItemFromIndex(idea_id);
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })
}

function removeNewItemFromIndex(idea_id) {
  $('#' + idea_id).remove();
}

function appendNewIdeaToList() {
  var data = {}
  $.each($('#add-new-item').serializeArray(), function(i, field) {
  debugger
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
    '<div id="' +
    idea.id +
    '"><h2>' +
    idea.title +
    '</h2><p><button id="delete-button" name="button-delete">Delete</button></p><p>' +
    idea.body +
    '</p><br><br></div>'
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

