function deleteIdea() {
  $(".ideas-list").delegate("#delete-button", 'click', function() {
    var idea_id = $(this).closest(".idea").attr('id');
    var success_method = removeIdea(idea_id);
    deleteJSON(idea_id, success_method);
  })
}

function removeIdea(idea_id) {
  $('#' + idea_id).remove();
}