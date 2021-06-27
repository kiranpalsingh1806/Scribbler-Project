var projectListObject = [
];


function showComments(listId){
    projectListObject.forEach(function(value,index){
        var template = '<div class ="project-card">'+
        value.name+'</div>';
            document.getElementById(listId).innerHTML += template;
    })
}

var idName = 1;
function addComment(id){
    idName++;
    var listId = 'projectList_'+idName;
    var boardId = 'board_'+idName;
    var templateBlock = '<section class ="board-block" id = '+boardId+'>'+
    '<div>'+id.value+'</div>'+
    '<div class="project-block" id ='+listId+'>'+'</div>'+'</section>'

    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showComments(listId);
    document.getElementById('menuList').innerHTML +='<li>'+id.value+"</li>";
}
