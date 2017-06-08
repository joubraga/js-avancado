const list = [
    {"desc": "rice", "amout": "1", "value": "5.40"},
    {"desc": "beer", "amout": "12", "value": "1.99"},
    {"desc": "meat", "amout": "1", "value": "15.00"}
];

function getTotal(list){
    let total = 0;
    for (let key in list)
    {
        total +=  list[key].value * list[key].amount;
    }
    return total;
}


console.log(getTotal(list));