var editCount = {
  counter = 0;
}

function attemptEdit() {
  $(".ideas-list").delegate("#edit-link", 'click', function(e) {
    e.preventDefault();

    if(editCount.counter < 1){
      editCount.counter++;
      var idea_id = $(this).closest(".idea").attr('id');
      displayEditForm(idea_id);
    }
  });
}

function displayEditForm(idea_id) {
  $('#' + idea_id + ' div#edit-link-' + idea_id).replaceWith(hideEditFormLink());
  $('#' + idea_id + ' div#edit-form').append(editForm);
}

function hideEditFormLink() {
  return '<a href="#" id="hide-edit-link" name="hide-edit-link">Hide Form</a>'
}

function hideEditForm() {
  $(".ideas-list").delegate("#hide-edit-link", 'click', function(e) {
    e.preventDefault();

    var idea_id = $(this).closest(".idea").attr('id');
    $('#edit-idea-details').remove();
    $('#' + idea_id + ' a#hide-edit-link').replaceWith(editLink(idea_id));
    editFormCount.counter--;
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

