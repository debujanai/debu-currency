import inquirer from "inquirer";
const currency = {
    USD: 1, //
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: 'from',
        type: 'list',
        message: 'Enter from Currency',
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: 'to',
        type: 'list',
        message: 'Enter to Currency',
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    { name: 'amount',
        type: 'number',
        message: 'Amount'
    }]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let converted_currency = (toAmount / fromAmount) * user_answer.amount;
console.log(converted_currency);
