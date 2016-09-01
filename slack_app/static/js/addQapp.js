// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});


// ADD A QUESTION
// $(document).ready(function(){
//   $('#btnAdd').click(function(){
//       myKeyVals = JSON.stringify({"results.title": "what is abc 123?", "results.description": "this is a test description for my test ADD.", "results.tags": "test", "results.user": "2"}
//       $.ajax({
//             type: 'POST',
//             url: "/api/question/",
//             data: myKeyVals,
//             dataType: "text",
//             success: function() { alert("Save Complete") },
//       })
//   })
// })


$(document).ready(function(){
  $('#btnAdd').click(function(){
    //   myKeyVals = JSON.stringify({"results.title": "what is abc 123?", "results.description": "this is a test description for my test ADD.", "results.tags": "test", "results.user": "2"})
    console.log({title: "what is abc 123?", description: "this is a test description for my test ADD.", tags: "test", user:2})
    // myKeyVals = JSON.stringify({title: "what is abc 123?", description: "this is a test description for my test ADD.", tags: "test", user: "2"})
      $.ajax({
            type: 'POST',
            url: "/api/question/",
            // data: myKeyVals,
            data: {title: "what is abc 123?", description: "this is a test description for my test ADD.", tags: "test", user:2},
            dataType: "json",
            contentType: "application/json",
            success: function() { alert("Save Complete") },
      })
  })
})

// ADD AN ANSWER
$(document).ready(function(){
  $('#btnAddAnswer').click(function(){
      myKeyVals = {title: "what is abc 123?", description: "this is a test description for my test ADD.", tags: "test"}
      var saveData = $.ajax({
            type: 'POST',
            url: "/api/answer/",
            data: myKeyVals,
            dataType: "text",
            success: function(resultData) { alert("Save Complete") },
            error: (function() { alert("Something went wrong") })
      })
  })
})
