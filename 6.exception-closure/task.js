function parseCount(text) {
    let number = Number.parseInt(text);
    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    } else {
        return number;
    }
}

function validateCount(text) {
    try {
        return parseCount(text);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}



function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}