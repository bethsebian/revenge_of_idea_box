function putJSON(idea_id, change_type) {
  $.ajax({
    type: "put",
    url: ideaUrl(idea_id),
    data: change_type,
    success: function(idea) {
      updateItemInIndex(idea);
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  });
}

function getJSON(url, success_method) {
  $.ajax({
    type: "get",
    dataType: "json",
    url: url,
    success: function(idea_id) {
      success_method;
    }
  });
}

function deleteJSON(idea_id, success_method) {
  $.ajax({
    type: "DELETE",
    url: ideaUrl(idea_id),
    success: function(data) {
      success_method
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}
