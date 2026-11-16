
let todolist=[
{item:'haxkjakj',
date:'01/01/2027',

},
{item:'haxk876kj',
date:'01/01/2027',

}


];
Display();

function addtodo(){


    let date=document.querySelector('#date')
    let Input=document.querySelector("#Todo-inp");
    let Todo_item=Input.value;
    let Todo_date=date.value;
   todolist.push({item:Todo_item,date:Todo_date});
   Input.value ='';
   Todo_date='';
   Display();
}
function Display(){
    let todo=document.querySelector('.container');
    let newhtml='';
    for(let i=0;i<todolist.length;i++){
// let item=todolist[i].item;
// let duedate=todolist[i].date;
let {item,date}=todolist[i]

    newhtml+=`

    <span id="item-id">${item}</span>
     <span id='date-id'>${date}</span>
    <button class="button-dlt"onclick="
    todolist.splice(${i},1);
    Display();
    ">remove</button>`
    
    }
    todo.innerHTML=newhtml;
}