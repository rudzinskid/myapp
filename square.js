exports.area = function (width) { return width * width; };
exports.perimeter = function (width) { return 4 * width; };
exports.dwumian = function (a, b, c) {
    delta = b * b - 4 * a * c
    if (delta >= 0)
        return ([(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)])
    else return ([null, null])};