const args = process.argv.slice(2);
const operation = args[0];
const values = args.slice(1);

function add(values) {
  return values.reduce((a, b) => Number(a) + Number(b), 0);
}

function subtract(values) {
  return values.reduce((a, b) => Number(a) - Number(b));
}

function multiply(values) {
  return values.reduce((a, b) => Number(a) * Number(b), 1);
}

function divide(values) {
  return values.reduce((a, b) => Number(a) / Number(b));
}

function calculate(operation, values) {
  switch (operation) {
    case "add":
      return add(values);
    case "subtract":
      return subtract(values);
    case "multiply":
      return multiply(values);
    case "divide":
      return divide(values);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

try {
  const result = calculate(operation, values);
  console.log(`${values.join(operation === "divide" ? "/" : operation === "subtract" ? "-" :operation==="multiply" ? "*": "+")}= ${result}`);
} catch (error) {
  console.error(error.message);
}
