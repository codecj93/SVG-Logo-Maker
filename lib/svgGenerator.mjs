import { Circle, Triangle, Square } from './shapes.mjs';

export const generateSVG = (shapeColor, shape, textColor, text) => {
   
    switch (shape) {
        case 'circle':
            shape = new Circle(shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(shapeColor);
            break;
        case 'square':
            shape = new Square(shapeColor);
            break;
        default:
            throw new Error('Invalid shape');
    }

    return `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.toSVG()}
      <text x="50" y="55" font-size="12" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
};
