const preguntas = [1, 3, 3, 3, 3, 1, 3, 2, 3, 2, 3, 3, 4, 5, 2, 4, 2, 5, 1, 4, 4, 3];
let respuestas = [];


const formulario = document.getElementById("formulario");
const sele = document.getElementsByName("pregunta2");
const btnEnviar = document.getElementById("enviar");
const toastBody = document.querySelector(".toast-body");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //btnEnviar.disabled = true;

    const dataForm = new FormData(formulario);

    respuestas = [];

    for (let i = 1; i <= preguntas.length; i++) {
        respuestas = [...respuestas, dataForm.get(`pregunta${i}`)];
    }

    const contador = { v: 0, f: 0 };
    const correctas = correccion();

    for (let i = 1; i <= preguntas.length; i++) {

        correctas[i - 1] ? contador.v++ : contador.f++;

        document.getElementsByName(`pregunta${i}`).forEach((value) => {
            let res = document.createElement("span");

            if (correctas[i - 1]) {
                res.classList.add("badge", "bg-success");
                res.innerHTML = '<i class="fas fa-check"></i>';
            } else {
                res.classList.add("badge", "bg-danger");
                res.innerHTML = '<i class="fas fa-times"></i>';
            }
            value.checked ? value.appendChild(res) : null;
        });
    }

    let totalRespuesta = document.createElement("p");
    totalRespuesta.innerHTML = `<span class="badge bg-success"><i class="fas fa-check"></i></span> Verdaderas: ${contador.v} </br> <span class="badge bg-danger"><i class="fas fa-times"></i></span> Flasos: ${contador.f}`;
    toastBody.appendChild(totalRespuesta);

});

function correccion() {
    return respuestas.map((valor, i) => {
        return valor == preguntas[i] ? true : false;
    });
}