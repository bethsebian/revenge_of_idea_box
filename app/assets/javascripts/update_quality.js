function upvoteIdea() {
  $(".ideas-list").delegate("#upvote-button", 'click', function() {
    var idea_id = $(this).closest(".idea").attr('id')
    var change_type = { "change_type": "upvote" }

    putJSON(idea_id, change_type);
  })
}

function downvoteIdea() {
  $(".ideas-list").delegate("#downvote-button", 'click', function() {
    var idea_id = $(this).closest(".idea").attr('id');
    var change_type = { "change_type": "downvote" };

    putJSON(idea_id, change_type);
  })
}

function putJSON(idea_id, change_type) {
  $.ajax({
    type: "put",
    url: ideaUrl(idea_id),
    data: change_type,
    success: function(idea) {
      updateItemInIndex(idea);
    },
    error: function(xhr) { console.log(xhr.responseText) }
  })
}

function getJSON(url, success_method) {
  $.ajax({
    type: "get",
    dataType: "json",
    url: url,
    success: function(idea_id) {
      success_method;
    }
  });
}

function replaceQuality(idea) {
  $('#quality_' + idea.id).text(idea.quality);
}

function updateItemInIndex(idea) {
  var url = ideaUrl(idea.id)
  getJSON(url, replaceQuality(idea));
}