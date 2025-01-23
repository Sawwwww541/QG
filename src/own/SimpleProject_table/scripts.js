function add(){
    let table=document.getElementById("table");
    let length=table.rows.length;
    let newrow=table.insertRow(length);

    let name=newrow.insertRow(0);
    let age=newrow.insertRow(1);
    let gender=newrow.insertRow(2);

    name.innerHTML='空';
    age.innerHTML='0';
    gender.innerHTML='未知';

    let button=newrow.insertRow(3);
    button.innerHTML='<button onclick="edit(this)">编辑</button> <button onclick="delete(this)">删除</button>'

}
function edit(){
    
}