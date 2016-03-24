function appendNewIdeaToList() {
  $(".new-idea").delegate("#add-new-item", 'submit', function(e) {
    e.preventDefault();
    var data = setData($('#add-new-item').serializeArray());
    this.reset();

    postJSON(data);
  })
}

