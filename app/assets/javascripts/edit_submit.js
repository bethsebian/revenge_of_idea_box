function submitEditDetails() {
  $(".ideas-list").delegate("#edit-idea-details", 'submit', function(e) {
    e.preventDefault();

    var idea_id = setIdeaId(this);
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

function updateFullItemInIndex(idea) {
  var url = ideaUrl(idea.id)
  getJSON(url, updateFullIdea(idea))
}

function updateFullIdea(idea) {
  $('#title_' + idea.id).text(idea.title);
  $('#body-' + idea.id).text(idea.body);
}
