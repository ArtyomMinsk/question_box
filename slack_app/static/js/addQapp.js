
$(document).ready(function(){
  $('#btnAdd').click(function(){
      myKeyVals = {title: "what is abc 123?", description: "this is a test description for my test ADD.", tags: "test"}
      var saveData = $.ajax({
            type: 'POST',
            url: "/api/question/",
            data: myKeyVals,
            dataType: "text",
            success: function(resultData) { alert("Save Complete") }
      });
      saveData.error(function() { alert("Something went wrong"); });
  });
});



// var $saveIt = $("#btnAdd")
// $saveIt.onclick=function(){
    // temp = Question()
    // temp.title = request.POST['abc XYZ 123456789']
    // temp.description = request.POST['this is a test description for my test ADD.']
    // temp.tags = request.POST['test']
    // temp.save()
//
//     myKeyVals = {title: "what is abc 123?", description: "this is a test description for my test ADD.", tags: "test"}
//     var saveData = $.ajax({
//           type: 'POST',
//           url: "http://127.0.0.1:8000/api/question/",
//           data: myKeyVals,
//           dataType: "text",
//           success: function(resultData) { alert("Save Complete") }
//     });
//     saveData.error(function() { alert("Something went wrong"); });
//
// };
