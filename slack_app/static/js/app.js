
function getQuestion(response) {
    return response.results.filter(function(result) {
      return result.title, result.tags
    })
}

function putOnPage(response, $q_list) {
    response.forEach(function(question) {
        var $li = $('<li>').appendTo($q_list)
        var $a = $('<a>').attr('href', '/question/' + question.id).attr('id', question.id)
        $a.appendTo($li)
        var $p = $('<p>').text(question.title).appendTo($a)
        var $p = $('<p5>').text("search tag: ").appendTo($q_list)
        var $p = $('<p6>').text(question.tags).appendTo($q_list)
        return
    })
}

var $q_list = $("#questionlist")
$.ajax({ url: '/api/question/' }).done(function(response) {
  putOnPage(getQuestion(response), $q_list);
})
