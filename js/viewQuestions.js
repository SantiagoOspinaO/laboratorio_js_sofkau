import { questions } from "../database/questions.js";

/**
 * Se crea con el objetivo de iniciar el juego, y pintar toda la interfaz que el usuario
 * va a visualizar.
 */
export const start = () => {

    let score = 0;
    /**
     * Se crea el body root
     * 
     * @param  {} "#root"
     */
    const container = document.querySelector("#root");

    
    /**
     * Se crea el div para mostrar las preguntas
     * @param  {} "div"
     */
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");

    
    /**
     * Se crea el header para mostrar el mensaje de bienvenida
     * @param  {} "header"
     */
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = '¡ W E L C O M E !';

    
    /**
     * Se crea un h2 para dinamizar el header
     * @param  {} "h2"
     */
    const h2 = document.createElement("h2");
    h2.classList.add("h2");
    h2.textContent = 'QUIZ GAME';
    
    /**
     * Se crea con el objetivo de pintar las preguntas.
     * @param  {} "h3"
     */
    const questionSection = document.createElement("h3");
    questionSection.classList.add("question-section");

    container.append(questionContainer);
    questionContainer.append(header);
    questionContainer.append(h2);
    questionContainer.append(questionSection);
    /**
     * Se crea con el objetivo de generar un numero aleatorio entre un minimo y un maximo.
     * @param  {} min
     * @param  {} max
     */
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const numRandom = random(0, questions.length - 1);

    /**
     * Se crea con el objetivo de pintar las preguntas y sus opciones de respuesta de
     * manera aleatoria. Además de verificar que la respueta sea la correcta.
     * 
     * @param  {} constelementofquestions[numRandom].options
     */
    for (const element of questions[numRandom].options ) {
        questionSection.textContent = questions[numRandom].question;
        const btnOptions = document.createElement("button");
        btnOptions.classList.add("btn-options");
        btnOptions.textContent = element;
        container.appendChild(btnOptions);
        btnOptions.addEventListener('click', () => {
            window.location.reload();
            if (btnOptions.textContent === questions[numRandom].answer) {
                score++;
                console.log("¡Correcto!"); 
                console.log(score); 
            } else {
                console.log("¡Incorrecto!");
            }
        });
    }
}