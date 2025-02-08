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
