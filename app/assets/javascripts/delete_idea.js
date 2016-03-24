function deleteIdea() {
  $(".ideas-list").delegate("#delete-button", 'click', function() {
    var idea_id = $(this).closest(".idea").attr('id')

    $.ajax({
      type: "DELETE",
      url: "/api/v1/ideas/" + idea_id + ".json",
      success: function(data) {
        $('#' + idea_id).remove();
      },
      error: function(xhr) { console.log(xhr.responseText) }
    })
  })
}