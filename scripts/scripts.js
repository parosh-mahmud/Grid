document.getElementById("menu-toggle").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.classList.toggle("open");
});

document.getElementById("close-menu").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.classList.remove("open");
});

document
  .getElementById("bmi-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get values from the form
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
      alert("Please enter valid height and weight.");
      return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine the BMI category
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
    } else if (bmi >= 30) {
      category = "Obese";
    }

    // Display the result
    document.getElementById(
      "bmi-result"
    ).textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  });
