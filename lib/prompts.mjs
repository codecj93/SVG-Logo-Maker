import inquirer from 'inquirer';

export const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Type three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Type in what color you would like for the text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want?',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What is the color of your shape?',
    },
    {
      type: 'input',
      name: 'filename',
      message: 'Enter the filename for the SVG file (e.g., logo.svg):',
    },
  ]);

  return answers;
};
