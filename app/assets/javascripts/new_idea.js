function appendNewIdeaToList() {
  $(".new-idea").delegate("#add-new-item", 'submit', function() {
    var data = setData($('#add-new-item').serializeArray());
    postIdea(data);
  })
}

