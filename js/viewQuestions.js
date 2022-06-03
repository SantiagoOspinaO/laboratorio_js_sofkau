import { questions } from "../database/questions.js";
import { login } from "./login.js";

export const start = () => {

    let score = 0;

    const container = document.querySelector("#root");

    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");

    const header = document.createElement("header");
    header.classList.add("question-container");
    header.textContent = '¡ W E L C O M E !';

    const h2 = document.createElement("h2");
    h2.classList.add("h2");
    h2.textContent = 'QUIZ GAME';
    
    const questionSection = document.createElement("h3");
    questionSection.classList.add("question-section");

    container.append(questionContainer);
    questionContainer.append(header);
    questionContainer.append(h2);
    questionContainer.append(questionSection);

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const numRandom = random(0, questions.length - 1);

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

    const newQuestion = () => {
        let nuevaQuestion2 = random(element)
    }
}