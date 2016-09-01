(function() {

var $single_q = $("#q_desc")
$.ajax({ url: '/api/question/' }).done(function(response) {
  response.results.forEach(function(contents){
    if(contents.id == question_id){
      var $h2 = $('<h2>').text(contents.title).appendTo($single_q)
      var $h4 = $('<h4>').text(contents.description).appendTo($single_q)
      var $h5 = $('<h5>').text(contents.tags).appendTo($single_q)
}
})
})

var $table = $("#answers")
$.ajax({ url: '/api/answer/'}).done(function(response) {
  //addAnswersToQuestion(getAnswers(response), $table)
  // console.log(response.results)
  response.results.forEach(function(contents){
    if(contents.question == question_id){
      var $tr = $('<tr>').appendTo($table)
      var $name = $('<td>').text(contents.answer_text).appendTo($tr)
      var $name = $('<tr>').text(contents.user_up_vote).appendTo($tr)
      var $name = $('<tr>').text(contents.user_down_vote).appendTo($tr)
    }
    //get question using stuff.question
    //create child using stuff.id and stuff.answer_text
    //append child to question
  })
})

})();
