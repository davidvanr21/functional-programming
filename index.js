// console.log('Fun Fun Function - Animals')

// var animals = [
//     {name: 'Fluffykins',    species: 'rabbit'},
//     {name: 'Caro',          species: 'dog'},
//     {name: 'Hamilton',      species: 'dog'},
//     {name: 'Harold',        species: 'fish'},
//     {name: 'Ursula',        species: 'cat'},
//     {name: 'Jimmy',         species: 'fish'},
// ]

// var names = animals.map((animal) => animal.name)

// console.log(names)



// console.log(dogs.map(dog => dog.name))

console.log('David')

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount);