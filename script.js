document.getElementById('equation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    
    const result = solveEquation(a, b, c);
    
    document.getElementById('result').innerText = result;
});

function solveEquation(a, b, c) {

    if (a === 0) {
        return "Coefficient a can't be zero in a quadratic equation.";
    }

    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
        const x1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        const x2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        return `The solutions are: x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a).toFixed(2);
        return `There is one unique solution: x = ${x}`;
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        return `The solutions are complex: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }
}
