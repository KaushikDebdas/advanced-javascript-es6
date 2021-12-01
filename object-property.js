const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Sakib Khan'},
    {id: 41, name: 'Moushumi'},
    {id: 71, name: 'Dipjol'}
]

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id > 40);
console.log(names);
console.log(ids);
console.log(bigger);
