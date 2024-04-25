#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = "ture";
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQ1",
            type: "input",
            message: "What would you like to add in your todo?"
        },
        {
            name: "secondQ2",
            type: "confirm",
            message: "Would you like to add more in your todo?",
            default: "ture",
        }
    ]);
    todos.push(todoQuestion.firstQ1);
    console.log(todos);
    condition = todoQuestion.secondQ2;
}
