function runExercise2() {

    function verificarOcorrenciasA(text) {
        let countA = 0;

        /*
        O trecho de código 'text.normalize("NFD")' realiza a separação dos possiveis caracteres 'a' com acento, em caractere e acento.
        O trecho '.replace(/[\u0300-\u036f]/g, "")' remove estes acentos, convertendo-os em nada.
        O trecho '.toLowerCase();' converte o que é maiusculo para minusculo. 
        */

        let normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        for (let i = 0; i < normalizedText.length; i++) {
            if (normalizedText[i] === 'a') {
                countA++;
            }
        }

        if (countA > 0) {
            console.log(`A letra 'a' aparece ${countA} vez(es) na string.`);
            alert(`A letra "a" apareceu ${countA} vezes.`);
        } else {
            console.log("A letra 'a' não aparece na string.");
            alert(`A letra 'a' não aparece na string.`);
        }
    }

    let stringExemple = prompt("Digite um texto para verificar a ocorrência da letra 'a':");

    verificarOcorrenciasA(stringExemple);

}

runExercise2();