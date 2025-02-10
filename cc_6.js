// Task 1: Function Declaration
// Writing a function that calculates total profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
} 
// Testing the function
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

// Task 2: Function Expression
// Writing a function that calculates sales tax 
function calculateSalesTax(amount, taxRate) {
    const salesTax = Math.round(amount * taxRate);
    console.log(`Sales Tax: $${salesTax}`);
}
// Testing the function 
calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1);  

// Task 3: Arrow Function
// Writing an arrow function to determine a bonous 
const calculateBonus = (salary, performanceRating) => {
    const bonusPercentage = {
        "Excellent": 0.2,
        "Good": 0.1,
        "Average": 0.05
    };
    const bonus = salary * (bonusPercentage[performanceRating]);
    console.log(`Bonus: $${bonus}`);
};
// Testing the function
calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");

// Task 4: Parameters and Arguments
// Writing a function that calculates subscription cost
const calculateSubscriptionCost = (plan, months, discount = 0) => {
    const rates = {Basic: 10, Premium: 20, Enterprise: 50};
    const totalCost = (rates[plan] * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
};
// Testing the function
calculateSubscriptionCost("Basic", 6, 10); 
calculateSubscriptionCost("Premium", 12, 0);

// Task 5: Returning Values
// Writing a function that returns the converted currency amount
function convertCurrency(amount, exchangeRate) {
    const currency = (amount * exchangeRate).toFixed(2);
    console.log(`Converted Amount: $${currency}`);
}
// Testing the function 
convertCurrency(100, 1.1);
convertCurrency(250, 0.85);

// Task 6: Higher-Order Functions
let orders = [200, 600, 1200, 450, 800]; // Declaring an array orders
const applyBulkDiscount = (orders, discountFunction) => orders.map(discountFunction); // Writing a higher-order function 
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // Calling the function with a discount strategy
console.log(discountedOrders); // Logging the result

// Task 7: Closures
// Writing a function that returns another function to add expenses and keep a running total
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(amount) {
        totalExpenses += amount;
        return `Total Expenses: $${totalExpenses}`;
    };
}
// Testing the data 
let tracker = createExpenseTracker();
console.log(tracker(200)); 
console.log(tracker(150)); 

// Task 8: Recursion in JavaScript
// Writing a recursive function 
function calculateYearsToPromotion(employeeLevel) {
if (employeeLevel >= 10) {
     return 0;
}
return 2 + calculateYearsToPromotion(employeeLevel + 1);
}
// Testing the function 
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`);
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`);
