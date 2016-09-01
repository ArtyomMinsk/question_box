function putOnPage(response, $vote_list) {
    response.forEach(function(thumb) {
        var $li = $('<li>').text(thumb.user_up_vote + "   " + thumb.user_down_vote).appendTo($vote_list)
        return
    })
}

function getVotes(response) {
    return response.results.filter(function(result) {
      return result.user_up_vote, result.user_down_vote
    })
}

var $vote_list = $("#thumbsup")
$.ajax({ url: '/api/answer/' }).done(function(response) {
  putOnPage(getVotes(response), $vote_list);
})
