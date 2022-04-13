document.addEventListener("DOMContentLoaded", function () {
  // Once webpage is loaded
  document.querySelector("form").onsubmit = () => {
    // When the form is submitted

    const task = document.querySelector("#task").value; // Assign input task value to a variable
    const li = document.createElement("li"); // Creates a new list item

    li.innerHTML = task; // User input in task goes into this new list item innerHTML
    document.querySelector("#tasks").appendChild(li); // Adds list item

    li.addEventListener("click", function () {
      document.querySelector("#tasks").removeChild(li); // When clicked , removes child from the parent
    });
    // Stop form from submitting
    return false;
  };
});
