#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t Welcome to CodeWithRubab - Todo-List Application\n"));
// while(conditions){
//  let addTask = await inquirer.prompt([
//       name: "task",
//            type: "input",
//             message: chalk.green("Enter your New Task :")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(`${addTask.task} Task added in Todo-List successfully`);
//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             message: chalk.yellow("Do you want to add more task ?"),
//             default: "false"
//         }
//     ]);
//     conditions = addMoreTask.addmore
// }
// console.log("Your updated Todo-List:" , todoList);
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n${newTask.task} task added successfully in Todo-List`);
};
// function to view todo-list tasks
let viewTask = () => {
    console.log("\n Your Todo-List:");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete :",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List \n`);
};
//function to update task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check view "Todo-List"]`);
};
main();
