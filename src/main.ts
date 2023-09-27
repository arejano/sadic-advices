import './style.css'
import SadicService from './sadic-service.ts';

const service = new SadicService();

let advice: string = ""

async function getAdvice() {
  const data = await service.get(Math.floor(Math.random() * 221));
  advice = data.slip.advice;
  updateAdvice();
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Sadic Advices</h1>
    <div class="card">
      <button id="counter" type="button">Get new Advice</button>
    </div>
    <p id="advices" class="read-the-docs">
    </p>
  </div>
`

function setupClickButton(element: HTMLButtonElement) {
  element.addEventListener('click', () => getAdvice())
}

setupClickButton(document.querySelector<HTMLButtonElement>('#counter')!)

function updateAdvice() {
  console.log(`Atualizando a piadinha`)
  const element = document.getElementById("advices");
  if (element !== null) {
    element.innerText = advice;
  }
}

setTimeout(() => {
  getAdvice();
},200)



