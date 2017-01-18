export module moduleExample {
	export class shape {
		height: number;
		base: number;
		areaOfTriangle: number;

		side: number;
		areaOfSquare: number;
		constructor(height, base, side) {
			this.height = height;
			this.base = base;
			this.side = side;
		}

		triangle() {
			areaOfTriangle = ((this.height)*(this.base))/2;
			console.log(`Area of a Triangle: ${areaOfTriangle}`);
		}

		square() {
			areaOfSquare = (this.side)*(this.side);
			console.log(`Area of a Square: ${areaOfSquare}`);
		}
	}
}

