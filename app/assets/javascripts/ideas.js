$(document).ready(function(){
  listAllIdeas();
  deleteIdea();
  upvoteIdea();
  downvoteIdea();
  attemptEdit();
  submitEditDetails();

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
        $('#' + idea_id).remove();
      },
      error: function(xhr) { console.log(xhr.responseText) }
    })
  })
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

function downvoteIdea() {
  $(".ideas-list").delegate("#downvote-button", 'click', function() {
    var idea_id = $(this).closest(".idea").attr('id')
    var change_type = { "change_type": "downvote" }

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

function attemptEdit() {
  var x = 0;
  $(".ideas-list").delegate("#edit-link", 'click', function(e) {
    e.preventDefault();

    if(x < 1){
      x++;
      var idea_id = $(this).closest(".idea").attr('id');
      $('#' + idea_id + ' div#edit-form').append(editForm);
    }
  });
}

function editForm() {
  return $(
    '<form id="edit-idea-details">'
    + 'Title: <input type="text" name="title" id="title">'
    + 'Body: <input type="text" name="body" id="body">'
    + '<input type="submit" value="Save"></form>'
  );
}

function submitEditDetails() {
  $(".ideas-list").delegate("#edit-idea-details", 'submit', function(e) {

    var idea_id = $(this).closest(".idea").attr('id');
    var data = {}
    $.each($('#edit-idea-details').serializeArray(), function(i, field) {
      data[field.name] = field.value
    })

    $.ajax({
        type: 'put',
        url: '/api/v1/ideas/' + idea_id + '.json',
        data: data,
        success: function(idea_id) { updateFullItemInIndex(idea_id); },
        error: function(xhr) { console.log(xhr.responseText) }
    });
  })
}

function updateFullItemInIndex() {
  $.ajax({
    type: "get",
    dataType: "json",
    url: "/api/v1/ideas/" + idea_id.id + ".json",
    success: function(idea) {
      $('#title' + idea.id).text(idea.title);
      // $(idea.id).text(renderIdea(idea));
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
    + '"><div id="title_'
    + idea.id
    + '"><h2>'
    + idea.title
    + '</h2></div><div id="quality_'
    + idea.id
    + '">'
    + idea.quality
    + '</div><p><button id="delete-button" name="button-delete">Delete</button>'
    + '<button id="upvote-button" name="button-upvote">UpVote(+)</button>'
    + '<button id="downvote-button" name="button-downvote">DownVote(-)</button>'
    + '<a href="#" id="edit-link" name="edit-link">Edit</a>'
    + '</p><p>'
    + idea.body
    + '</p>'
    + '<div id="edit-form"></div><br><br></div>'
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

