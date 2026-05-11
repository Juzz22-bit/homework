// =========================
// Задача 1
// =========================

const person = {
    name: "Alex",
    age: 20,
    city: "Frankfurt",
    hobby: "Gaming"
};

console.log(person);

// =========================
// Задача 2
// =========================

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ name: "Alex" })); // false

// =========================
// Задача 3
// =========================

const task = {
    title: "Изучить JavaScript",
    description: "Практиковать объекты",
    isCompleted: false
};

function cloneAndModify(object, modifications) {
    return {
        ...object,
        ...modifications
    };
}

const updatedTask = cloneAndModify(task, {
    isCompleted: true,
    title: "Изучить JS объекты"
});

for (let key in updatedTask) {
    console.log(key + ": " + updatedTask[key]);
}

// =========================
// Задача 4
// =========================

function callAllMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "function") {
            obj[key]();
        }
    }
}

const myObject = {
    method1() {
        console.log("Метод 1 вызван");
    },

    method2() {
        console.log("Метод 2 вызван");
    },

    property: "Это не метод"
};

callAllMethods(myObject);