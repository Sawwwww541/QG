//增加函数
function addRow(){
    let table=document.getElementById("table1");    //定位要插入的表格
    let length=table.rows.length;            //获取具体插入的位置
    let newrow=table.insertRow(length);

    let namecol=newrow.insertCell(0);
    let phonecol=newrow.insertCell(1);
    let docol=newrow.insertCell(2);

    namecol.innerHTML='未命名';
    phonecol.innerHTML='无联系方式';
    docol.innerHTML='<button onclick="editRow(this)">编辑</button> <button onclick="deleteRow(this)">删除</button>'
}
//删除函数
function deleteRow(button){
    let row=button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
//更改函数
function editRow(button){
    let row=button.parentNode.parentNode;
    let name=row.cells[0];
    let phone=row.cells[1];

    let inputname=prompt("请输入名字：");
    let inputphone=prompt("请输入联系方式：");

    if(inputname!=null) name.innerHTML=inputname;
    if(inputphone!=null) phone.innerHTML=inputphone;
}