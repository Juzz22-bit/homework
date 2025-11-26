
/**
 * Простой калькулятор, выполняющий одну из четырех базовых операций.
 * @param {number} num1 Первое число.
 * @param {number} num2 Второе число.
 * @param {string} operator Строка-оператор ('plus', 'minus', 'multiply', 'divide').
 * @returns {number|string} Результат операции или сообщение об ошибке.
 */
function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            // Добавим проверку деления на ноль
            if (num2 === 0) {
                return "Ошибка: деление на ноль невозможно.";
            }
            return num1 / num2;
        default:
            return Ошибка: оператор '${operator}' не поддерживается.Используйте 'plus', 'minus', 'multiply' или 'divide'.;
    }
}

// Примеры использования и запись результата в переменную:

// 1. Вычитание (пример из задания):
const resultMinus = simpleCalculator(2, 3, 'minus');
console.log(2 минус 3: ${ resultMinus }); // Выведет: 2 минус 3: -1

// 2. Сложение:
const resultPlus = simpleCalculator(10, 5, 'plus');
console.log(10 плюс 5: ${ resultPlus }); // Выведет: 10 плюс 5: 15

// 3. Умножение:
const resultMultiply = simpleCalculator(4, 6, 'multiply');
console.log(4 умножить на 6: ${ resultMultiply }); // Выведет: 4 умножить на 6: 24

// 4. Деление:
const resultDivide = simpleCalculator(100, 4, 'divide');
console.log(100 разделить на 4: ${ resultDivide }); // Выведет: 100 разделить на 4: 25

// Пример деления на ноль:
const resultZeroDivide = simpleCalculator(10, 0, 'divide');
console.log(10 разделить на 0: ${ resultZeroDivide }); // Выведет: 10 разделить на 0: Ошибка: деление на ноль невозможно.