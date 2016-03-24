function upvoteIdea() {
  $(".ideas-list").delegate("#upvote-button", 'click', function() {
    var idea_id = setIdeaId(this);
    var change_type = { "change_type": "upvote" }
    putJSON(idea_id, change_type);
  })
}

function downvoteIdea() {
  $(".ideas-list").delegate("#downvote-button", 'click', function() {
    var idea_id = setIdeaId(this);
    var change_type = { "change_type": "downvote" };
    putJSON(idea_id, change_type);
  })
}

function updateItemInIndex(idea) {
  var url = ideaUrl(idea.id)
  var replace_type = replaceQuality(idea)
  getJSON(url, replace_type);
}

function replaceQuality(idea) {
  $('#quality_' + idea.id).text(idea.quality);
}

