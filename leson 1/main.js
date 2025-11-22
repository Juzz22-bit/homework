const users = [
    {
        name: 'Roman',
        type: 'student',
        age: 25,
        isAdmin: false,
        greet: function (userName) {
            return 'Hello ' + userName
        },
    },
    
    
    
    {
        name: 'Ivan',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Alex',
        age: 26,
        isAdmin: false
    },
    {
        name: 'Tom',
        age: 24,
        isAdmin: false
    },
    {
        name: 'John',
        age: 23,
        isAdmin: true
    }
]
let i = 0
for (const user of users) {
    if (user.isAdmin === false) {
        i += 1
    }
}
console.log(i)
const welcomeMassage = users[0].greet('Преподователь')
console.log(welcomeMassage)