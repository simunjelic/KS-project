// Generate random numbers for income and expenses (replace with your actual data)
function generateRandomData() {
  return Math.floor(Math.random() * 1000) + 500;
}

// Get the current month and year
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

// Create arrays to store monthly data
var months = [];
var incomes = [];
var expenses = [];

// Calculate statistics for the last 5 months
for (var i = 4; i >= 0; i--) {
  var date = new Date(currentYear, currentMonth - i, 1);
  var month = date.toLocaleString('default', { month: 'long' });
  var income = generateRandomData();
  var expense = generateRandomData();

  months.push(month);
  incomes.push(income);
  expenses.push(expense);
}

// Calculate total income and expenses for the year
var totalIncome = incomes.reduce((a, b) => a + b, 0);
var totalExpenses = expenses.reduce((a, b) => a + b, 0);
var balance = totalIncome - totalExpenses;

// Update the HTML elements with the calculated values
var monthList = document.getElementById('monthList');
var incomeList = document.getElementById('incomeList');
var expensesList = document.getElementById('expensesList');
var totalIncomeElement = document.getElementById('totalIncome');
var totalExpensesElement = document.getElementById('totalExpenses');
var balanceAmountElement = document.getElementById('balanceAmount');

months.forEach(function (month) {
  var monthItem = document.createElement('li');
  monthItem.className = 'list-group-item';
  monthItem.textContent = month;
  monthList.appendChild(monthItem);
});

incomes.forEach(function (income) {
  var incomeItem = document.createElement('li');
  incomeItem.className = 'list-group-item';
  incomeItem.textContent = '$' + income.toFixed(2);
  incomeList.appendChild(incomeItem);
});

expenses.forEach(function (expense) {
  var expenseItem = document.createElement('li');
  expenseItem.className = 'list-group-item';
  expenseItem.textContent = '$' + expense.toFixed(2);
  expensesList.appendChild(expenseItem);
});

totalIncomeElement.textContent = 'Ukupni prihodi: €' + totalIncome.toFixed(2);
totalExpensesElement.textContent = 'Ukupni troškovi: €' + totalExpenses.toFixed(2);
balanceAmountElement.textContent = 'Saldo: €' + balance.toFixed(2);

if (balance > 0) {
  balanceAmountElement.style.color = 'green';
} else if (balance < 0) {
  balanceAmountElement.style.color = 'red';
} else {
  balanceAmountElement.style.color = 'black';
}
