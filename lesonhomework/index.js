// Задача 1
function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  const discount = basePrice * (discountPercent / 100);
  const priceAfterDiscount = basePrice - discount;
  const finalPrice = priceAfterDiscount + priceAfterDiscount * taxRate;

  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2
function checkAccess(username, password) {
  if (username === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkAccess("admin", "123456"));
console.log(checkAccess("user", "1111"));

// Задача 3
function getTimeOfDay(time) {
  if (time >= 0 && time <= 5) {
    return "Ночь";
  } else if (time >= 6 && time <= 11) {
    return "Утро";
  } else if (time >= 12 && time <= 17) {
    return "День";
  } else if (time >= 18 && time <= 23) {
    return "Вечер";
  } else {
    return "Некорректное время";
  }
}

console.log(getTimeOfDay(3));
console.log(getTimeOfDay(10));
console.log(getTimeOfDay(15));
console.log(getTimeOfDay(20));
console.log(getTimeOfDay(30));

// Задача 4
function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }

  return "Чётных чисел нет";
}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
