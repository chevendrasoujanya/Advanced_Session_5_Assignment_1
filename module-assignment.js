"use strict";
var moduleExample;
(function (moduleExample) {
    var shape = (function () {
        function shape(height, base, side) {
            this.height = height;
            this.base = base;
            this.side = side;
        }
        shape.prototype.triangle = function () {
            areaOfTriangle = ((this.height) * (this.base)) / 2;
            console.log("Area of a Triangle: " + areaOfTriangle);
        };
        shape.prototype.square = function () {
            areaOfSquare = (this.side) * (this.side);
            console.log("Area of a Square: " + areaOfSquare);
        };
        return shape;
    }());
    moduleExample.shape = shape;
})(moduleExample = exports.moduleExample || (exports.moduleExample = {}));
