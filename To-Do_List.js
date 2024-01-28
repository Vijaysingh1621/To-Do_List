const ToDoList=[];
        function renderToDOList(){
            let toDoListHTML='';
            for(let i=0;i<ToDoList.length;i++){
                const toDoObject =ToDoList[i];
                const {name,duedate,duetime}=toDoObject;
                const Html=`<div class="todo-grid">
                            <div><img src="pencil-dot.png" class="pencil-dot"> ${name}</div>
                            <div class="date-time"> ${ duedate } </div>
                            <div class="date-time"> ${duetime} </div>
                            </div>
                            <button class="delete-btn" onclick="
                                 ToDoList.splice(${i},1);
                                    renderToDOList();
                            ">
                            Delete
                            </button>
                            `;
                toDoListHTML+=Html;
            }
            console.log(toDoListHTML);
            document.querySelector(`.js-todo-list`).innerHTML=toDoListHTML;

        }
        function AddToDo(){
            const inputElement=document.querySelector(`.js-name-input`);
            const name=inputElement.value;
            const inputDateElement=document.querySelector(`.js-input-date`);
            const duedate=inputDateElement.value;
            const inputTimeElement=document.querySelector(`.js-input-time`);
            const duetime=inputTimeElement.value;
            ToDoList.push({name,duedate,duetime});
            inputElement.value='';
            renderToDOList();
        }