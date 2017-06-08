const list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "1", "value": "15.00"}
];

function getTotal(list){
    let total = 0;
    for (let key in list)
    {
        total +=  list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    let table = '<thead><tr><th>Description</th><th>Amount</th><th>Value</th><th>Action</th></tr></thead><tbody>';
    for(let key in list){
        table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+list[key].amount+'</td><td>'+ formatValue(list[key].value) +'</td><td>Edit | Delete </td></tr>';
    }
    table +='</tbody>';
    document.getElementById('listTable').innerHTML = table;
}

function formatDesc(desc){
    let str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

function formatValue(value){
    let str = parseFloat(value).toFixed(2) + "";
    str = str.replace('.', ',');
    str = "$ "+str;

    return str;
}

function addData(){
    let desc = document.getElementById('desc').value;
    let amount = document.getElementById('amount').value;
    let value = document.getElementById('value').value;
}

setList(list);
console.log(getTotal(list));