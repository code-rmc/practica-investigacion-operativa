const preguntas = [1, 3, 3, 3, 3, 1, 3, 2, 3, 4, 3, 3, 1, 5, 2, 4, 2, 5, 1, 4, 4, 3];

const formulario = document.getElementById("formulario");
const sele = document.getElementsByName("pregunta2");
const btnEnviar = document.getElementById("enviar");
const toastBody = document.querySelector(".toast-body");


function correccion(res) {
    return res.map((valor, i) => Number(valor) === preguntas[i] ? true : false);
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //btnEnviar.disabled = true;

    const dataForm = new FormData(formulario);

    const respuestas = preguntas.map((_, i) => dataForm.get(`pregunta${i + 1}`));

    const correctas = correccion(respuestas);

    const contador = { v: 0, f: 0 };

    preguntas.forEach((_, i) => {

        // Contador de V/F
        correctas[i] ? contador.v++ : contador.f++;

        const listaPreguntas = document.getElementsByName(`pregunta${i + 1}`);

        listaPreguntas.forEach((value) => {
            const res = document.createElement("span");
            const advert = document.createElement("span");
            const fragment = document.createDocumentFragment();

            if (correctas[i]) {
                res.classList.add("badge", "bg-success");
                res.innerHTML = '<i class="fas fa-check"></i>';
                fragment.appendChild(res)
                value.checked ? value.parentNode.appendChild(fragment) : null;
            } else {
                res.classList.add("badge", "bg-danger");
                res.innerHTML = '<i class="fas fa-times"></i>';
                fragment.appendChild(res);
                value.parentNode.appendChild(fragment);
                // Indica la correcta
                advert.classList.add("badge", "bg-primary");
                advert.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
                Number(value.value) === preguntas[i] ? value.parentNode.appendChild(advert) : null;
            }
        });
    });

    // Notificacion contador de correctas y flasas
    toastBody.innerHTML = "";
    const fragment = document.createDocumentFragment();
    const totalRespuesta = document.createElement("p");
    totalRespuesta.classList.add("notificacion");
    totalRespuesta.innerHTML = `<span class="badge bg-success"><i class="fas fa-check"></i></span> Verdaderas: ${contador.v} </br> <span class="badge bg-danger"><i class="fas fa-times"></i></span> Flasos: ${contador.f}`;
    fragment.appendChild(totalRespuesta);
    toastBody.appendChild(fragment);
});
