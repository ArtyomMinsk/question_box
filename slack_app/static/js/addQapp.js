

var $saveIt = $("#btnAdd")
object.onclick=function(){
    temp = Question()
    temp.title = request.POST['abc XYZ 123456789']
    temp.description = request.POST['this is a test description for my test ADD.']
    temp.tags = request.POST['test']
    temp.save()
};
