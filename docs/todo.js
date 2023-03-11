let taskFormEl = document.querySelector("#taskForm");
let taskFormButtonEl = taskFormEl.querySelector("input[type=button]");
let taskFormInputEl = taskFormEl.querySelector("input[type=text]");
let taskListEl = document.querySelector("#taskList");

let taskList = [];

function drawList(){

    taskListEl.innerHTML = "";
    //${thisTask.done ? 'checked="checked"': ''}は
    //if(thisTask.done){
    //      return 'checked="checked"';   
    //}else{return '';}とよぶ
    //${}(テンプレートリテラル)
    
    function drawListItem(thisTask){
        taskListEl.innerHTML = `
            ${taskListEl.innerHTML}
            <li data-task-id="${thisTask.id}" class="list-group-item">
                <input type="button" onClick="deleteTask(${thisTask.id});" class="float-end btn btn-success" value="Delete"></button>    
                <label>
                    <input type="checkbox" ${thisTask.done ? 'checked="checked"': ''} onchange="toggleTask(this)" class="form-check-input me-1" aria-label="...">
                    ${thisTask.text}
                </label>                    
            </li>
            `;
    }
    //リストの中身を表示する
    taskList.map(drawListItem);
    console.log(taskList);

}

function toggleTask(e){
    let taskId= e.parentNode.parentNode.dataset.taskId;
    let taskIsDone = e.checked;
    
    taskList.forEach(function(thisTask){
        if(thisTask.id==taskId){
            thisTask.done = taskIsDone;
        }
    })
}

function deleteTask(taskToDelete){
    
    // Loop through all of the tasks
    taskList = taskList.filter(function(thisTask){
        
        // If this loop task (thisTask) is the task that
        // should be deleted, return false
        if(thisTask.id === parseInt(taskToDelete)){
            return false;
        }else{
            return true;
        }
    })

    drawList();
};
  

taskFormButtonEl.onclick = function(){
    //入力された内容を読み込む
    let newTask = taskFormInputEl.value;
    //未入力はスルー
    if(newTask.length==0){
        return;
    }
    //入力内容をクリアする
    taskFormInputEl.value = "";

    //入力内容をリストに追加する
    taskList.push({
        id:(new Date()).getTime(),
        text: newTask,
        done:false,
        delete:false
    });

    taskFormInputEl.focus();
    drawList();
}

taskFormInputEl.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        taskFormButtonEl.click()

    }
});

drawList();