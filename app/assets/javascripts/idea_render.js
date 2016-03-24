function renderIdea(idea) {
  var edit_link = editLink(idea.id)

  return $(
    '<div id="'
    + idea.id
    + '"><h2><div id="title_'
    + idea.id
    + '">'
    + idea.title
    + '</div></h2><div id="quality_'
    + idea.id
    + '">'
    + idea.quality
    + '</div><p><button id="delete-button" name="button-delete">Delete</button>'
    + '<button id="upvote-button" name="button-upvote">UpVote(+)</button>'
    + '<button id="downvote-button" name="button-downvote">DownVote(-)</button>'
    + edit_link
    + '</p><p><div id="body-'
    + idea.id
    + '">'
    + idea.body
    + '</div></p>'
    + '<div id="edit-form"></div><br><br></div>'
  ).addClass('idea');
}

function editLink(idea_id) {
  return '<div id="edit-link-'
  + idea_id
  + '"><a href="#" id="edit-link" name="edit-link">Edit</a>'
  + '</div>'
}