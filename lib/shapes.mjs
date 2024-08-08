export class Shape {
  constructor(color) {
    this.color = color;
  }

  toSVG() {
    throw new Error('Method "toSVG" must be implemented in subclasses');
  }
}

export class Circle extends Shape {
  constructor(color, radius = 40) {
    super(color);
    this.radius = radius;
  }

  toSVG() {
    return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
  }
}

export class Square extends Shape {
  constructor(color, size = 80) {
    super(color);
    this.size = size;
  }

  toSVG() {
    return `<rect x="10" y="10" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

export class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  toSVG() {
    return `<polygon points="50,15 90,85 10,85" fill="${this.color}" />`;
  }
}
