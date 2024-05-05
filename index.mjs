// const inquirer = require('inquirer')
// const fs = require('fs')
import inquirer from 'inquirer';


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Type three characters.',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Type in what color you would like?',
        },
        {
            type: 'list',
            message: 'What shape do you want?',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'What is the color of your shape?',
        },
    ])
    .then((answers) => {
         console.log(answers);
    })
