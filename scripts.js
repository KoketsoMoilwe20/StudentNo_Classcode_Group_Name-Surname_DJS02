const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  if (isNaN(dividend) || isNaN(divider)) { // checking if inputs are numbers.
    result.classList.add("critical-error") // Changes HTML body to red.
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error: Non-numeric input provided");
});