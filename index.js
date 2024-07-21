#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
const quiz = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris",
    },
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High-Level Machine Language",
            "Home Tool Markup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "What is the chemical formula of water?",
        choices: ["H2O", "CO2", "NaCl"],
        correctAnswer: "H2O",
    }, {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "Who is known as the father of modern physics?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
        correctAnswer: "Isaac Newton",
    },
    {
        question: "In the Disney movie Frozen, who has the magical ability to control ice and snow?",
        choices: ["Elsa", "Anna", "Olaf"],
        correctAnswer: "Elsa",
    },
    {
        question: "What is the name of the world's largest social media platform founded by Mark Zuckerberg?",
        choices: ["Instagram", "Twitter", "Facebook"],
        correctAnswer: "Facebook",
    },
    {
        question: "Which famous TV show features dragons, direwolves, and the Iron Throne?",
        choices: ["Stranger Things ", "Game of Thrones", "Breaking Bad"],
        correctAnswer: "Game of Thrones",
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "What is the symbol of gold?",
        choices: ["Ag", "Au", "Fe"],
        correctAnswer: "Au",
    },
];
async function main() {
    let score = 0;
    for (const question of quiz) {
        const spinner = ora({
            text: `Loading question: ${chalk.blueBright.bold(question.question)}`,
            spinner: "line",
        }).start();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        spinner.stop();
        console.log(chalk.blueBright.bold(question.question));
        const answer = await inquirer.prompt([
            {
                name: "userAnswer",
                type: "list",
                message: "Choose an answer:",
                choices: question.choices,
            },
        ]);
        console.log("User's Answer:", answer.userAnswer);
        console.log("Correct Answer:", question.correctAnswer);
        if (answer.userAnswer === question.correctAnswer) {
            console.log(chalk.green("Correct!"));
            score++;
        }
        else {
            console.log(chalk.red("Incorrect!"));
            console.log(chalk.yellow(`The correct answer is: ${question.correctAnswer}`));
        }
    }
    console.log(`Quiz completed! Your score: ${chalk.yellow.bold(`${score}/${quiz.length}`)}`);
}
main();
