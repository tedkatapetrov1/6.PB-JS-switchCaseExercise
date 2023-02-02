function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let EvenOrOdd = "";

    if (operator === "+") {
        result = n1 + n2;
    } else if (operator === "-") {
        result = n1 - n2;
    } else if (operator === "*") {
        result = n1 * n2;
    } else if (operator === "/") {
        result = n1 / n2;
    } else if (operator === "%") {
        result = n1 % n2;
    }

    if (result % 2 === 0 && result % 2 === 0 && result % 2 === 0) {
        EvenOrOdd = "even";
    } else {
        EvenOrOdd = "odd";
    }

    if (n2 === 0 && operator === "/" || n2 === 0 && operator === "%") {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator === "+" || operator === "-" || operator === "*") {
        console.log(`${n1} ${operator} ${n2} = ${(result)} - ${EvenOrOdd}`);
    } else if (operator === "/") {
        console.log(`${n1} / ${n2} = ${(result).toFixed(2)}`);
    } else {
        console.log(`${n1} % ${n2} = ${(result)}`);
    }

}
operationsBetweenNumbers(["112",
"0",
"/"])

















