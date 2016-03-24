function submitEditDetails() {
  $(".ideas-list").delegate("#edit-idea-details", 'submit', function(e) {
    var idea_id = $(this).closest(".idea").attr('id');
    var data = setData($('#edit-idea-details').serializeArray());

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