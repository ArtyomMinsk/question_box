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


$(document).ready(function(){
  $('#btnAdd').click(function(){
      var qtitle = $('#q_title').val()
      var qdescr = $('#q_description').val()
      var qtag = "word"//$('#q_tag').val(str(word))
      var quser = 2//$('#q_user').val(2) gi get

      var myKeyVals = {
          title: qtitle,
          description: qdescr,
          tags: qtag,
          user: quser
      }
      $.ajax({
            type: 'POST',
            url: "/api/question/",
            data: myKeyVals,
            success: function() { alert("Save Complete") },
      })
  })
})

// ADD AN ANSWER
$(document).ready(function(){
  $('#btnAddAnswer').click(function(){
      var atext = $('#a_text').val()
      var auvote = 1//$('#q_uvote')val()
      var advote = 1//$('#q_dvote')val()
      var qid = 1//$('#q_tag').val(str(word))
      var uid = 2//$('#q_user').val(2) gi get

      var myKeyVals = {
          answer_text: atext,
          user_up_vote: auvote,
          user_down_vote: advote,
          question: qid,
          user: uid
      }
      $.ajax({
            type: 'POST',
            url: "/api/answer/",
            data: myKeyVals,
            success: function(resultData) { alert("Save Complete") },
      })
  })
})
