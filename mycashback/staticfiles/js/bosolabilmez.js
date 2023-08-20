const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
  const inputContainers = document.querySelectorAll(".input-container");
  inputContainers.forEach(container => {
    const input = container.querySelector("input");
    const errorMessage = container.querySelector(".error-message");
    if (input.value === "") {
      input.style.border = "1px solid red";
      errorMessage.style.display = "block";
    } else {
      input.style.border = "1px solid #ccc";
      errorMessage.style.display = "none";
    }
  });
});

const nagdbuttonu = document.getElementById("nagdbutonu");
nagdbuttonu.addEventListener("click", function() {
  const inputContainers = document.querySelectorAll(".input-container");
  inputContainers.forEach(container => {
    const input = container.querySelector("input");
    const errorMessage = container.querySelector(".error-message");
    if (input.value === "") {
      input.style.border = "1px solid red";
      errorMessage.style.display = "block";
    } else {
      input.style.border = "1px solid #ccc";
      errorMessage.style.display = "none";
    }
  });
});