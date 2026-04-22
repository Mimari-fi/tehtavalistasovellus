let t1 = false;
let t2 = false;
let t3 = false;
let t4 = false;
let t5 = false;

const tasksDiv = document.getElementById("tasks");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset");
const message = document.getElementById("message");

function render() {
  tasksDiv.innerHTML = `
    <div class="task ${t1 ? "done" : ""}">1. Keksi idea</div>
    <div class="task ${t2 ? "done" : ""}">2. Suunnittele tarina</div>
    <div class="task ${t3 ? "done" : ""}">3. Tee HTML</div>
    <div class="task ${t4 ? "done" : ""}">4. Tee CSS</div>
    <div class="task ${t5 ? "done" : ""}">5. Tee JavaScript</div>
  `;
}

function checkAllDone() {
  if (t1 && t2 && t3 && t4 && t5) {
    message.textContent = "Kaikki tehtävät tehty! 🎉";
  }
}

function handleClick() {
  let val = input.value.trim();

  if (val === "1") {
    t1 = true;
    message.textContent = "Tehtävä 1 tehty";
  }
  else if (val === "2") {
    t2 = true;
    message.textContent = "Tehtävä 2 tehty";
  }
  else if (val === "3") {
    t3 = true;
    message.textContent = "Tehtävä 3 tehty";
  }
  else if (val === "4") {
    t4 = true;
    message.textContent = "Tehtävä 4 tehty";
  }
  else if (val === "5") {
    t5 = true;
    message.textContent = "Tehtävä 5 tehty";
  }
  else {
    message.textContent = "Anna numero 1-5";
  }

  input.value = "";
  render();
  checkAllDone();
}

function reset() {
  t1 = false;
  t2 = false;
  t3 = false;
  t4 = false;
  t5 = false;

  message.textContent = "";
  render();
}

btn.addEventListener("click", handleClick);
resetBtn.addEventListener("click", reset);

render();