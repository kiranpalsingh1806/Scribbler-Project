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

// const paragraph = document.getElementById("edit");
// const edit_button = document.getElementById("1");

// function toggle(button)
// { if(document.getElementById("1").value=="SAVE"){  document.getElementById("1").value="EDIT";
//  paragraph.contentEditable = false;
//   paragraph.style.backgroundColor = "white";}
 
// else if(document.getElementById("1").value=="EDIT"){   document.getElementById("1").value="SAVE";
//  paragraph.contentEditable = true;
//   paragraph.style.backgroundColor = "white"
//  }
// }
