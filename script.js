function runExercise1() {

    function isFibonacciNumber(n) {
        let a = 0, b = 1;

        while (a < n) {
            let temp = a;
            a = b;
            b = temp + b;
        }

        return a === n;
    }

    do {
        const input = prompt("Informe um número para verificar se pertence à sequência de Fibonacci (ou 'sair' para encerrar):");

        if (input.toLowerCase() === 'sair') {
            break;
        }

        const num = parseInt(input);

        if (isFibonacciNumber(num)) {
            alert(`O número ${num} pertence à sequência de Fibonacci.`);
        } else {
            alert(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
        }

    } while (true);

    alert("Programa encerrado.");

}

runExercise1();