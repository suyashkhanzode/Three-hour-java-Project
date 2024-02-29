function handleFormSubmit(event) {
    event.preventDefault();
    const amount = document.getElementById('amount');
    const description = document.getElementById('description');
    const  category= document.getElementById('category');
    // console.log("Amount:", amount);
    // console.log("Description:", description);
    // console.log("Category:", category);
   
    
    const rowObject ={
        amount : amount.value,
        description:description.value,
        category:category.value
    };

    const obj = JSON.stringify(rowObject);
    const uniqueKey = description.value + '_' + Date.now();
    localStorage.setItem(uniqueKey,obj);
    createList(uniqueKey);

}

function createList(uniqueKey)
{
    const list = document.createElement('li');
    list.className = "list-group-item";
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger";
    deleteBtn.textContent = "Delete";
    const editBtn = document.createElement('button');
    editBtn.className = "btn btn-warning";
    editBtn.textContent = "Edit";
    const expens = JSON.parse(localStorage.getItem(uniqueKey));
    list.textContent = expens.amount + "  "+expens.description+" "+expens.category+ " ";
    deleteBtn.addEventListener("click",function(){
           deleteExpense(uniqueKey);
           list.remove(uniqueKey);
    })
    editBtn.addEventListener("click",function(){
        deleteExpense(uniqueKey);
        list.remove(uniqueKey);
        editExpense(expens);
    })
    list.append(deleteBtn);
 
    list.append(editBtn);
    document.querySelector('.list-group').appendChild(list);
}

function deleteExpense(key)
{
    localStorage.removeItem(key);
}

function editExpense(obj)
{
    const amount = document.getElementById('amount');
    const description = document.getElementById('description');
    const  category= document.getElementById('category');

    amount.value = obj.amount;
    description.value = obj.description;
    category.value = obj.category;

    const updatedObj = {
        amount : amount.value,
        description:description.value,
      
    }

    updateExpense(updatedObj);
}

function updateExpense(obj)
{
    const Newobj = JSON.stringify(obj);
    const uniqueKey = description.value + '_' + Date.now();
    localStorage.setItem(uniqueKey,Newobj);
}
