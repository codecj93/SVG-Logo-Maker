import fs from 'fs';
import { questions } from './lib/prompts.mjs';
import { generateSVG } from './lib/svgGenerator.mjs';

const main = async () => {
    const answers = await questions();
    const svg = generateSVG(answers.shapeColor, answers.shape, answers.textColor, answers.text);
    fs.writeFileSync('output.svg', svg);
}

main();