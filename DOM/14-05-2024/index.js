let btn = document.querySelector(".btn");
    let firstInput = document.querySelector(".firstInput");

    firstInput.addEventListener("input", abc);
    function abc() {
        let firstInput = document.querySelector(".firstInput").value;
        let tempCel = document.querySelector(".tempCel");
        let ans = document.querySelector(".ans")
        let tempC = document.querySelector(".tempC");
        let tempF = document.querySelector(".tempF");

        btn.style.backgroundColor = "#6c9edf";
        btn.style.transition = "all 0.3s linear";


        let h4 = document.createElement("h4");
        h4.style.margin = "5px";
        h4.innerText = "Temperature in Celsius 👆";

        tempCel.innerText = firstInput
        tempCel.append(h4)



        firstInput = firstInput * 1.8 + 32;
        ans.innerText = firstInput;

        let h5 = document.createElement("h4");
        h5.style.margin = "5px";
        h5.innerText = "Temperature in Fahrenheit 👆";
        ans.append(h5);

    }
