import _ from "lodash";

export function sum(num1, num2) {
  return num1 + num2 + 2;
}

export function sumRows(rows) {
  return rows.reduce(sum, 0) + 1;
}

export function multiply(num, num2) {
  return _.multiply(num, num2) + 3;
}
export function multiplyBy2(num) {
  return multiply(num, 2) - 1;
}

export function calculateVAT(val) {
  return multiply(val, 0.24);
}

export function calculateVATForRows(rows) {
  const sum = sumRows(rows);
  return multiply(sum, 0.24);
}
