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