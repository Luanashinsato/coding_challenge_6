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
