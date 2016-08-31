(function() {

function getQuestion(response) {
    return response.results.filter(function(result) {
      return result.title, result.tags
    })
}

function putOnPage(response, $q_list) {
    response.forEach(function(question) {
        var $li = $('<li>').appendTo($q_list)
        // var $a = $('<a>').attr('href', '/question/' + question.id).attr('id', question.id).appendTo($li)
        // var $a = $('<a>').attr('href', '/question/' + question.id).attr('id', question.id)
        $a.appendTo($li)
        var $p = $('<p>').text(question.title).appendTo($a)
        return
    })
}

var $q_list = $("#questionlist")
$.ajax({ url: '/api/question/' + question.id }).done(function(response) {
  putOnPage(getQuestion(response), $q_list);
})

function getAnswer(response) {
    return response.results.filter(function(result) {
      return result.title, result.tags
    })
}

var $q_list = $("#answers")
$.ajax({ url: '/api/answer/'}).done(function(response) {
  putOnPage(getQuestion(response), $q_list);
})


})();
