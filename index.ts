#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { Addition } from "./calculator value/add.js";
import { Subtraction } from "./calculator value/sub.js";
import { Multiplication } from "./calculator value/multiply.js";
import { Division } from "./calculator value/divide.js";
import { module } from "./calculator value/module.js";
import { type } from "os";


const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res ,2000)
})
}

async function getStarted() {
    let Animation=chalkAnimation.rainbow("Lets Gets Calculated")
    await sleep()
    Animation.stop()
    console.log(chalk.blue(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|\n`))
}
await getStarted()

async function askQuestion() {
    let answer=await inquirer 
    .prompt([
        {
            message:chalk.red("Which Operator you want to perform?"),
            type:"list",
            choices:["Addition","Subtraction","Multiplication","Division","Module"],
            name:"operator"
        },
        {
            message:chalk.blue("Enter Your First Value."),
            type:"number",
            name:"num1"
        },
        {
            message:chalk.blue("Enter Your Second Value."),
            type:"number",
            name:"num2"
        },
    ])
    if(answer.operator=="Addition"){
        let result=Addition(answer.num1,answer.num2)
        console.log(chalk.green(`Addition: ${answer.num1} + ${answer.num2} = ${result}`))
    }
    else if(answer.operator=="Subtraction"){
        let result=Subtraction(answer.num1,answer.num2)
        console.log(chalk.green(`Subtraction: ${answer.num1} - ${answer.num2} = ${result}`))
    }
    else if(answer.operator=="Multiplication"){
        let result=Multiplication(answer.num1,answer.num2)
        console.log(chalk.green(`Multiplication: ${answer.num1} * ${answer.num2} = ${result}`))
    }
    else if(answer.operator=="Division"){
        let result=Division(answer.num1,answer.num2)
        console.log(chalk.green(`Divsion: ${answer.num1} / ${answer.num2} = ${result}`))
    }
    else if(answer.operator=="Module"){
        let result=module(answer.num1,answer.num2)
        console.log(chalk.green(`Module: ${answer.num1} % ${answer.num2} = ${result}`))
    }
}

async function endContinue() {
    do{
        await askQuestion()
        var Continue =await inquirer
        .prompt({
            name:"result",
            type:"input",
            message:chalk.red("Do you want to Continue Press 'y' or 'n';")
        })
    }while(Continue.result=='y'||Continue.result=='Y'||Continue.result=='yes'||Continue.result=='YES')
}

endContinue()