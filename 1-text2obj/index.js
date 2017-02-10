import fs from 'fs';

console.log('1-textobj');
console.log('=========');

const output = fs.readFileSync('1-text2obj/orders.csv', 'utf8');
let result = output.trim();
result = result.split('\n');
result = result.map((line) => line.split(','));
result = result.reduce((customers, line) => {
    let order = {
        name: line[1],
        quantity: line[2],
        price: line[3]
    };
    let lineSubtotal = parseInt(order.price) * parseInt(order.quantity);
    if(!customers[line[0]]) {
        customers[line[0]] = { orders: [order], total: lineSubtotal };
    } else {
        customers[line[0]].orders.push(order);
        customers[line[0]].total += lineSubtotal;
    }
    return customers;
}, {});
console.log(JSON.stringify(result));