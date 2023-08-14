function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelector = document.getElementById("unitSelector");
    const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
  
    if (temperatureInput === "" || isNaN(temperatureInput)) {
      alert("Please enter a valid temperature value.");
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
    let convertedTemperatures = [];
  
    if (selectedUnit === "celsius") {
      convertedTemperatures.push({ unit: "Fahrenheit", value: (temperature * 9 / 5) + 32 });
      convertedTemperatures.push({ unit: "Kelvin", value: temperature + 273.15 });
    } else if (selectedUnit === "fahrenheit") {
      convertedTemperatures.push({ unit: "Celsius", value: (temperature - 32) * 5 / 9 });
      convertedTemperatures.push({ unit: "Kelvin", value: (temperature - 32) * 5 / 9 + 273.15 });
    } else if (selectedUnit === "kelvin") {
      convertedTemperatures.push({ unit: "Celsius", value: temperature - 273.15 });
      convertedTemperatures.push({ unit: "Fahrenheit", value: (temperature - 273.15) * 9 / 5 + 32 });
    }
  
    const resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = "<strong>Converted Temperatures:</strong><br>";
    convertedTemperatures.forEach(temp => {
      resultArea.innerHTML += `${temp.value.toFixed(2)} ${temp.unit}<br>`;
    });
  }
  