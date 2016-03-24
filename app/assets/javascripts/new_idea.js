function appendNewIdeaToList() {
  $(".new-idea").delegate("#add-new-item", 'submit', function() {
    e.preventDefault();
    var data = setData($('#add-new-item').serializeArray());
    postJSON(data);
  })
}

