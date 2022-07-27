let sno=5;
function belowTr(){
    let tableBody = document.getElementById('tableBody');
       
    let trClone=` <tr>
    <td>${sno}</td>
    <td><input type="text" placeholder="First name" class="input_text"></td>
    <td><input type="text" placeholder="Last name" class="input_text"></td>
    <td><input type="text" placeholder="Enter city" class="input_text"></td>
    <td><input type="text" placeholder="Enter country" class="input_text"></td>
    </tr>`;
    sno++;
    tableBody.innerHTML+=trClone;
}

function aboveTr(){
    let newList="";
    for(let i=1;i<=sno;i++){
newList+=` <tr>
<td>${i}</td>
<td><input type="text" placeholder="First name" class="input_text"></td>
<td><input type="text" placeholder="Last name" class="input_text"></td>
<td><input type="text" placeholder="Enter city" class="input_text"></td>
<td><input type="text" placeholder="Enter country" class="input_text"></td>
</tr>`
    }
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML=newList;
    sno++;
}