// the bread and butter of type script

interface Student {
  name: string;
  age: number;
  hasParking: boolean;
}

// provides intelliSense when filling out object

const Adam: Student = {
  name: "Adam",
  age: 29,
  hasParking: false // will error out if the object does not satisfy the interface
};

interface SeniorStudent {
  name: string;
  readonly age: number;
  hasParking?: boolean;
  toggleParking: (s: SeniorStudent) => boolean;
}

const Noah: SeniorStudent = {
  name: "Noah",
  age: 29,
  hasParking: false,
  // provides intelliSense even in the function
  toggleParking: s => (s.hasParking = !s.hasParking)
};

// what if you had 8 properties in an object? what if some
// property names were singular, and some were singular?

interface Config {
  ip: string;
  argument: object;
  retryCount: number;
}

const Config1: Config = {
  ip: "0.0.0.0:8080",
  // catches at author time
  arguments: {},
  retryCount: 5
};

// true power of interfaces

interface Shape {
  isSymmetrical: boolean;
  calculateArea: () => number;
}

// shows that the Circle incorrectly implements Shape if empty
class Circle implements Shape {
  private radius: number;
  public isSymmetrical: boolean;

  constructor(r: number, isSym: boolean) {
    this.radius = r;
    this.isSymmetrical = isSym;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(1, true);

// property radius is private, shouldn't access
circle.radius = 3;

// what if we had many shapes?

class Square implements Shape {
  private length: number;
  public isSymmetrical: boolean;

  constructor(l: number, isSym: boolean) {
    this.length = l;
    this.isSymmetrical = isSym;
  }
  calculateArea() {
    return this.length ** 2;
  }
}

class Rectangle implements Shape {
  private len1: number;
  private len2: number;
  public isSymmetrical: boolean;

  constructor(l1: number, l2: number, isSym: boolean) {
    this.len1 = l1;
    this.len2 = l2;
    this.isSymmetrical = isSym;
  }

  calculateArea() {
    return this.len1 * this.len2;
  }
}

const sq = new Square(10, true);
const rec = new Rectangle(4, 3, false);

const shapesArr: Shape[] = [];
shapesArr.push(circle, sq, rec);

shapesArr.forEach(shape => {
  // shape.calculateArea();
  console.log(shape.calculateArea());
});

// multiple warnings arise if not implemented properly
class Triangle implements Shape {
  getArea() {}
}

const tri = new Triangle();

shapesArr.push(tri);
