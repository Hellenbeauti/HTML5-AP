var fullnameTag = document.getElementById('fullname_id');
var emailTag = document.getElementById('email_id');
var addressTag = document.getElementById('address_id');
var dataTable = document.getElementById('data-table');
var count = 0;

var userList=[]


function saveData(){
    let fullname = fullnameTag.value
    let email = emailTag.value
    let address = addressTag.value


    userList.push({
        'fullname': fullname,
        'email': email,
        'address': address
    })
        console.log(userList);
        showDataTable();
}


function showDataTable(){
    dataTable.innerHTML = ''

    for( var i=0; i<userList.length; ++i){
        dataTable.innerHTML +=`<tr>
            <td> ${i+1}</td>
            <td> ${userList[i].fullname}</td>
            <td> ${userList[i].email}</td>
            <td> ${userList[i].address}</td>
            <td> <button onclick="deleteItem(${i})">Delete</button></td>    
            </tr>
        `
    }
}

function deleteItem(index){
    userList.splice(index, 1)
    showDataTable();
}

function resetData(){
    fullnameTag.value=""
    emailTag.value=""
    addressTag.value=""
}