const inputValue = document.getElementById("user-input");
// Fixed from https://medium.com/@sharathchandark/how-to-create-a-calculator-using-html-css-javascript-simple-calculator-in-javascript-f88c264de03a
    // Function to handle number button clicks
    document.querySelectorAll(".numbers").forEach(function (item) {
      item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "Infinity") {
          inputValue.innerText = "";
        }
        if (inputValue.innerText === "0") {
          inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
      });
    });

    // Function to handle operation button clicks
    document.querySelectorAll(".operations").forEach(function (item) {
      item.addEventListener("click", function (e) {
        const lastChar = inputValue.innerText.slice(-1);
        const value = e.target.innerHTML.trim();

        if (value === "=") {
          try {
            inputValue.innerText = eval(inputValue.innerText);
          } catch (error) {
            inputValue.innerText = "Error";
          }
        } else if (value === "AC") {
          inputValue.innerText = "0";
        } else if (value === "DEL") {
          inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
        } else {
          if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(value)) {
            inputValue.innerText = inputValue.innerText.slice(0, -1) + value;
          } else {
            inputValue.innerText += value;
          }
        }
      });
    });
