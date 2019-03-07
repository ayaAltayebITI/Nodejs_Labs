
const fs = require('fs');

let adduser = (name,age) => {
   
    let users = [];
    let user = {
        name,
        age,       
    };
  
    try {
        let usersString = fs.readFileSync('users-data.json');
        users = JSON.parse(usersString);
    } catch (exception) {
 
    }

    let duplicatetodos = users.filter((user) => user.name === name);
 
    if (duplicatetodos.length === 0) {
        users.push(user);
        fs.writeFileSync('users-data.json', JSON.stringify(users));
    }
    else{
        console.log("enter another name please");
    }
    
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let listUsers = () => {
    let usersList;
    fs.readFile('users-data.json' ,'utf8', function (err, data) {
    if (err) throw err;
    usersList = JSON.parse(data);          
    console.log(usersList);      
    
});
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let deleteUser = (toDeleteName) => {
    let tasksList;
    fs.readFile('users-data.json' ,'utf8', function (err, data) {
    if (err) throw error;
    let usersList
    usersList = JSON.parse(data);          
   const users = usersList.filter((task)=>{
       if(user.name==toDeleteName)   return false;
       return true;
   }); 
   
   fs.writeFileSync('todos-data.json', JSON.stringify(users));
   console.log("Done Successfully :)");
   console.log("the updated list is : ");
   console.log(users);
});
};




//////////////////////////////////////////////////////////////////////////////////////////////////////////

let editUser = (toEditName,newValue) => {
    
    fs.readFile('users-data.json' ,'utf8', function (err, data) {
    if (err) throw err;
    let tusersList;
    usersList = JSON.parse(data);          
    usersList.forEach((user)=>{
       if(user.name==toEditName) {
           user.name = newValue;
       }
     
   }); 
   fs.writeFileSync('users-data.json', JSON.stringify(tasksList));
   console.log("Done Successfully :)");
   console.log("the updated list is : ");
   console.log(usersList);
});
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
   adduser,
    listUsers,
    deleteUser,
    editUser
};
