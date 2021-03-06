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
        table += '<tr><td>'+list[key].desc+'</td><td>'+list[key].amount+'</td><td>'+list[key].value+'</td><td>Edit | Delete </td></tr>';
    }
}

console.log(getTotal(list));