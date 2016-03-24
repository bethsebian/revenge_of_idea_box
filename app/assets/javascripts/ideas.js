$(document).ready(function(){
  listAllIdeas();
  deleteIdea();
  upvoteIdea();
  downvoteIdea();
  attemptEdit();
  hideEditForm();
  submitEditDetails();
  appendNewIdeaToList();
});

function ideaUrl(idea_id) {
  return "/api/v1/ideas/" + idea_id + ".json";
}

function setData(objects_array) {
  data = {}
  return $.each(objects_array, function(i, field) {
    data[field.name] = field.value
  })
}









