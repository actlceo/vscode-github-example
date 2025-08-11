// Create: app.js
console.log("Hello from VS Code and GitHub Desktop!");

function greetUser(name) {
    return `Welcome ${name}! This project uses VS Code + GitHub Desktop.`;
}

console.log(greetUser("Developer"));
// Add to app.js (at the bottom)

// New feature: Calculator functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Test the calculator
console.log("Calculator test:");
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`4 * 6 = ${multiply(4, 6)}`);