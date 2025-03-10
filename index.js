document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnGerar").addEventListener("click", gerarTabuada);
});

function gerarTabuada() {
    let inicio = parseInt(document.getElementById('numInicio').value);
    let fim = parseInt(document.getElementById('numFim').value);
    let container = document.getElementById('tabuadasContainer');

    container.innerHTML = "";

    // Validação dos valores
    if (isNaN(inicio) || isNaN(fim)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (inicio > fim) {
        alert("O número inicial deve ser MENOR ou IGUAL ao número final.");
        return;
    }

    for (let i = inicio; i <= fim; i++) {
        let tabuadaDiv = document.createElement("div");
        tabuadaDiv.classList.add("tabuada");
        tabuadaDiv.innerHTML = `<strong>Tabuada do ${i}:</strong><br>`;

        for (let j = 1; j <= 10; j++) {
            tabuadaDiv.innerHTML += `${i} x ${j} = ${i * j}<br>`;
        }

        container.appendChild(tabuadaDiv);
    }
}

