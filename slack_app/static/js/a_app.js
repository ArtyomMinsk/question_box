(function() {

var $single_q = $("#shit")
$.ajax({ url: '/api/question/' }).done(function(response) {
  response.results.forEach(function(stuff){
    if(stuff.id == question_id){
      var $p = $('<p>').text(stuff.title).appendTo($single_q)
      var $p = $('<p>').text(stuff.description).appendTo($single_q)
}
})
})

var $table = $("#answers")
$.ajax({ url: '/api/answer/'}).done(function(response) {
  //addAnswersToQuestion(getAnswers(response), $table)
  // console.log(response.results)
  response.results.forEach(function(stuff){
    if(stuff.question == question_id){
      var $tr = $('<tr>').appendTo($table)
      var $name = $('<td>').text(stuff.answer_text).appendTo($tr)
    }
    //get question using stuff.question
    //create child using stuff.id and stuff.answer_text
    //append child to question
  })
})



})();
