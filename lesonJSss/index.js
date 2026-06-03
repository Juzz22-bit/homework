//задача 1

const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
];

users.push(
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true }
);

console.log(users);

//задача 2
function getUserAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getUserAverageAge(users)); 


//задача 3
function getUserAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getUserAverageAge(users)); 

function getAllAdmins(users) {
  return users.filter(user => user.isAdmin);
}

console.log(getAllAdmins(users));

//задача 4
function first(arr, n) {
  if (n === undefined) {
    return arr[0];
  }

  if (n === 0) {
    return [];
  }

  return arr.slice(0, n);
}

console.log(first([1, 2, 3, 4]));      // 1
console.log(first([1, 2, 3, 4], 2));   // [1, 2]
console.log(first([1, 2, 3, 4], 0));   // []
console.log(first([1, 2, 3, 4], 10));  // [1, 2, 3, 4]