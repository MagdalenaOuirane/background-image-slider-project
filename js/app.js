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
    }
    if (active === pictures.length) {
      active = 0;
    }
    imgContainer.style.backgroundImage = `url('./img/${pictures[active]}.jpeg')`;
    if (button.classList.contains("btn-left")) {
      active--;
    }
    if (active < 0) {
      active = pictures.length - 1;
      console.log(pictures.length - 1);
    }
    imgContainer.style.backgroundImage = `url('./img/${pictures[active]}.jpeg')`;
  });
});
