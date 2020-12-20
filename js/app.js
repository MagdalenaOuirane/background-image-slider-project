const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

const imgContainer = document.querySelector(".img-container");

const buttons = document.querySelectorAll(".btn");

let active = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button);
    if (button.classList.contains("btn-right")) {
      active++;
      imgContainer.style.backgroundImage = `url('./img/${pictures[active]}.jpeg')`;
    } else if (button.classList.contains("btn-left")) {
      active--;
      imgContainer.style.backgroundImage = `url('./img/${pictures[active]}.jpeg')`;
    }
  });
});
