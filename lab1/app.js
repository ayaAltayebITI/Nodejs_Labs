
const fs = require('fs');
const todos = require('./todos.js');
console.log("Thank You for using us ");

 
if (process.argv[2] === 'add') {    
    todos.addTodo(process.argv[3],process.argv[4]);
} 
else if (process.argv[2] === 'list') {
    todos.listTodos();
} 
else if (process.argv[2] === 'edit') {
    todos.editTodos(process.argv[3],process.argv[4]);
} 
else if (process.argv[2] === 'delete') {
    todos.deleteTodos(process.argv[3],process.argv[4]);
} 
else {
    console.log('Try one of these commands [add list delete edit]');
}
