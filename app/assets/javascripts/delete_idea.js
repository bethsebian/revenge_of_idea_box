function deleteIdea() {
  $(".ideas-list").delegate("#delete-button", 'click', function() {
    var idea_id = setIdeaId(this);
    var success_method = removeIdea(idea_id);
    deleteJSON(idea_id, success_method);
  })
}

function removeIdea(idea_id) {
  $('#' + idea_id).remove();
}