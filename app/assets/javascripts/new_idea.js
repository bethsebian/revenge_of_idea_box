function appendNewIdeaToList() {
  $(".new-idea").delegate("#add-new-item", 'submit', function() {
    var data = setData($('#add-new-item').serializeArray());

    $.ajax({
        type: 'POST',
        url: '/api/v1/ideas.json',
        data: data,
        success: function(data) {
          $('.ideas-list').prepend(renderIdea(data));
        },
        dataType: 'json'
    });
  })
}

