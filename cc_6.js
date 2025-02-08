// Task 1: Function Declaration
// Writing a function that calculates total profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
} 
// Testing the function
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);
