$(document).ready(function(){
  listAllIdeas();
  deleteIdea();
  upvoteIdea();

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
      success: function(data) { removeItemFromIndex(idea_id); },
      error: function(xhr) { console.log(xhr.responseText) }
    })
  })
}

function removeItemFromIndex(idea_id) {
  $('#' + idea_id).remove();
}

function upvoteIdea() {
  $(".ideas-list").delegate("#upvote-button", 'click', function() {
    var idea_id = $(this).closest(".idea").attr('id')
    var change_type = { "change_type": "upvote" }

    $.ajax({
      type: "put",
      url: "/api/v1/ideas/" + idea_id + ".json",
      data: change_type,
      success: function(idea_id) { updateItemInIndex(idea_id); },
      error: function(xhr) { console.log(xhr.responseText) }
    })
  })
}

function updateItemInIndex(idea_id) {
  $.ajax({
    type: "get",
    dataType: "json",
    url: "/api/v1/ideas/" + idea_id.id + ".json",
    success: function(idea) {
      $('#quality_' + idea.id).text(idea.quality);
    }
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
    '<div id="'
    + idea.id
    + '"><h2>'
    + idea.title
    + '</h2><div id="quality_'
    + idea.id
    + '">'
    + idea.quality
    + '</div><p><button id="delete-button" name="button-delete">Delete</button>'
    + '<button id="upvote-button" name="button-upvote">UpVote(+)</button>'
    + '</p><p>'
    + idea.body
    + '</p><br><br></div>'
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

