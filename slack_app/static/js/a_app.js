(function() {

var $single_q = $("#q_desc")
$.ajax({ url: '/api/question/' }).done(function(response) {
  response.results.forEach(function(contents){
    if(contents.id == question_id){
      var $p = $('<p>').text(contents.title).appendTo($single_q)
      var $p = $('<p>').text(contents.description).appendTo($single_q)
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
    }
    //get question using stuff.question
    //create child using stuff.id and stuff.answer_text
    //append child to question
  })
})

})();
