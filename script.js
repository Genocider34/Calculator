// Display
const displayEquation = document.querySelector(".display-equation");
const displayResult = document.querySelector(".display-result");

// Buttons
const cancel = document.querySelector(".cancel");
const one = document.querySelector(".one");
displayEquation.addEventListener("input", () => {
  one.addEventListener("click", () => {
    console.log("1");
    const numOne = "1";
    displayEquation.appendChild(numOne);
  });
});
