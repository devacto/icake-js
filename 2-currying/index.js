console.log('2-currying');
console.log('==========')

let dragons = [
    { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi', element: 'lightning' },
    { name: 'karo', element: 'fire' },
    { name: 'doomer', element: 'timewarp' }
];

let hasElement = (element) => (obj) => obj.element === element;

let lightningDragons = dragons.filter(hasElement('lightning'));

console.log(lightningDragons);