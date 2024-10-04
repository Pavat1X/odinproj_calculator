//Obtaining all the buttons in a list using querySelectorAll
btns = document.querySelectorAll(".calc-btn");
btnsSp = document.querySelectorAll(".calc-btn-sp");

//Obtaining the display element using querySelector
disp = document.querySelector("#display");

//Adding an event listener to each numerical button
btns.forEach(btn => {
    btn.addEventListener("click", function() {
        disp.textContent += this.textContent;
    });
});

//Adding an event listener to each special character button
btnsSp.forEach(btn => {
    btn.addEventListener("click", function() {
        if (this.textContent === "DEL") {
            disp.textContent = disp.textContent.slice(0, -1);
        }
        else if (this.textContent === "AC") {
            disp.textContent = "";
        }
        else if (this.textContent === "=") {
            disp.textContent = eval(disp.textContent);
        }
        else if (this.textContent === "x") {
            disp.textContent += "*";
        }
        else if (this.textContent === "/") {
            disp.textContent += "/";
        }
        else if (this.textContent === "+") {
            disp.textContent += "+";
        }
        else if (this.textContent === "-") {
            disp.textContent += "-";
        }
    });
});

