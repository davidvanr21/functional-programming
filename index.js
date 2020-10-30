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

console.log('SurveyData')

// Import JSON file
fetch("surveyData.json")
 .then(response => response.json())
 .then(json => console.log(json));

