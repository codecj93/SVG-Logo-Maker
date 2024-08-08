import { Circle, Square, Triangle } from '../lib/shapes.mjs';

describe('Triangle', () => {
  test('Triangle should render correctly with the given color', () => {
    const shape = new Triangle('blue');
    expect(shape.toSVG()).toEqual('<polygon points="50,15 90,85 10,85" fill="blue" />');
  });
});
