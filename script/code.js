document.querySelector('#btnAddItem').addEventListener("click",(event)=>{
    
if (document.querySelector('#taskUpdate').value.length == 0){
        alert("Please enter a new task")
}
else if ((document.querySelector('#taskUpdate').value.length<=3)){
        alert("Please enter a longer task name")
}
else{
    // event.preventDefault()    
    let name=document.querySelector('#taskUpdate').value
    let newName=name.charAt(0).toUpperCase()+name.slice(1)
    console.log(newName)
    let date= new Date();
    console.log(date)
    
        let task = [
        {
        name:newName,
        createdDate:date,
        },
        ]
    console.log(task)

    let output=document.getElementById('display')
    task.forEach((task) => {
    output.innerHTML +=
    `
    <li>
    <input type="checkbox">
    <label for="">${task.name}</label>
    </li>
    `
    })
    // let checkbox = document.querySelector('');
    //     if (checkbox.checked) {

    
    // }
}

}) 

