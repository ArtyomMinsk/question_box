function putOnPage(response, $vote_list) {
    response.forEach(function(thumb) {
        var $li = $('<li>').appendTo($vote_list)
        // var $a = $('<a>').attr('href', '/question/' + question.id).attr('id', question.id).appendTo($li)
        // var $a = $('<a>').attr('href', '/question/' + question.id).attr('id', question.id)
        // $a.appendTo($li)
        var $p = $('<p>').text(thumb.user_up_vote, thumb.user_down_vote).appendTo($li)
        return
    })
}

function getVotes(response) {
    return response.results.filter(function(result) {
      return result.user_up_vote, result.user_down_vote
    })
}

var $vote_list = $("#thumbsup")
$.ajax({ url: '/api/Answer/' }).done(function(response) {
  putOnPage(getVotes(response), $vote_list);
})
