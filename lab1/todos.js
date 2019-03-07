
const fs = require('fs');

let addTodo = (id,task) => {
   
    let todos = [];
    let todo = {
        id,
        task,
        done:"false",        
    };
  
    try {
        let todosString = fs.readFileSync('todos-data.json');
        todos = JSON.parse(todosString);
    } catch (exception) {
 
    }

    let duplicatetodos = todos.filter((todo) => todo.id === id);
 
    if (duplicatetodos.length === 0) {
        todos.push(todo);
        fs.writeFileSync('todos-data.json', JSON.stringify(todos));
    }
    else{
        console.log("enter another id please");
    }
    
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let listTodos = () => {
    let tasksList;
    fs.readFile('todos-data.json' ,'utf8', function (err, data) {
    if (err) throw err;
    tasksList = JSON.parse(data);          
    console.log(tasksList);      
    
});
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let deleteTodos = (toDeleteID) => {
    let tasksList;
    fs.readFile('todos-data.json' ,'utf8', function (err, data) {
    if (err) throw err;deleteTodos
    tasksList = JSON.parse(data);          
   const tasks = tasksList.filter((task)=>{
       if(task.id==toDeleteID)   return false;
       return true;
   }); 
   
   fs.writeFileSync('todos-data.json', JSON.stringify(tasks));
   console.log("Done Successfully :)");
   console.log("the updated list is : ");
   console.log(tasks);
});
};




//////////////////////////////////////////////////////////////////////////////////////////////////////////

let editTodos = (toEditID,newValue) => {
    
    fs.readFile('todos-data.json' ,'utf8', function (err, data) {
    if (err) throw err;
    let tasksList;
    tasksList = JSON.parse(data);          
    tasksList.forEach((task)=>{
       if(task.id==toEditID) {
           task.task = newValue;
       }
     
   }); 
   fs.writeFileSync('todos-data.json', JSON.stringify(tasksList));
   console.log("Done Successfully :)");
   console.log("the updated list is : ");
   console.log(tasksList);
});
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    addTodo,
    listTodos,
    deleteTodos,
    editTodos
};
